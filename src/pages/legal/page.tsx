import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const PRIVACY_SECTIONS = [
  {
    title: 'Introduction',
    body: `The Golf Mill ("we," "our," "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, process, store, and safeguard your information when you access our website, make bookings, or use our services. By using our platform, you consent to the practices described in this policy.`,
  },
  {
    title: 'Information We Collect',
    body: `We collect personal information that you voluntarily provide while using our services, including your name, mobile number, email address, booking details, communication preferences, and payment status. Where relevant, we may also collect age information and other information as may be deemed necessary from time to time, for training programs or eligibility purposes.\n\nIn addition, we may automatically collect technical and usage information such as IP address, device information, browser type, and website interaction data. If you use simulator services, we may store gameplay and performance metrics to improve your experience and provide analytics.`,
  },
  {
    title: 'How We Use Your Data',
    body: `Your personal data is used to process bookings, send confirmations and reminders, provide customer support, maintain service history, improve platform functionality, conduct analytics, and comply with legal obligations. We may also use your information to send marketing communication where you have given consent.\n\nPayment transactions are handled via secure third-party providers and we do not store complete debit or credit card information on our servers.`,
  },
  {
    title: 'Communication Consent',
    body: `By providing your phone number or email address, you consent to receive booking confirmations, reminders, service updates, and transaction notifications. Promotional communication is sent only when permitted by law or where you have opted in. You may withdraw this consent at any time by contacting us directly.`,
  },
  {
    title: 'Data Security & Storage',
    body: `Your data is stored on secure servers and protected through reasonable technical and organizational safeguards. Access is limited to authorized personnel and trusted service providers. Data may be processed in India or other jurisdictions through vendors who comply with applicable data protection standards.`,
  },
  {
    title: 'Data Sharing',
    body: `We may share information with payment processors, messaging providers, hosting platforms, analytics tools, and customer management systems solely for service delivery and operational purposes. We do not sell personal data to third parties under any circumstances.`,
  },
  {
    title: 'Data Retention & Your Rights',
    body: `We retain your information only for as long as necessary to provide services, maintain records, meet legal and regulatory obligations, and support legitimate business operations. You may request access, correction, or deletion of your personal data, subject to applicable laws.`,
  },
  {
    title: 'Cookies',
    body: `Our website uses cookies and similar technologies to improve functionality, analyse traffic, and personalise user experience. You may disable cookies through your browser settings, although some features may not function properly as a result.`,
  },
  {
    title: 'Children\'s Privacy',
    body: `Our services are not intended for children under 18 without parental consent. We do not knowingly collect personal data from minors without appropriate guardian authorisation.`,
  },
  {
    title: 'Policy Updates',
    body: `We may update this Privacy Policy periodically. Continued use of the platform following any changes constitutes acceptance of the updated policy. We encourage you to review this page regularly.`,
  },
  {
    title: 'Contact Us',
    body: `For privacy-related requests or concerns, please reach us at:\n\nEmail: [Insert email]\nPhone: +91 99107 77573\nAddress: LTH-304A, Laburnum, A Block, Sushant Lok Phase 1, Sector 29, Gurugram – 122009`,
  },
];

const TERMS_SECTIONS = [
  {
    title: 'Overview',
    body: `These Terms of Service ("Terms") govern your access to and use of The Golf Mill website, booking platform, and indoor golf simulator facility ("Services"). By accessing our platform, making a booking, or entering our premises, you agree to be bound by these Terms.\n\nIf you do not agree with these Terms, please do not use our Services.`,
  },
  {
    title: 'About Us',
    body: `The Services are operated by The Golf Mill, located at:\n\nLevel 2, Phoenix Marketcity, Whitefield, Bangalore 560048\nPhone: +91 99107 77573\nEmail: [Insert Email]`,
  },
  {
    title: 'Eligibility',
    body: `You must be at least 18 years of age to make a booking. Minors may use the facility only under adult supervision.\n\nBy using our Services, you confirm that all information provided by you is accurate and complete.`,
  },
  {
    title: 'Bookings & Payments',
    body: `All sessions must be booked through our official platform or authorised channels. Bookings are confirmed only upon successful payment (where applicable).\n\nPricing, availability, and session duration are subject to change without prior notice. Payment processing is handled by secure third-party providers. We do not store complete debit or credit card information on our servers.`,
  },
  {
    title: 'Cancellations, Rescheduling & Refunds',
    body: `Cancellations must be made within the time window displayed at the time of booking. Late cancellations may incur charges.\n\nFailure to attend a session without prior cancellation will be treated as a no-show and may not be eligible for a refund.\n\nRescheduling requests must be made before the scheduled session time and are subject to availability and approval.\n\nRefunds, where applicable, will be processed to the original payment method within 5–10 business days (depending on banking timelines).\n\nMemberships, prepaid packages, and promotional plans are generally non-refundable unless required by law or approved by management. The Golf Mill reserves the right to deduct applicable cancellation or service charges from amounts paid.`,
  },
  {
    title: 'Facility Rules & Code of Conduct',
    body: `By entering the premises, you agree to:\n\n• Follow all instructions provided by staff\n• Maintain safe distances while swings are in motion\n• Use simulators and equipment responsibly\n• Supervise minors at all times\n• Refrain from reckless, unsafe, or disruptive behaviour\n\nWe reserve the right to refuse service or remove any individual from the premises for violation of these rules without refund.`,
  },
  {
    title: 'Assumption of Risk & Liability',
    body: `Golf simulator activities involve physical movement and inherent risks, including potential injury or property damage.\n\nBy using our Services:\n• You acknowledge and voluntarily assume these risks\n• You confirm that you are physically capable of participating\n• You agree that participation is at your own risk\n\nThe Golf Mill shall not be liable for injuries, accidents, or losses arising from improper use of equipment, failure to follow safety instructions, or reckless or negligent behaviour.\n\nYou accept responsibility for any damage caused to equipment or property due to negligence, misuse, or failure to comply with facility guidelines.`,
  },
  {
    title: 'Personal Belongings',
    body: `Visitors are responsible for safeguarding their personal belongings. The Golf Mill is not liable for loss, theft, or damage to personal items brought onto the premises.`,
  },
  {
    title: 'Memberships & Packages',
    body: `Memberships and prepaid packages are subject to specific terms communicated at the time of purchase. Transferability is subject to management approval.\n\nBenefits and pricing may be modified at our discretion.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on our website and platform — including logos, branding, images, text, and software — is the property of The Golf Mill and may not be copied, reproduced, or used without prior written permission.`,
  },
  {
    title: 'Privacy',
    body: `Your use of our Services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data. We encourage you to review it carefully.`,
  },
  {
    title: 'Communications & Consent',
    body: `By providing your contact details, you consent to receive:\n\n• Booking confirmations\n• Reminders\n• Service-related updates\n\nPromotional communication will be sent only where permitted by law or where you have opted in. You may withdraw marketing consent at any time by contacting us directly.`,
  },
  {
    title: 'Force Majeure',
    body: `The Golf Mill shall not be held responsible for failure or delay in providing Services due to events beyond our reasonable control, including but not limited to natural disasters, power outages, government restrictions, or technical disruptions.`,
  },
  {
    title: 'Modifications to Terms',
    body: `We may update these Terms from time to time. Continued use of our Services after changes are posted constitutes acceptance of the revised Terms. We recommend reviewing this page periodically.`,
  },
  {
    title: 'Governing Law & Jurisdiction',
    body: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Gurugram, Haryana.\n\nIf you have any questions regarding these Terms, please contact us at:\n\nEmail: [Insert Email]\nPhone: +91 99107 77573`,
  },
];

type Tab = 'privacy' | 'terms';

const LegalPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<Tab>('privacy');
  const [openSection, setOpenSection] = useState<number | null>(0);

  useEffect(() => {
    if (location.hash === '#terms') {
      setActiveTab('terms');
    } else {
      setActiveTab('privacy');
    }
    setOpenSection(0);
  }, [location.hash]);

  const sections = activeTab === 'privacy' ? PRIVACY_SECTIONS : TERMS_SECTIONS;

  return (
    <div style={{ background: '#0B0F0E', minHeight: '100vh' }}>
      <Navbar />

      {/* Header */}
      <section
        className="pt-32 pb-16 relative"
        style={{
          background: 'linear-gradient(180deg, rgba(15,61,46,0.18) 0%, transparent 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="container-wide">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              to="/"
              className="text-xs transition-colors cursor-pointer"
              style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
            >
              Home
            </Link>
            <i className="ri-arrow-right-s-line text-xs" style={{ color: '#A8B0AD' }}></i>
            <span className="text-xs" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
              Legal
            </span>
          </div>

          <h1
            className="text-3xl mb-3"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#EDEDED',
              lineHeight: 1.25,
            }}
          >
            Legal &amp; Privacy
          </h1>
          <p className="text-sm" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
            Last updated: March 2026
          </p>

          {/* Tab Switcher */}
          <div
            className="inline-flex mt-8 p-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {(['privacy', 'terms'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenSection(0); }}
                className="px-5 py-2 text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: activeTab === tab ? '#0F3D2E' : 'transparent',
                  color: activeTab === tab ? '#EDEDED' : '#A8B0AD',
                  border: activeTab === tab ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
                }}
              >
                {tab === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* Intro blurb */}
            <div
              className="rounded-xl p-5 mb-8"
              style={{
                background: 'rgba(15,61,46,0.14)',
                border: '1px solid rgba(15,61,46,0.35)',
              }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                {activeTab === 'privacy'
                  ? 'This Privacy Policy outlines how The Golf Mill collects, uses, and protects your personal information. Please read carefully before using our services.'
                  : 'These Terms of Use govern your access to and use of The Golf Mill website and services. By proceeding, you agree to these terms in full.'}
              </p>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-2">
              {sections.map((section, index) => {
                const isOpen = openSection === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden transition-all"
                    style={{
                      background: isOpen ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isOpen ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                      onClick={() => setOpenSection(isOpen ? null : index)}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-semibold tabular-nums"
                          style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif', minWidth: '22px' }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: isOpen ? '#EDEDED' : '#C8CEC9',
                            fontFamily: 'DM Sans, sans-serif',
                          }}
                        >
                          {section.title}
                        </span>
                      </div>
                      <i
                        className={`ri-${isOpen ? 'subtract' : 'add'}-line text-sm transition-all`}
                        style={{ color: '#BFA67A' }}
                      ></i>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <div
                          className="w-full h-px mb-4"
                          style={{ background: 'rgba(255,255,255,0.07)' }}
                        />
                        {section.body.split('\n\n').map((para, i) => (
                          <p
                            key={i}
                            className={`text-sm leading-relaxed ${i > 0 ? 'mt-3' : ''}`}
                            style={{
                              color: '#A8B0AD',
                              fontFamily: 'DM Sans, sans-serif',
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom note */}
            <div
              className="mt-10 rounded-xl p-5 flex items-start gap-3"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-information-line text-sm" style={{ color: '#BFA67A' }}></i>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}>
                If you have any questions about our {activeTab === 'privacy' ? 'privacy practices' : 'terms'}, please{' '}
                <Link
                  to="/contact"
                  className="transition-colors cursor-pointer"
                  style={{ color: '#BFA67A', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  get in touch with us
                </Link>
                . We&apos;re happy to clarify anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;
