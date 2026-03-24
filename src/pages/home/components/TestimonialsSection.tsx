import { testimonials } from '../../../mocks/testimonials';

const TestimonialsSection = () => {
  return (
    <section className="section-padding" style={{ background: '#0B0F0E' }}>
      <div className="container-wide">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
              Testimonials
            </span>
            <h2
              className="heading-playfair"
              style={{ fontSize: 'clamp(24px, 3vw, 30px)', color: '#EDEDED' }}
            >
              What our members say
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-xs" style={{ color: '#BFA67A' }}></i>
              ))}
            </div>
            <span className="text-sm font-semibold" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>4.9</span>
            <span className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>/ 500+ reviews</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-4 rounded-xl cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xs" style={{ color: '#BFA67A' }}></i>
                ))}
              </div>

              {/* Text */}
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
