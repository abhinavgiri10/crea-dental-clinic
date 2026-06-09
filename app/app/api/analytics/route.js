import { NextRequest, NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const analyticsData = {
      totalVisitors: 1245,
      organicTraffic: 45,
      adsTraffic: 35,
      directTraffic: 20,
      totalPageViews: 3892,
      bookingSubmissions: 28,
      conversionRate: 2.24,
      lastUpdated: new Date().toLocaleDateString(),
      success: true,
    };

    return NextResponse.json(analyticsData);
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data', success: false },
      { status: 500 }
    );
  }
}
