import { Link } from 'react-router-dom';
import Navbar from '../components/feature/Navbar';
import Footer from '../components/feature/Footer';

const NotFound = () => {
  return (
    <div style={{ background: '#0B0F0E', minHeight: '100vh' }}>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-2xl mb-8"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <i className="ri-golf-ball-line text-2xl" style={{ color: '#BFA67A' }}></i>
        </div>

        <span
          className="text-xs font-semibold uppercase tracking-widest mb-3 block"
          style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}
        >
          404 Error
        </span>

        <h1
          className="heading-playfair mb-3"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#EDEDED' }}
        >
          Looks like you missed the fairway.
        </h1>

        <p
          className="text-sm leading-relaxed max-w-sm mb-8"
          style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
        >
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back on course.
        </p>

        <div className="flex items-center gap-3">
          <Link to="/" className="btn-primary cursor-pointer">
            Back to Home
          </Link>
          <Link to="/contact" className="btn-glass cursor-pointer">
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
