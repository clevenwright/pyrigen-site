"use client";
import { useEffect, useState } from "react";
import { PyrigenMark } from "./PyrigenLogo";

const links = [
  { id: "soulanthem", label: "SoulAnthem" },
  { id: "provemastery", label: "ProveMastery" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-colors duration-500 ${scrolled ? "border-b border-black/5 bg-white/70 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className={`flex items-center gap-2.5 text-lg font-semibold tracking-tight transition-colors ${scrolled ? "text-[var(--foreground)]" : "text-white"}`}>
          <PyrigenMark className="h-7 w-auto" />
          <span>Pyrigen</span>
        </a>
        <ul className="flex items-center gap-4 text-sm sm:gap-8">
          {links.map((l) => {
            const isActive = active === l.id;
            const base = scrolled ? "text-black/55 hover:text-black" : "text-white/70 hover:text-white";
            return (
              <li key={l.id}>
                <a href={`#${l.id}`} className={`transition-colors ${isActive ? "text-[var(--accent)]" : base}`}>{l.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}