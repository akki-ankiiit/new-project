import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: '80px 0', background: '#080C0B' }}
    >
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20lush%20golf%20course%20green%20fairway%20at%20dusk%20warm%20golden%20light%20dramatic%20sky%20clouds%20premium%20golf%20resort%20landscape%20wide%20panoramic%20cinematic%20luxury%20photography&width=1920&height=600&seq=5&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.12 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,12,11,0.9) 0%, rgba(8,12,11,0.7) 50%, rgba(8,12,11,0.9) 100%)' }}></div>
      </div>

      <div className="relative z-10 container-wide text-center">
        {/* Accent line */}
        <div
          className="w-12 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #BFA67A, transparent)' }}
        ></div>

        <h2
          className="heading-playfair mb-4"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#EDEDED' }}
        >
          Ready to elevate your game?
        </h2>

        <p
          className="text-sm leading-relaxed max-w-md mx-auto mb-8"
          style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
        >
          Join 500+ golfers who train smarter with world-class simulators and expert coaching at The Golf Mill.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link to="/contact" className="btn-primary cursor-pointer">
            Book Your Session
          </Link>
          <Link to="/services" className="btn-glass cursor-pointer">
            View Services
          </Link>
        </div>

        {/* Subtle stat row */}
        <div className="flex items-center justify-center gap-8 mt-10">
          {[
            { num: '200+', label: 'Courses' },
            { num: '500+', label: 'Members' },
            { num: '4.9★', label: 'Rating' },
            { num: '7 Days', label: 'Open' },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <div
                className="text-base font-semibold"
                style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}
              >
                {stat.num}
              </div>
              <div className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
