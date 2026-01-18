import React, { useRef, useLayoutEffect, useState } from 'react';
import { SLIDES } from '@/constants';
import { Slide } from '@/components/react/Slide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Custom Cursor Logic
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Progress Bar Animation
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3
        }
      });

      // The Wandering Orb Animation (Le "Guide")
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5 // Smooth scrubbing
        }
      });

      // Define the journey of the orb
      tl.to(orbRef.current, { top: "15%", left: "80%", scale: 2, backgroundColor: "#320133", rotation: 90, duration: 1 })
        .to(orbRef.current, { top: "30%", left: "15%", scale: 1, backgroundColor: "#fcd74f", borderRadius: "0%", rotation: 180, duration: 1 })
        .to(orbRef.current, { top: "45%", left: "85%", scale: 1.5, backgroundColor: "#320133", borderRadius: "50%", rotation: 270, duration: 1 })
        .to(orbRef.current, { top: "60%", left: "50%", scale: 3, opacity: 0.05, duration: 0.5 })
        .to(orbRef.current, { top: "75%", left: "20%", scale: 1.2, opacity: 0.8, backgroundColor: "#fcd74f", duration: 1 })
        .to(orbRef.current, { top: "90%", left: "50%", scale: 0.5, backgroundColor: "#320133", duration: 0.5 });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative font-body text-brand-purple bg-brand-white selection:bg-brand-yellow selection:text-brand-purple cursor-none overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 border-2 border-brand-purple rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div className="w-2 h-2 bg-brand-purple rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* The Wandering Orb (Le Guide) */}
      <div
        ref={orbRef}
        className="fixed top-10 left-10 w-16 h-16 bg-brand-yellow rounded-full z-20 pointer-events-none mix-blend-multiply blur-md opacity-80"
      ></div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 z-50 bg-brand-purple/10">
        <div ref={progressBarRef} className="h-full w-full bg-brand-purple origin-left scale-x-0"></div>
      </div>

      {/* Navigation Dots (Right Side) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {SLIDES.map((slide) => (
          <a
            key={slide.id}
            href={`#${slide.id}`}
            className="w-3 h-3 rounded-full bg-brand-purple/20 hover:bg-brand-purple transition-colors duration-300"
            aria-label={`Go to slide ${slide.title}`}
          />
        ))}
      </div>

      {/* Slides Rendering */}
      <main>
        {SLIDES.map((slide, index) => (
          <Slide key={slide.id} data={slide} index={index} />
        ))}
      </main>

      {/* Footer / Credit */}
      <footer className="py-8 text-center text-brand-purple font-bold opacity-80 text-base">
        Made for Leny
      </footer>
    </div>
  );
};

export default App;