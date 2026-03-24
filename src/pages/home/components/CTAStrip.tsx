import { Link } from 'react-router-dom';

const CTAStrip = () => {
  return (
    <section className="py-6" style={{ background: '#0B0F0E' }}>
      <div className="container-wide">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center gap-4">
            {/* Dot indicator */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#4CAF50' }}
              ></span>
              <span className="text-sm font-medium" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                Open now
              </span>
            </div>
            <div className="h-4 w-px" style={{ background: 'rgba(255,255,255,0.12)' }}></div>
            <span className="text-sm" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
              Monday to Sunday · 7:00 AM – 11:00 PM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 btn-glass cursor-pointer"
            >
              <i className="ri-phone-line text-sm" style={{ color: '#BFA67A' }}></i>
              <span>+91 98765 43210</span>
            </a>
            <Link to="/contact" className="btn-primary cursor-pointer">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
