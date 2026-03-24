import { useState, FormEvent } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const CONTACT_FORM_URL = 'https://readdy.ai/api/form/d71g2g9lum2co2q1fni0';

const contactInfo = [
  { icon: 'ri-map-pin-line', label: 'Address', value: 'ITPL Main Rd, Whitefield, Bangalore — 560066', link: null },
  { icon: 'ri-phone-line', label: 'Phone', value: '+91 98765 43210', link: 'tel:+919876543210' },
  { icon: 'ri-mail-line', label: 'Email', value: 'hello@thegolfmill.com', link: 'mailto:hello@thegolfmill.com' },
  { icon: 'ri-time-line', label: 'Hours', value: 'Monday – Sunday: 7:00 AM – 11:00 PM', link: null },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    setSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('subject', formData.subject);
      params.append('message', formData.message);
      await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: '#0B0F0E', minHeight: '100vh' }}>
      <Navbar />

      <main>
        {/* Page Header */}
        <section
          className="relative pt-28 pb-12"
          style={{
            background: 'linear-gradient(to bottom, rgba(15,61,46,0.12) 0%, transparent 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="container-wide">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
              Get In Touch
            </span>
            <h1
              className="heading-playfair"
              style={{ fontSize: 'clamp(30px, 4vw, 44px)', color: '#EDEDED' }}
            >
              We&apos;d love to hear from you
            </h1>
            <p className="text-sm mt-3 max-w-lg" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
              Have a question, want to book a session, or interested in a membership? Reach out and we&apos;ll get back to you promptly.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Left: Info + Map */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {contactInfo.map((item) => (
                    <div
                      key={item.icon}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
                        style={{ background: 'rgba(15,61,46,0.3)', border: '1px solid rgba(15,61,46,0.4)' }}
                      >
                        <i className={`${item.icon} text-sm`} style={{ color: '#BFA67A' }}></i>
                      </div>
                      <div>
                        <div className="text-xs font-semibold mb-0.5" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                          {item.label}
                        </div>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-sm font-medium cursor-pointer"
                            style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden" style={{ height: '220px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9856782354955!2d77.74600147507636!3d12.973855214995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae119a2fa4de0b%3A0x3e2a5f9e9f0b9af4!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Golf Mill Location"
                  ></iframe>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <div
                  className="p-6 rounded-2xl h-full"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.07)',
                  }}
                >
                  {!submitted ? (
                    <>
                      <h2 className="text-base font-semibold mb-1" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                        Send us a message
                      </h2>
                      <p className="text-xs mb-5" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                        Fill the form and we&apos;ll respond within a few hours.
                      </p>

                      <form
                        onSubmit={handleSubmit}
                        data-readdy-form
                        className="flex flex-col gap-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs mb-1.5 font-medium" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              placeholder="Rohan Mehta"
                              className="input-glass"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-xs mb-1.5 font-medium" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="rohan@example.com"
                              className="input-glass"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs mb-1.5 font-medium" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="+91 98765 43210"
                              className="input-glass"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-xs mb-1.5 font-medium" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                              Subject
                            </label>
                            <select
                              name="subject"
                              className="input-glass"
                              style={{ appearance: 'none' }}
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            >
                              <option value="" style={{ background: '#0B0F0E' }}>Select a topic</option>
                              <option value="Booking" style={{ background: '#0B0F0E' }}>Booking a Session</option>
                              <option value="Membership" style={{ background: '#0B0F0E' }}>Membership Enquiry</option>
                              <option value="Coaching" style={{ background: '#0B0F0E' }}>Coaching Enquiry</option>
                              <option value="Corporate" style={{ background: '#0B0F0E' }}>Corporate Events</option>
                              <option value="Other" style={{ background: '#0B0F0E' }}>Other</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs mb-1.5 font-medium" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                            Message *
                          </label>
                          <textarea
                            name="message"
                            required
                            rows={5}
                            maxLength={500}
                            placeholder="Tell us how we can help..."
                            className="input-glass resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          />
                          <div className="text-xs mt-1 text-right" style={{ color: formData.message.length > 480 ? '#BFA67A' : '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                            {formData.message.length}/500
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={submitting || formData.message.length > 500}
                          className="btn-primary w-full cursor-pointer"
                        >
                          {submitting ? 'Sending...' : 'Send Message'}
                          {!submitting && <i className="ri-send-plane-line ml-2 text-sm"></i>}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="py-12 text-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ background: 'rgba(15,61,46,0.3)', border: '1px solid rgba(15,61,46,0.5)' }}
                      >
                        <i className="ri-check-line text-2xl" style={{ color: '#BFA67A' }}></i>
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                        Message received!
                      </h3>
                      <p className="text-sm" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                        We&apos;ll get back to you within a few hours.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
