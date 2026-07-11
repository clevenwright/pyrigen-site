import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-3xl px-6 py-40 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            We build science-backed AI solutions that accelerate human growth.
          </h2>
        </Reveal>
      </section>

      <section id="soulanthem" className="scroll-mt-24 px-6 py-40 text-center">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Image
              src="/soulanthem_sprout.png"
              alt="SoulAnthem"
              width={512}
              height={512}
              className="mb-6 h-20 w-auto mx-auto sm:h-24"
            />
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">Venture 01</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">Soul<span className="text-[#c2703d]">Anthem</span></h3>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#c2703d]" />
            <p className="mt-6 text-xl leading-relaxed text-black/70">
              A voice-driven companion for building real self-belief.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              SoulAnthem uses believability-laddering and Bandura&apos;s self-efficacy framework to move people from doubt to genuine confidence, not with empty affirmations but with honest, achievable steps that compound over time. An adaptive voice profile meets each person where they are and grows with them.
            </p>
            <a href="https://soulanthem.ai" className="mt-8 inline-block text-[var(--accent)] hover:underline">
              Visit soulanthem.ai
            </a>
          </Reveal>
        </div>
      </section>

      <section id="provemastery" className="scroll-mt-24 bg-[var(--bg-muted)] px-6 py-40 text-center">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">Venture 02</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">Prove<span className="text-[#059669]">Mastery</span></h3>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#059669]" />
            <p className="mt-6 text-xl leading-relaxed text-black/70">
              Turn learning into proof of skill.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              ProveMastery is an AI training platform built around a six-stage mastery loop that guides learners from first exposure to demonstrated competence. Its core is the Mastery Proof Report, a verifiable record that shows someone can actually do the thing, not just that they finished a course.
            </p>
            <a href="https://provemastery.ai" className="mt-8 inline-block text-[var(--accent)] hover:underline">
              Visit provemastery.ai
            </a>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-6 py-40 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight">
            Get in touch
          </h2>
          <p className="mt-6 text-lg text-black/55">
            <a href="mailto:hello@pyrigen.com" className="text-[var(--accent)] hover:underline">
              hello@pyrigen.com
            </a>
          </p>
        </Reveal>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-black/40">
        <div className="border-t border-black/10 pt-8">
          <p className="font-medium text-black/55">Pyrigen Incorporated</p>
          <p>Little Elm, Texas, USA</p>
          <p>
            <a href="mailto:admin@pyrigen.com" className="hover:text-black/70">
              admin@pyrigen.com
            </a>
          </p>
          <p className="mt-2">© 2026 Pyrigen Incorporated. All rights reserved.</p>
        </div>
        <p className="mt-4">
          <a href="/privacy" className="hover:text-black/70">Privacy Policy</a>
        </p>
      </footer>
    </main>
  );
}