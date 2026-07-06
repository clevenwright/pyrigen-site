"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useGSAP(
    () => {
      if (!videoReady) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".hero-video", { opacity: 1, duration: 2.4, ease: "power2.out" });

        const split = new SplitText(".hero-title", { type: "words" });
        gsap.from(split.words, {
          yPercent: 120,
          opacity: 0,
          stagger: 0.15,
          duration: 1.8,
          ease: "power3.out",
          delay: 1.2,
        });

        gsap.to(".hero-sub", { opacity: 1, duration: 1.6, delay: 2.6, ease: "power2.out" });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-video", ".hero-title", ".hero-sub"], { opacity: 1 });
      });
    },
    { scope: container, dependencies: [videoReady] }
  );

  return (
    <section
      id="top"
      ref={container}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover opacity-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/poster.jpg"
        onPlaying={() => setVideoReady(true)}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="hero-title text-[clamp(2.5rem,9vw,8rem)] font-semibold leading-[1.1] tracking-tight pb-[0.15em]">
          Pyrigen
        </h1>
        <p className="hero-sub mt-6 max-w-xl text-lg text-white/80 opacity-0">
          A studio building evidence-based software ventures.
        </p>
      </div>
    </section>
  );
}