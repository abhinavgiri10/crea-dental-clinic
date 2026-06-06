'use client';

import { useState } from 'react';

const AVAILABLE_TIMES = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
];

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState(null); // null, 'call', 'whatsapp', 'instagram', 'form'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get today's date
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/meewepkq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          message: `Appointment requested for ${formData.date} at ${formData.time}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: '',
        });
        setTimeout(() => {
          setActiveTab(null);
          setSubmitted(false);
        }, 3000);
      } else {
        alert('There was an error submitting your appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  // Check if the selected date is a Sunday
  const isSunday = (dateString) => {
    if (!dateString) return false;
    const date = new Date(dateString);
    return date.getDay() === 0;
  };

  const selectedDateIsSunday = isSunday(formData.date);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Choose your preferred way to schedule your visit at Crea Dental Clinic
          </p>
        </div>
      </section>

      {/* Main Booking Options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Select How to Book</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Direct Call */}
            <button
              onClick={() => setActiveTab(activeTab === 'call' ? null : 'call')}
              className={`p-8 rounded-lg transition-all duration-300 cursor-pointer border-2 ${
                activeTab === 'call'
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-white text-gray-900 border-gray-200 hover:border-primary hover:shadow-md'
              }`}
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Direct Call</h3>
              <p className={`text-sm ${activeTab === 'call' ? 'text-white opacity-90' : 'text-gray-600'}`}>
                Speak with our team directly
              </p>
              <p className={`text-lg font-bold mt-3 ${activeTab === 'call' ? 'text-white' : 'text-accent'}`}>
                +91 8778548741
              </p>
            </button>

            {/* WhatsApp */}
            <button
              onClick={() => setActiveTab(activeTab === 'whatsapp' ? null : 'whatsapp')}
              className={`p-8 rounded-lg transition-all duration-300 cursor-pointer border-2 ${
                activeTab === 'whatsapp'
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-white text-gray-900 border-gray-200 hover:border-primary hover:shadow-md'
              }`}
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className={`text-sm ${activeTab === 'whatsapp' ? 'text-white opacity-90' : 'text-gray-600'}`}>
                Quick booking via WhatsApp
              </p>
              <p className={`text-lg font-bold mt-3 ${activeTab === 'whatsapp' ? 'text-white' : 'text-accent'}`}>
                Message Us
              </p>
            </button>

            {/* Instagram DM */}
            <button
              onClick={() => setActiveTab(activeTab === 'instagram' ? null : 'instagram')}
              className={`p-8 rounded-lg transition-all duration-300 cursor-pointer border-2 ${
                activeTab === 'instagram'
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-white text-gray-900 border-gray-200 hover:border-primary hover:shadow-md'
              }`}
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Instagram DM</h3>
              <p className={`text-sm ${activeTab === 'instagram' ? 'text-white opacity-90' : 'text-gray-600'}`}>
                DM us on Instagram
              </p>
              <p className={`text-lg font-bold mt-3 ${activeTab === 'instagram' ? 'text-white' : 'text-accent'}`}>
                @creadentalclinic_
              </p>
            </button>

            {/* Book Online Form */}
            <button
              onClick={() => setActiveTab(activeTab === 'form' ? null : 'form')}
              className={`p-8 rounded-lg transition-all duration-300 cursor-pointer border-2 ${
                activeTab === 'form'
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-white text-gray-900 border-gray-200 hover:border-primary hover:shadow-md'
              }`}
            >
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Online Form</h3>
              <p className={`text-sm ${activeTab === 'form' ? 'text-white opacity-90' : 'text-gray-600'}`}>
                Fill out the booking form
              </p>
              <p className={`text-lg font-bold mt-3 ${activeTab === 'form' ? 'text-white' : 'text-accent'}`}>
                Book Now
              </p>
            </button>
          </div>

          {/* Expanded Content */}
          {activeTab && (
            <div className="mt-12">
              {/* Direct Call */}
              {activeTab === 'call' && (
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary mb-6">Call Us to Book</h3>
                  <p className="text-gray-700 mb-6">
                    Speak directly with our appointment team. They'll find the perfect slot for you.
                  </p>
                  <a
                    href="tel:+918778548741"
                    className="inline-block bg-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                  >
                    📞 Call +91 8778548741
                  </a>
                </div>
              )}

              {/* WhatsApp */}
              {activeTab === 'whatsapp' && (
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary mb-6">Message on WhatsApp</h3>
                  <p className="text-gray-700 mb-6">
                    Send us a message on WhatsApp and we'll get back to you shortly with available appointment slots.
                  </p>
                  <a
                    href="https://wa.me/918778548741"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                  >
                    💬 WhatsApp +91 8778548741
                  </a>
                </div>
              )}

              {/* Instagram DM */}
              {activeTab === 'instagram' && (
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary mb-6">Direct Message on Instagram</h3>
                  <p className="text-gray-700 mb-6">
                    Follow us on Instagram and send a direct message to book your appointment.
                  </p>
                  <a
                    href="https://instagram.com/creadentalclinic_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                  >
                    📱 Message @creadentalclinic_
                  </a>
                </div>
              )}

              {/* Online Form */}
              {activeTab === 'form' && (
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
                  {submitted ? (
                    <div className="text-center">
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Appointment Requested!</h3>
                      <p className="text-gray-700 mb-2">
                        Thank you for booking with us. Our team will contact you shortly at <strong>{formData.phone}</strong>.
                      </p>
                      <p className="text-sm text-gray-600">
                        For immediate assistance, call <a href="tel:+918778548741" className="text-primary font-bold hover:underline">+91 8778548741</a>
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-2xl font-bold text-primary mb-6">Fill Your Details</h3>

                      {/* Name */}
                      <div className="mb-6">
                        <label className="block font-semibold text-gray-900 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="mb-6">
                        <label className="block font-semibold text-gray-900 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      {/* Date */}
                      <div className="mb-6">
                        <label className="block font-semibold text-gray-900 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        />
                        {selectedDateIsSunday && (
                          <p className="text-sm text-orange-600 mt-2">
                            ⚠️ Sunday appointments require prior booking. Please contact us directly.
                          </p>
                        )}
                      </div>

                      {/* Time */}
                      {formData.date && (
                        <div className="mb-6">
                          <label className="block font-semibold text-gray-900 mb-3">Preferred Time (10:00 AM - 8:00 PM) *</label>
                          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                            {AVAILABLE_TIMES.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setFormData({ ...formData, time })}
                                disabled={selectedDateIsSunday}
                                className={`py-2 px-2 rounded-lg transition-all text-sm font-medium ${
                                  formData.time === time
                                    ? 'bg-accent text-white'
                                    : selectedDateIsSunday
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-gray-100 text-gray-900 hover:bg-primary hover:text-white'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading || selectedDateIsSunday}
                        className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white py-3 rounded-lg font-bold text-lg transition-all duration-300"
                      >
                        {loading ? 'Submitting...' : 'Request Appointment'}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Hours & Info */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-primary mb-4">Clinic Hours</h3>
              <p className="text-gray-700 mb-3">
                <strong>Monday - Saturday:</strong><br />
                10:00 AM - 8:00 PM
              </p>
              <p className="text-gray-700">
                <strong>Sunday:</strong><br />
                <span className="text-orange-600">By Prior Booking Only</span>
              </p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-primary mb-4">Address</h3>
              <p className="text-gray-700 text-sm">
                16/1, 1st Floor, Sait Colony 1st Street<br />
                Above Freshco, Egmore<br />
                Chennai 600008
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-primary mb-4">Contact</h3>
              <p className="text-gray-700">
                <a href="tel:+918778548741" className="block text-primary font-bold hover:underline mb-2">
                  +91 8778548741
                </a>
                <a href="https://wa.me/918778548741" target="_blank" rel="noopener noreferrer" className="block text-primary font-bold hover:underline">
                  WhatsApp Message
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
