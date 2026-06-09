'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [dashboardData, setDashboardData] = useState({
    totalVisitors: 1245,
    organicTraffic: 45,
    adsTraffic: 35,
    directTraffic: 20,
    totalPageViews: 3892,
    bookingSubmissions: 28,
    conversionRate: 2.24,
    lastUpdated: new Date().toLocaleDateString(),
  });

  const CORRECT_PASSWORD = 'Monabhi_29';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      setPassword('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const downloadDashboard = () => {
    const dashboardContent = `
CREA DENTAL CLINIC - ANALYTICS DASHBOARD
Generated: ${new Date().toLocaleString()}

7-DAY METRICS SUMMARY
================================

VISITOR METRICS:
- Total Visitors: ${dashboardData.totalVisitors.toLocaleString()}
- Conversion Rate: ${dashboardData.conversionRate}%

TRAFFIC SOURCES:
- Organic Traffic: ${dashboardData.organicTraffic}%
- Ads Traffic: ${dashboardData.adsTraffic}%
- Direct Traffic: ${dashboardData.directTraffic}%

ENGAGEMENT:
- Total Page Views: ${dashboardData.totalPageViews.toLocaleString()}

BOOKINGS:
- Booking Form Submissions: ${dashboardData.bookingSubmissions}

Last Updated: ${dashboardData.lastUpdated}
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(dashboardContent));
    element.setAttribute('download', `crea-dashboard-${new Date().toISOString().split('T')[0]}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary mb-2 text-center">Crea Dental</h1>
          <p className="text-gray-600 text-center mb-8">Analytics Dashboard</p>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter dashboard password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Access Dashboard
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">
            Secure dashboard for clinic analytics
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-white opacity-90">Last 7 days • Updated {dashboardData.lastUpdated}</p>
            </div>
            <div className="space-x-4">
              <button
                onClick={downloadDashboard}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                📥 Download Report
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Total Visitors Widget */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow">
              <p className="text-gray-600 text-sm font-semibold mb-2">TOTAL VISITORS</p>
              <h2 className="text-4xl font-bold text-primary mb-2">{dashboardData.totalVisitors.toLocaleString()}</h2>
              <p className="text-gray-500 text-sm">Last 7 days</p>
            </div>

            {/* Traffic Sources Widget */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow">
              <p className="text-gray-600 text-sm font-semibold mb-4">TRAFFIC SOURCES</p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">Organic</span>
                    <span className="text-sm font-bold text-primary">{dashboardData.organicTraffic}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: `${dashboardData.organicTraffic}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">Ads</span>
                    <span className="text-sm font-bold text-accent">{dashboardData.adsTraffic}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{width: `${dashboardData.adsTraffic}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">Direct</span>
                    <span className="text-sm font-bold text-gray-600">{dashboardData.directTraffic}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{width: `${dashboardData.directTraffic}%`}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Page Views Widget */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow">
              <p className="text-gray-600 text-sm font-semibold mb-2">TOTAL PAGE VIEWS</p>
              <h2 className="text-4xl font-bold text-primary mb-2">{dashboardData.totalPageViews.toLocaleString()}</h2>
              <p className="text-gray-500 text-sm">Last 7 days</p>
            </div>

            {/* Booking Submissions Widget - HIGHLIGHTED */}
            <div className="bg-gradient-to-br from-accent to-orange-500 rounded-lg shadow-lg p-6 border-l-4 border-orange-600 hover:shadow-xl transition-shadow text-white md:col-span-2 lg:col-span-1">
              <p className="text-white text-sm font-semibold mb-2 opacity-90">BOOKING SUBMISSIONS</p>
              <h2 className="text-5xl font-bold mb-2">🎯 {dashboardData.bookingSubmissions}</h2>
              <p className="text-white opacity-80 text-sm">Patient booking requests</p>
              <div className="mt-4 pt-4 border-t border-white border-opacity-30">
                <p className="text-sm text-white opacity-90">Avg per day: {(dashboardData.bookingSubmissions / 7).toFixed(1)}</p>
              </div>
            </div>

            {/* Conversion Rate Widget */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <p className="text-gray-600 text-sm font-semibold mb-2">CONVERSION RATE</p>
              <h2 className="text-4xl font-bold text-primary mb-2">{dashboardData.conversionRate}%</h2>
              <p className="text-gray-500 text-sm">Visitors to booking conversion</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">📈 Based on booking submissions vs total visitors</p>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">7-Day Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-2">Total engagement from all sources</p>
                <p className="text-3xl font-bold text-primary">{(dashboardData.totalVisitors + dashboardData.totalPageViews).toLocaleString()} interactions</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Booking success indicator</p>
                <p className="text-3xl font-bold text-accent">🎯 {dashboardData.bookingSubmissions} appointments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
