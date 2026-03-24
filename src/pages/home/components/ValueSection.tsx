const features = [
  { icon: 'ri-radar-line', title: 'TrackMan Precision', desc: '50+ data points per shot. Ball speed, spin, launch angle — all captured in real time.' },
  { icon: 'ri-global-line', title: '200+ World Courses', desc: 'Play Augusta, Pebble Beach, and St. Andrews without leaving Bangalore.' },
  { icon: 'ri-user-star-line', title: 'PGA Certified Coaches', desc: 'One-on-one sessions with professionals who analyse every frame of your swing.' },
  { icon: 'ri-bar-chart-line', title: 'Performance Analytics', desc: 'Detailed stats after every session. Track your progress over time with smart insights.' },
];

const ValueSection = () => {
  return (
    <section className="section-padding" style={{ background: '#0B0F0E' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ height: '420px' }}>
              <img
                src="https://readdy.ai/api/search-image?query=professional%20male%20golfer%20focused%20concentrated%20on%20precision%20swing%20in%20premium%20dark%20indoor%20simulator%20studio%20close%20up%20hands%20gripping%20golf%20club%20green%20ambient%20soft%20glow%20bokeh%20technology%20screens%20background%20luxury%20sports%20training%20environment%20cinematic&width=800&height=840&seq=2&orientation=portrait"
                alt="Precision golf coaching"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to top, rgba(11,15,14,0.6) 0%, transparent 60%)' }}></div>
            </div>

            {/* Floating Stat Card */}
            <div
              className="absolute bottom-6 left-6 px-4 py-3 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              }}
            >
              <div className="text-xl font-semibold" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>−5.2</div>
              <div className="text-xs mt-0.5" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>Avg. handicap drop after 8 sessions</div>
            </div>

            {/* Courses Badge */}
            <div
              className="absolute top-6 right-6 px-3 py-2 rounded-xl text-center"
              style={{
                background: 'rgba(15,61,46,0.35)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(15,61,46,0.4)',
              }}
            >
              <div className="text-lg font-bold" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>200+</div>
              <div className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>Courses</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
                Why The Golf Mill
              </span>
              <h2
                className="heading-playfair mb-3"
                style={{ fontSize: 'clamp(26px, 3vw, 34px)', color: '#EDEDED' }}
              >
                Transform your practice into
                <span style={{ color: '#BFA67A' }}> peak performance</span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                Whether you&apos;re a weekend golfer or a competitive player, our technology and coaching combine to deliver measurable improvement — every session.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div
                  key={f.icon}
                  className="flex items-start gap-4 p-4 rounded-xl glass-hover cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{ background: 'rgba(15,61,46,0.3)', border: '1px solid rgba(15,61,46,0.4)' }}
                  >
                    <i className={`${f.icon} text-base`} style={{ color: '#BFA67A' }}></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                      {f.title}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
