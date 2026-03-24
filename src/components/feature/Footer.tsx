import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#080C0B',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 cursor-pointer">
              <img
                src="https://static.readdy.ai/image/9dd5690ef9c07cebb697edae64fe8cdc/cb56ff5ec8b0df6bbce7c55095adebc6.svg"
                alt="The Golf Mill"
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
              Premium indoor golf simulation in the heart of Whitefield, Bangalore. 200+ courses. Precision coaching.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {['ri-instagram-line', 'ri-facebook-circle-line', 'ri-youtube-line'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  rel="nofollow"
                  className="w-8 h-8 flex items-center justify-center rounded-lg transition-all cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#A8B0AD',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#EDEDED';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#A8B0AD';
                  }}
                >
                  <i className={`${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs transition-colors cursor-pointer"
                    style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#EDEDED'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#A8B0AD'; }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {['Simulator Sessions', 'Pro Coaching', 'Group Packages', 'Corporate Events', 'Elite Membership'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-xs transition-colors cursor-pointer"
                    style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#EDEDED'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#A8B0AD'; }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { icon: 'ri-map-pin-line', text: 'ITPL Main Rd, Whitefield, Bangalore — 560066' },
                { icon: 'ri-phone-line', text: '+91 98765 43210' },
                { icon: 'ri-mail-line', text: 'hello@thegolfmill.com' },
                { icon: 'ri-time-line', text: 'Mon–Sun: 7:00 AM – 11:00 PM' },
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-2">
                  <i className={`${item.icon} text-xs mt-0.5`} style={{ color: '#BFA67A', minWidth: '12px' }}></i>
                  <span className="text-xs leading-relaxed" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
            © 2026 The Golf Mill. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/legal" className="text-xs transition-colors cursor-pointer" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#EDEDED'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#A8B0AD'; }}
            >Privacy Policy</Link>
            <Link to="/legal#terms" className="text-xs transition-colors cursor-pointer" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#EDEDED'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#A8B0AD'; }}
            >Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
