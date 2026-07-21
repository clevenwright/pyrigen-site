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
            What is Pyrigen?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/55">
            Pyrigen is a software studio founded in 2026 and based in Little Elm, Texas. We build AI-powered applications at the intersection of applied artificial intelligence and human potential.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
            We are not a consultancy and we are not an agency. We build and own our products. Each one starts from the same conviction: technology only matters when it changes how a real person performs, decides, or believes.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
            Pyrigen was founded by Cleven Wright, who spent 25 years in sales, enablement, and AI product leadership before starting the company, most recently responsible for AI business solutions at a national B2B organization, where he directed cross-functional teams to design and deploy enterprise AI platforms adopted across the organization. That same conviction drives SoulAnthem.
          </p>
        </Reveal>
      </section>

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
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              SoulAnthem is grounded in Albert Bandura&apos;s self-efficacy theory, first published in 1977, which established that belief in one&apos;s own capability is the strongest single predictor of whether a person will act. Most affirmation apps ask you to repeat statements you do not believe, which research shows can backfire for people with low self-esteem.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              SoulAnthem takes a different approach called believability laddering. It starts with a statement you already accept, then moves one honest step at a time toward the belief you want. An adaptive voice profile meets each person where they are and grows with them.
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
            <Image
              src="/provemastery_seal.png"
              alt="ProveMastery"
              width={512}
              height={512}
              className="mb-6 h-20 w-auto mx-auto sm:h-24"
            />
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">Venture 02</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">Prove<span className="text-[#059669]">Mastery</span></h3>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#059669]" />
            <p className="mt-6 text-xl leading-relaxed text-black/70">
              Turn learning into proof of skill.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              ProveMastery is an AI training platform built around a six-stage mastery loop that guides learners from first exposure to demonstrated competence. Its core is the Mastery Proof Report, a verifiable record that shows someone can actually do the thing, not just that they finished a course.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              Most learning tools own a single step. They deliver content, or they run a quiz. ProveMastery closes the entire loop across six stages: assess, generate, train, reinforce, reassess, and prove.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              It is engineered around Hermann Ebbinghaus&apos;s forgetting curve, documented in 1885, which showed that learners forget a majority of new information within days unless it is deliberately reinforced. ProveMastery uses active recall, spaced repetition, and the testing effect to resurface knowledge before it fades.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              Its signature difference is that the platform validates its own AI against human experts. Two independent methods compute every mastery score and must agree before a result stands. The output is the Mastery Proof Report, an auditable record that a person genuinely knows what they claim to know.
            </p>
            <a href="https://provemastery.ai" className="mt-8 inline-block text-[var(--accent)] hover:underline">
              Visit provemastery.ai
            </a>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-40 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            How does Pyrigen build products?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/55">
            Three principles govern every product we ship.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl font-semibold">We start with the science, not the software.</h3>
              <p className="mt-4 leading-relaxed text-black/55">
                SoulAnthem is built on self-efficacy research. ProveMastery is built on cognitive science. The technology serves the evidence, not the other way around.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl font-semibold">We prove our claims rather than assert them.</h3>
              <p className="mt-4 leading-relaxed text-black/55">
                ProveMastery does not just grade, it measures whether its own grading is right. That standard applies across the studio.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl font-semibold">We ship, then we listen.</h3>
              <p className="mt-4 leading-relaxed text-black/55">
                Pyrigen is bootstrapped and founder-led, which means we answer to users rather than to a funding timeline.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--bg-muted)] px-6 py-40">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-16 space-y-12 text-left">
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Who founded Pyrigen?</h3>
                <p className="mt-4 leading-relaxed text-black/55">
                  Pyrigen was founded in 2026 by Cleven Wright, who serves as Founder and CEO. Before Pyrigen, he spent 25 years in sales, enablement, and AI product leadership, most recently responsible for AI business solutions at a national B2B organization, where he directed cross-functional teams to design and deploy enterprise AI platforms adopted across the organization. That same conviction drives SoulAnthem.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Where is Pyrigen located?</h3>
                <p className="mt-4 leading-relaxed text-black/55">
                  Pyrigen Incorporated is a Texas corporation headquartered in Little Elm, Texas.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Is Pyrigen funded?</h3>
                <p className="mt-4 leading-relaxed text-black/55">
                  Pyrigen is bootstrapped and founder-led.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">What does the name Pyrigen mean?</h3>
                <p className="mt-4 leading-relaxed text-black/55">
                  Pyrigen combines pyr, the Greek root for fire, with gen, meaning to generate. The name describes the generative spark: the point where an idea catches and becomes something real.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">How can I contact Pyrigen?</h3>
                <p className="mt-4 leading-relaxed text-black/55">
                  Email hello@pyrigen.com.
                </p>
              </div>
            </Reveal>
          </div>
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
          <span className="mx-2">·</span>
          <a href="/terms" className="hover:text-black/70">Terms and Conditions</a>
        </p>
      </footer>
    </main>
  );
}