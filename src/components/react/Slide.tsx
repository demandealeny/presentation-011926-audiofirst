import React, { useRef, useLayoutEffect } from 'react';
import { type SlideContent, SlideType } from '@/types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SlideProps {
  data: SlideContent;
  index: number;
}

// Inline SVG Patterns (Hero Patterns)
const PATTERN_1 = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z' fill='%23320133' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E`;
const PATTERN_2 = `data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23320133' fill-opacity='0.05'/%3E%3C/svg%3E`;

export const Slide: React.FC<SlideProps> = ({ data, index }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLUListElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        }
      });

      if (contentRef.current) {
        tl.fromTo(contentRef.current,
          { y: 50, opacity: 0, scale: 0.8, rotation: -10 },
          { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" }
        );
      }

      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { y: 80, opacity: 0, skewY: 5 },
          { y: 0, opacity: 1, skewY: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (itemsRef.current && itemsRef.current.children) {
        tl.fromTo(itemsRef.current.children,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "back.out(1.2)" },
          "-=0.2"
        );
      }

      // Special animation for Cards
      if (data.type === SlideType.CARDS) {
        const cards = sectionRef.current?.querySelectorAll('.proof-card');
        if (cards && cards.length > 0) {
          tl.fromTo(cards,
            { y: 100, opacity: 0, rotationX: 20 },
            { y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
            "-=0.5"
          );
        }
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  const isPattern = index % 2 !== 0;
  const patternIndex = Math.floor((index - 1) / 2) % 2;
  const bgImage = isPattern ? (patternIndex === 0 ? PATTERN_1 : PATTERN_2) : 'none';

  // Helper for consistent high-contrast colors
  const purpleText = "text-brand-purple";

  const renderContent = () => {
    switch (data.type) {
      case SlideType.TITLE:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full px-6 relative z-10">
            <div className="mb-10 relative" ref={contentRef}>
              {data.image ? (
                <div className="relative inline-block">
                  <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-brand-yellow shadow-[0_0_0_8px_rgba(50,1,51,0.1)] relative z-10 bg-brand-yellow">
                    <img src={data.image.src} alt={data.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Decorative Emoji Badge */}
                  <div className="absolute -bottom-2 -right-2 md:bottom-0 md:right-0 bg-brand-white rounded-full p-2 md:p-4 border-4 border-brand-purple shadow-xl z-20 transform rotate-12">
                    <span className="text-4xl md:text-6xl">{data.emoji}</span>
                  </div>
                </div>
              ) : (
                <div className="text-8xl md:text-[10rem]">{data.emoji}</div>
              )}
            </div>

            <h1 ref={titleRef} className={`font-display font-bold text-6xl md:text-9xl mb-6 leading-none ${purpleText}`}>
              {data.title}
            </h1>
            <h2 ref={subtitleRef} className={`font-body font-semibold text-2xl md:text-5xl ${purpleText} max-w-4xl mx-auto tracking-wide`}>
              {data.subtitle}
            </h2>
            <div className="mt-12 inline-block bg-brand-yellow px-4 py-2 transform -rotate-2 shadow-lg">
              <p className={`font-mono tracking-widest uppercase text-lg md:text-2xl font-bold ${purpleText}`}>{data.content}</p>
            </div>
          </div>
        );

      case SlideType.LIST:
        return (
          <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-7xl mx-auto px-6 h-full relative z-10">
            <div className="md:w-5/12 mb-12 md:mb-0">
              <div className="text-7xl md:text-9xl mb-8 inline-block" ref={contentRef}>{data.emoji}</div>
              <h2 ref={titleRef} className={`font-display font-bold text-5xl md:text-8xl leading-tight mb-6 ${purpleText}`}>
                {data.title}
              </h2>
              {data.subtitle && <p ref={subtitleRef} className={`text-xl md:text-4xl font-semibold opacity-90 ${purpleText}`}>{data.subtitle}</p>}
            </div>
            <div className="">
              <ul ref={itemsRef} className="space-y-6 md:space-y-8">
                {Array.isArray(data.content) && data.content.map((item, idx) => (
                  <li key={idx} className={`flex items-start text-2xl md:text-5xl font-body font-medium leading-tight ${purpleText}`}>
                    {item.toLocaleLowerCase().includes("aujourd'hui") || item.includes("Audio...") ? (
                      <span className={`bg-brand-yellow px-4 py-2 md:px-6 md:py-3 font-bold rounded-lg transform -rotate-1 inline-block shadow-lg ${purpleText}`}>
                        {item}
                      </span>
                    ) : (
                      <div className="flex items-start">
                        <span className="mr-3 md:mr-4 text-brand-yellow transform scale-150 relative top-1">●</span>
                        <span>{item}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case SlideType.CARDS:
        return (
          <div className="flex flex-col items-center justify-start md:justify-center w-full min-h-full px-6 relative z-10 max-w-7xl mx-auto pt-10 pb-20 md:py-0">
            <h2 ref={titleRef} className={`font-display font-bold text-4xl md:text-8xl mb-4 text-center ${purpleText} mt-8 md:mt-0 leading-tight`}>
              {data.title}
            </h2>
            <p ref={subtitleRef} className={`text-lg md:text-3xl font-semibold mb-8 md:mb-12 opacity-80 text-center max-w-3xl ${purpleText}`}>
              {data.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
              {data.extraData?.items?.map((item, idx) => (
                <div key={idx} className="proof-card bg-white border-4 border-brand-purple p-6 md:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(50,1,51,1)] md:shadow-[8px_8px_0px_0px_rgba(50,1,51,1)] hover:shadow-[12px_12px_0px_0px_rgba(252,215,79,1)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full object-cover border-4 border-brand-yellow shadow-sm" />
                  ) : (
                    <div className="text-5xl md:text-6xl mb-4 md:mb-6">{item.icon}</div>
                  )}
                  <h3 className="font-display font-bold text-4xl md:text-6xl text-brand-purple mb-3 md:mb-4">{item.title}</h3>
                  <p className="font-body text-lg md:text-2xl text-brand-purple font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case SlideType.CENTER_EMOJI:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full px-6 max-w-5xl mx-auto relative z-10">
            <h2 ref={titleRef} className={`font-body font-bold text-2xl md:text-4xl uppercase tracking-widest mb-10 opacity-80 ${purpleText}`}>
              {data.title}
            </h2>
            <div className="flex flex-col items-center">
              <span ref={contentRef} className="text-8xl md:text-[16rem] my-8 md:my-10 block filter drop-shadow-xl">
                {data.emoji}
              </span>
              <h3 ref={subtitleRef} className={`font-display font-bold text-5xl md:text-9xl ${purpleText}`}>
                {data.content}
              </h3>
              <p className={`mt-8 text-2xl md:text-5xl font-body font-semibold ${purpleText} opacity-90`}>{data.subtitle}</p>
            </div>
          </div>
        );

      case SlideType.PROCESS:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full max-w-4xl mx-auto px-6 relative z-10">
            <div ref={contentRef} className="text-6xl md:text-8xl mb-8 bg-brand-white p-6 md:p-8 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border-4 md:border-8 border-brand-yellow shadow-xl">
              {data.emoji}
            </div>
            <h2 ref={titleRef} className={`font-display font-bold text-6xl md:text-9xl mb-4 ${purpleText}`}>
              {data.title}
            </h2>
            <h3 ref={subtitleRef} className={`font-display text-4xl md:text-6xl mb-8 opacity-90 ${purpleText}`}>{data.subtitle}</h3>
            <div className={`text-3xl md:text-5xl font-body font-medium leading-snug ${purpleText}`}>
              {data.content}
            </div>
          </div>
        );

      case SlideType.BIG_STATEMENT:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full px-6 relative z-10">
            <h2 ref={titleRef} className={`font-display font-bold text-5xl md:text-[8rem] leading-none mb-12 ${purpleText}`}>
              {data.title}
            </h2>
            <div ref={contentRef} className={`font-body font-medium text-3xl md:text-7xl p-8 md:p-14 border-4 md:border-8 border-brand-yellow rounded-2xl md:rounded-[3rem] bg-brand-white shadow-2xl ${purpleText}`}>
              {data.content}
            </div>
          </div>
        );

      case SlideType.IMAGE_CTA:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full px-4 relative z-10 w-full max-w-7xl mx-auto py-12 md:py-20">
            <h2 ref={titleRef} className={`font-display font-bold text-3xl md:text-6xl mb-8 ${purpleText}`}>
              {data.title}
            </h2>
            {/* Image Container with enforced Aspect Ratio */}
            <div ref={contentRef} className="relative w-full max-w-3xl mb-8 md:mb-12 rounded-xl md:rounded-3xl border-4 md:border-8 border-brand-yellow shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 bg-brand-yellow aspect-[1022/576]">
              <img
                src={data.emoji}
                alt={data.title}
                className="w-full h-full rounded-xl md:rounded-3xl object-cover"
                loading="lazy"
              />
            </div>

            <p className={`text-xl md:text-4xl font-body font-medium mb-8 md:mb-16 max-w-5xl leading-tight ${purpleText}`}>
              {data.content}
            </p>

            {/* CTA Button Responsive */}
            <a
              href={data.extraData?.items?.[0]?.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 md:px-16 md:py-8 bg-brand-purple text-brand-white font-display font-bold text-xl md:text-4xl lg:text-5xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-transparent hover:border-brand-yellow text-center max-w-full"
            >
              <span className="relative z-10">{data.extraData?.label}</span>
            </a>
          </div>
        );

      case SlideType.CONTACT:
        return (
          <div className="flex flex-col items-center justify-center h-full relative z-10 px-4">
            <h2 ref={titleRef} className={`font-display font-bold text-6xl md:text-9xl mb-12 ${purpleText}`}>
              {data.title}
            </h2>
            <div ref={contentRef} className={`bg-brand-purple text-brand-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-105 cursor-pointer border-4 border-brand-yellow max-w-[95vw]`}>
              <p className="text-2xl md:text-6xl font-mono font-bold break-words text-center">{data.content}</p>
            </div>
            <div className="mt-16 text-8xl md:text-9xl animate-bounce">{data.emoji}</div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 relative z-10">
            <h2 ref={titleRef} className={`text-5xl md:text-6xl font-bold mb-6 ${purpleText}`}>{data.title}</h2>
            <div ref={contentRef} className={`text-2xl md:text-3xl ${purpleText}`}>{Array.isArray(data.content) ? data.content.join(', ') : data.content}</div>
          </div>
        );
    }
  };

  return (
    <section
      id={data.id}
      ref={sectionRef}
      className="min-h-screen w-full relative overflow-hidden py-20 bg-brand-white"
    >
      {/* Background Pattern */}
      {isPattern && (
        <div
          className="absolute inset-0 pointer-events-none opacity-40 z-0"
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundSize: patternIndex === 0 ? '40px 40px' : '20px 20px'
          }}
        />
      )}

      {/* Decorative Process Line */}
      {data.type === SlideType.PROCESS && (
        <div className="absolute top-0 left-1/2 w-2 h-full bg-brand-yellow/30 -translate-x-1/2 z-0"></div>
      )}

      {renderContent()}
    </section>
  );
};