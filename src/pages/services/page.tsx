import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { services } from '../../mocks/services';

const ServicesPage = () => {
  return (
    <div style={{ background: '#0B0F0E', minHeight: '100vh' }}>
      <Navbar />

      <main>
        {/* Page Header */}
        <section
          className="relative pt-28 pb-14"
          style={{
            background: 'linear-gradient(to bottom, rgba(15,61,46,0.12) 0%, transparent 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=luxury%20indoor%20golf%20simulator%20facility%20wide%20shot%20multiple%20bays%20screens%20dark%20studio%20premium%20sports%20technology%20ambient%20green%20lighting%20cinematic%20professional%20setup%20high%20end%20photography&width=1920&height=600&seq=10&orientation=landscape"
              alt="Services header"
              className="w-full h-full object-cover object-top"
              style={{ opacity: 0.12 }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,15,14,0.7) 0%, rgba(11,15,14,0.95) 100%)' }}></div>
          </div>
          <div className="relative z-10 container-wide">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
              What We Offer
            </span>
            <h1
              className="heading-playfair mb-3"
              style={{ fontSize: 'clamp(30px, 4vw, 44px)', color: '#EDEDED' }}
            >
              Services &amp; Packages
            </h1>
            <p className="text-sm max-w-lg" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
              From solo simulator sessions to full corporate events — we have a package tailored for every golfer and every occasion.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative flex flex-col p-5 rounded-2xl cursor-default"
                  style={{
                    background: service.highlight
                      ? 'linear-gradient(135deg, rgba(15,61,46,0.25) 0%, rgba(255,255,255,0.05) 100%)'
                      : 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: service.highlight
                      ? '1px solid rgba(15,61,46,0.5)'
                      : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: service.highlight
                      ? '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)'
                      : '0 4px 20px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = service.highlight
                      ? '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)'
                      : '0 4px 20px rgba(0,0,0,0.15)';
                  }}
                >
                  {/* Badge */}
                  {service.highlight && (
                    <div
                      className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(191,166,122,0.15)', color: '#BFA67A', border: '1px solid rgba(191,166,122,0.3)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Most Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl mb-4"
                    style={{
                      background: service.highlight ? 'rgba(15,61,46,0.4)' : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${service.highlight ? 'rgba(15,61,46,0.5)' : 'rgba(255,255,255,0.1)'}`,
                    }}
                  >
                    <i className={`${service.icon} text-lg`} style={{ color: '#BFA67A' }}></i>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-sm font-semibold mb-1.5"
                    style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs leading-relaxed mb-4 flex-1"
                    style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-1.5 mb-5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <i className="ri-check-line text-xs flex-shrink-0" style={{ color: '#BFA67A' }}></i>
                        <span className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div>
                      <span
                        className="text-base font-semibold"
                        style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {service.price}
                      </span>
                      <span className="text-xs ml-1" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                        {service.unit}
                      </span>
                    </div>
                    <Link
                      to="/contact"
                      className={service.highlight ? 'btn-primary cursor-pointer' : 'btn-glass cursor-pointer'}
                      style={{ fontSize: '12px', height: '34px', padding: '8px 14px' }}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div
              className="mt-10 p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-sm" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                Looking for a custom arrangement?{' '}
                <Link
                  to="/contact"
                  className="font-medium cursor-pointer"
                  style={{ color: '#BFA67A', textDecoration: 'none' }}
                >
                  Contact our team
                </Link>{' '}
                and we&apos;ll tailor the perfect package for you.
              </p>
            </div>
          </div>
        </section>

        {/* Simulator Feature Strip */}
        <section
          className="py-14"
          style={{
            background: 'rgba(15,61,46,0.08)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'ri-cpu-line', label: 'TrackMan Technology', sub: 'Industry leading accuracy' },
                { icon: 'ri-global-line', label: '200+ Courses', sub: 'Worldwide selection' },
                { icon: 'ri-award-line', label: 'PGA Certified', sub: 'Professional coaches' },
                { icon: 'ri-group-line', label: 'Private Bays', sub: 'Exclusive experience' },
              ].map((item) => (
                <div key={item.icon} className="flex flex-col items-center text-center gap-2">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl mb-1"
                    style={{ background: 'rgba(15,61,46,0.3)', border: '1px solid rgba(15,61,46,0.4)' }}
                  >
                    <i className={`${item.icon} text-base`} style={{ color: '#BFA67A' }}></i>
                  </div>
                  <div className="text-sm font-semibold" style={{ color: '#EDEDED', fontFamily: 'DM Sans, sans-serif' }}>
                    {item.label}
                  </div>
                  <div className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
