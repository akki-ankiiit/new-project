import { useState } from 'react';
import { faqs } from '../../../mocks/faq';

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="section-padding" style={{ background: '#0B0F0E' }}>
      <div className="container-wide">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: '#BFA67A', fontFamily: 'DM Sans, sans-serif' }}>
            Questions &amp; Answers
          </span>
          <h2
            className="heading-playfair"
            style={{ fontSize: 'clamp(26px, 3vw, 32px)', color: '#EDEDED' }}
          >
            Everything you need to know
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Accordion */}
          <div className="flex flex-col gap-2">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: isOpen ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                    border: isOpen ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.07)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between px-4 py-3.5 text-left cursor-pointer"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span
                      className="text-sm font-medium pr-4"
                      style={{ color: isOpen ? '#EDEDED' : '#A8B0AD', fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s' }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        background: isOpen ? 'rgba(15,61,46,0.4)' : 'rgba(255,255,255,0.07)',
                        border: `1px solid ${isOpen ? 'rgba(15,61,46,0.5)' : 'rgba(255,255,255,0.1)'}`,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <i
                        className="ri-add-line text-xs"
                        style={{
                          color: isOpen ? '#BFA67A' : '#A8B0AD',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                          transition: 'transform 0.25s ease, color 0.2s ease',
                          display: 'block',
                        }}
                      ></i>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4">
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: '#A8B0AD', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <div className="rounded-2xl overflow-hidden sticky top-24" style={{ height: '380px' }}>
            <img
              src="https://readdy.ai/api/search-image?query=elegant%20premium%20golf%20club%20iron%20head%20close%20up%20dark%20studio%20black%20deep%20background%20subtle%20gold%20rim%20lighting%20minimalist%20luxury%20sports%20equipment%20composition%20high%20end%20photography%20golf%20training%20concept&width=600&height=760&seq=3&orientation=portrait"
              alt="Premium golf equipment"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(11,15,14,0.5) 0%, transparent 60%)' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
