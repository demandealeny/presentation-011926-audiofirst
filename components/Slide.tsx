import React, { useRef, useLayoutEffect } from 'react';
import { SlideContent, SlideType } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SlideProps {
  data: SlideContent;
  index: number;
}

// Inline SVG Patterns (Hero Patterns)
const PATTERN_1 = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z' fill='%23320133' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E`; 
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
            <div className="text-8xl md:text-[10rem] mb-10" ref={contentRef}>{data.emoji}</div>
            <h1 ref={titleRef} className={`font-display font-bold text-7xl md:text-9xl mb-6 leading-none ${purpleText}`}>
              {data.title}
            </h1>
            <h2 ref={subtitleRef} className={`font-body font-semibold text-3xl md:text-5xl ${purpleText} max-w-4xl mx-auto tracking-wide`}>
              {data.subtitle}
            </h2>
            <div className="mt-12 inline-block bg-brand-yellow px-4 py-2 transform -rotate-2">
                <p className={`font-mono tracking-widest uppercase text-xl md:text-2xl font-bold ${purpleText}`}>{data.content}</p>
            </div>
          </div>
        );

      case SlideType.LIST:
        return (
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 h-full relative z-10">
             <div className="md:w-5/12 mb-12 md:mb-0">
                <div className="text-7xl md:text-9xl mb-8 inline-block" ref={contentRef}>{data.emoji}</div>
                <h2 ref={titleRef} className={`font-display font-bold text-6xl md:text-8xl leading-tight mb-6 ${purpleText}`}>
                  {data.title}
                </h2>
                {data.subtitle && <p ref={subtitleRef} className={`text-2xl md:text-4xl font-semibold opacity-90 ${purpleText}`}>{data.subtitle}</p>}
             </div>
             <div className="md:w-6/12">
                <ul ref={itemsRef} className="space-y-8">
                  {Array.isArray(data.content) && data.content.map((item, idx) => (
                    <li key={idx} className={`flex items-start text-3xl md:text-5xl font-body font-medium leading-tight ${purpleText}`}>
                      {item.includes("AUJOURD'HUI") || item.includes("Audio...") ? (
                         <span className={`bg-brand-yellow px-6 py-3 font-bold rounded-lg transform -rotate-1 inline-block shadow-lg ${purpleText}`}>
                           {item}
                         </span>
                      ) : (
                        <div className="flex items-start">
                            <span className="mr-4 text-brand-yellow transform scale-150 relative top-1">●</span>
                            <span>{item}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        );

      case SlideType.CENTER_EMOJI:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full px-6 max-w-5xl mx-auto relative z-10">
             <h2 ref={titleRef} className={`font-body font-bold text-3xl md:text-4xl uppercase tracking-widest mb-10 opacity-80 ${purpleText}`}>
                {data.title}
             </h2>
             <div className="flex flex-col items-center">
                <span ref={contentRef} className="text-9xl md:text-[16rem] my-10 block filter drop-shadow-xl">
                  {data.emoji}
                </span>
                <h3 ref={subtitleRef} className={`font-display font-bold text-6xl md:text-9xl ${purpleText}`}>
                  {data.content}
                </h3>
                <p className={`mt-8 text-3xl md:text-5xl font-body font-semibold ${purpleText} opacity-90`}>{data.subtitle}</p>
             </div>
          </div>
        );

      case SlideType.PROCESS:
        return (
            <div className="flex flex-col items-center justify-center text-center h-full max-w-4xl mx-auto px-6 relative z-10">
                <div ref={contentRef} className="text-7xl md:text-8xl mb-8 bg-brand-white p-8 rounded-full w-40 h-40 flex items-center justify-center border-8 border-brand-yellow shadow-xl">
                    {data.emoji}
                </div>
                <h2 ref={titleRef} className={`font-display font-bold text-7xl md:text-9xl mb-4 ${purpleText}`}>
                    {data.title}
                </h2>
                <h3 ref={subtitleRef} className={`font-display text-5xl md:text-6xl mb-8 opacity-90 ${purpleText}`}>{data.subtitle}</h3>
                <div className={`text-4xl md:text-5xl font-body font-medium leading-snug ${purpleText}`}>
                    {data.content}
                </div>
            </div>
        );

      case SlideType.BIG_STATEMENT:
        return (
            <div className="flex flex-col items-center justify-center text-center h-full px-6 relative z-10">
                <h2 ref={titleRef} className={`font-display font-bold text-6xl md:text-[8rem] leading-none mb-12 ${purpleText}`}>
                    {data.title}
                </h2>
                <div ref={contentRef} className={`font-body font-medium text-4xl md:text-7xl p-10 md:p-14 border-8 border-brand-yellow rounded-[3rem] bg-brand-white shadow-2xl ${purpleText}`}>
                    {data.content}
                </div>
            </div>
        );

      case SlideType.CONTACT:
          return (
            <div className="flex flex-col items-center justify-center h-full relative z-10">
                <h2 ref={titleRef} className={`font-display font-bold text-7xl md:text-9xl mb-12 ${purpleText}`}>
                    {data.title}
                </h2>
                <div ref={contentRef} className={`bg-brand-purple text-brand-white p-12 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-105 cursor-pointer border-4 border-brand-yellow`}>
                    <p className="text-4xl md:text-6xl font-mono font-bold">{data.content}</p>
                </div>
                <div className="mt-16 text-9xl animate-bounce">{data.emoji}</div>
            </div>
          );

      default:
        return (
            <div className="flex flex-col items-center justify-center h-full px-6 relative z-10">
                <h2 ref={titleRef} className={`text-6xl font-bold mb-6 ${purpleText}`}>{data.title}</h2>
                <div ref={contentRef} className={`text-3xl ${purpleText}`}>{Array.isArray(data.content) ? data.content.join(', ') : data.content}</div>
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