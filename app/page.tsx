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
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">Venture 01</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">SoulAnthem</h3>
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
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">ProveMastery</h3>
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
        <p>Pyrigen Incorporated, a Texas corporation</p>
        <p className="mt-2">
          <a href="/privacy" className="hover:text-black/70">Privacy Policy</a>
        </p>
      </footer>
    </main>
  );
}