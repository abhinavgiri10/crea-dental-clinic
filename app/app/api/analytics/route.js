import { NextRequest, NextResponse } from 'next/server';

// Get credentials from environment variables
const PROPERTY_ID = process.env.GA_PROPERTY_ID;
const CLIENT_ID = process.env.NEXT_PUBLIC_GA_CLIENT_ID;
const CLIENT_SECRET = process.env.GA_CLIENT_SECRET;

// Helper function to get GA4 access token using OAuth
async function getGAAccessToken() {
  try {
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: 'https://www.googleapis.com/auth/analytics.readonly',
      }),
    });

    if (!tokenResponse.ok) {
      console.error('Token response error:', await tokenResponse.text());
      return null;
    }

    const { access_token } = await tokenResponse.json();
    return access_token;
  } catch (error) {
    console.error('Error getting GA access token:', error);
    return null;
  }
}

// Helper function to fetch data from Google Analytics Data API
async function fetchGAData(accessToken) {
  try {
    // Calculate date range (last 7 days)
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);

    const formatDate = (date) => date.toISOString().split('T')[0];

    const payload = {
      dateRanges: [
        {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
        },
      ],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'conversions' },
      ],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    };

    const response = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.error('GA API error:', await response.text());
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GA data:', error);
    return null;
  }
}

// Parse GA response and format for dashboard
function parseGAResponse(gaData) {
  if (!gaData || !gaData.rows) {
    return null;
  }

  let organicTraffic = 0;
  let adsTraffic = 0;
  let directTraffic = 0;
  let totalVisitors = 0;
  let totalPageViews = 0;
  let bookingSubmissions = 0;

  // Parse rows from GA response
  gaData.rows.forEach((row) => {
    const channel = row.dimensions[0];
    const activeUsers = parseInt(row.metricValues[0].value) || 0;
    const pageViews = parseInt(row.metricValues[2].value) || 0;
    const conversions = parseInt(row.metricValues[3].value) || 0;

    totalVisitors += activeUsers;
    totalPageViews += pageViews;
    bookingSubmissions += conversions;

    // Categorize by channel
    if (channel.includes('Organic')) {
      organicTraffic = activeUsers;
    } else if (channel.includes('Paid') || channel.includes('Ads')) {
      adsTraffic = activeUsers;
    } else if (channel.includes('Direct')) {
      directTraffic = activeUsers;
    }
  });

  // Calculate percentages for traffic sources
  const totalTraffic = organicTraffic + adsTraffic + directTraffic || 1;
  const organicPercent = Math.round((organicTraffic / totalTraffic) * 100);
  const adsPercent = Math.round((adsTraffic / totalTraffic) * 100);
  const directPercent = Math.round((directTraffic / totalTraffic) * 100);

  // Calculate conversion rate
  const conversionRate =
    totalVisitors > 0
      ? ((bookingSubmissions / totalVisitors) * 100).toFixed(2)
      : 0;

  return {
    totalVisitors,
    organicTraffic: organicPercent,
    adsTraffic: adsPercent,
    directTraffic: directPercent,
    totalPageViews,
    bookingSubmissions,
    conversionRate: parseFloat(conversionRate),
    lastUpdated: new Date().toLocaleDateString(),
    success: true,
  };
}

export async function GET(request) {
  try {
    // Validate required environment variables
    if (!PROPERTY_ID || !CLIENT_ID || !CLIENT_SECRET) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        {
          error: 'Analytics credentials not configured',
          success: false,
        },
        { status: 500 }
      );
    }

    // Get access token
    const accessToken = await getGAAccessToken();
    if (!accessToken) {
      console.error('Failed to get access token');
      return NextResponse.json(
        { error: 'Failed to authenticate with Google Analytics', success: false },
        { status: 500 }
      );
    }

    // Fetch GA data
    const gaData = await fetchGAData(accessToken);
    if (!gaData) {
      console.error('Failed to fetch GA data');
      return NextResponse.json(
        { error: 'Failed to fetch analytics data', success: false },
        { status: 500 }
      );
    }

    // Parse and format the response
    const analyticsData = parseGAResponse(gaData);
    if (!analyticsData) {
      throw new Error('Failed to parse GA response');
    }

    return NextResponse.json(analyticsData);
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data', success: false },
      { status: 500 }
    );
  }
}
