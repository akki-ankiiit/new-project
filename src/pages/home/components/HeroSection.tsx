import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const FORM_URL = 'https://readdy.ai/api/form/d71g2f1lum2co2q1fnhg';

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('message', formData.message);
      await fetch(FORM_URL, {
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
    <section
      className="relative min-h-screen flex flex-col"
      style={{ background: '#0B0F0E' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=luxury%20dark%20indoor%20golf%20simulator%20training%20facility%20premium%20studio%20curved%20large%20screens%20showing%20lush%20golf%20course%20green%20fairways%20cinematic%20atmosphere%20deep%20shadows%20ambient%20emerald%20lighting%20high%20end%20technology%20sports%20professional%20setup%20dramatic%20studio%20photography&width=1920&height=1080&seq=1&orientation=landscape"
          alt="Golf Simulator"
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.45 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,15,14,0.85) 0%, rgba(11,15,14,0.6) 50%, rgba(11,15,14,0.75) 100%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,15,14,1) 0%, transparent 40%)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-wide w-full pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-5">
              {/* Location Pill */}
              <div
                className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <i className="ri-map-pin-2-line text-xs" style={{ color: '#BFA67A' }}></i>
                <span className="text-xs font-medium" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                  Whitefield, Bangalore
                </span>
              </div>

              {/* Headline */}
              <h1
                className="heading-playfair"
                style={{
                  fontSize: 'clamp(38px, 5vw, 54px)',
                  color: '#EDEDED',
                }}
              >
                Upgrade your skills,
                <br />
                <span style={{ color: '#BFA67A' }}>upgrade your game.</span>
              </h1>

              {/* Subtext */}
              <p
                className="text-base leading-relaxed max-w-md"
                style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
              >
                State-of-the-art simulators. Precision coaching. 200+ courses from around the world — all under one roof.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm" style={{ color: '#BFA67A' }}></i>
                  ))}
                </div>
                <span className="text-sm font-medium" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                  4.9
                </span>
                <span className="text-sm" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                  from 500+ golfers
                </span>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 mt-1">
                <Link to="/services" className="btn-primary cursor-pointer">
                  Explore Services
                </Link>
                <Link to="/contact" className="btn-glass cursor-pointer">
                  <i className="ri-play-circle-line mr-1.5 text-sm"></i>
                  Watch Tour
                </Link>
              </div>
            </div>

            {/* Right: Book a Call Form Card */}
            <div
              className="glass-inner rounded-2xl p-6 max-w-sm ml-auto w-full"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {!submitted ? (
                <>
                  <div className="mb-5">
                    <h2
                      className="text-base font-semibold mb-1"
                      style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Book a call with our experts
                    </h2>
                    <p className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                      We&apos;ll get back to you within 2 hours.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    data-readdy-form
                    className="flex flex-col gap-3"
                  >
                    <div>
                      <label
                        className="block text-xs mb-1.5 font-medium"
                        style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Full Name
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
                      <label
                        className="block text-xs mb-1.5 font-medium"
                        style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Email Address
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

                    <div>
                      <label
                        className="block text-xs mb-1.5 font-medium"
                        style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        maxLength={500}
                        placeholder="Tell us about your goals..."
                        className="input-glass resize-none"
                        style={{ height: '80px' }}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full mt-1 cursor-pointer"
                      style={{ height: '40px' }}
                    >
                      {submitting ? 'Sending...' : 'Request a Call'}
                      {!submitting && <i className="ri-arrow-right-line ml-2 text-sm"></i>}
                    </button>
                  </form>

                  <p className="text-xs mt-3 text-center" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                    <i className="ri-lock-line mr-1"></i>No spam, ever.
                  </p>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(15,61,46,0.3)', border: '1px solid rgba(15,61,46,0.5)' }}
                  >
                    <i className="ri-check-line text-xl" style={{ color: '#BFA67A' }}></i>
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                    We&apos;ll be in touch!
                  </h3>
                  <p className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                    Our team will reach out within 2 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
