import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { VoiceReasonMark } from "@/components/VoiceReasonMark";
import { NameCalled360Mark } from "@/components/NameCalled360Mark";

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
            Pyrigen builds agentic AI products that help people perform when it counts: the sales call, the job interview, the moment a customer goes looking for a business, the belief that comes before every big step.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
            Every product starts from established research on how people learn, decide and grow, and every one is judged by what actually changes for the person using it.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
            Pyrigen also designs and builds custom agentic AI solutions for companies that want the same results inside their own teams.
          </p>
        </Reveal>
      </section>

      <section id="voicereason" className="scroll-mt-24 px-6 py-40 text-center">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <VoiceReasonMark className="mb-6 h-20 w-auto mx-auto sm:h-24" />
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">Venture 01</p>
            <p className="mt-4 inline-block rounded-full bg-[#e7f6ee] px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-[#0b7a4f]">Live today</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">Voice<span className="text-[#6a3cff]">Reason</span>.AI</h3>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#6a3cff]" />
            <p className="mt-6 text-xl leading-relaxed text-black/70">
              Practice the conversation that decides what happens next.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              VoiceReason.AI is spoken practice with incredibly lifelike AI that sounds human. You talk it through out loud with someone who pushes back like the real thing, a live coach guides you during the call, and afterward you get a scorecard and expert feedback on where you held and where you folded.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl gap-6 text-left sm:grid-cols-2">
              <div className="h-full rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
                <h4 className="text-xl font-semibold">Sales Coach</h4>
                <p className="mt-4 leading-relaxed text-black/55">
                  A salesperson builds the buyer they are dreading and practices the call in their own sales methodology, with a coach on the line to guide them.
                </p>
              </div>
              <div className="h-full rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
                <h4 className="text-xl font-semibold">Interview Coach</h4>
                <p className="mt-4 leading-relaxed text-black/55">
                  A job seeker shares their resume and the job they want, then practices with an interviewer who asks real behavioral questions and follows up on every answer.
                </p>
              </div>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              Every high-stakes profession rehearses before it performs. Pilots train in simulators, surgeons practice on models, athletes scrimmage. Sales calls and job interviews are where most people still go in cold, so the first time they say a hard thing out loud is to someone who decides.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              It rests on two established bodies of research: deliberate practice, which holds that skill comes from focused repetition with honest feedback rather than talent or tenure, and pressure training, which holds that composure under pressure is built by rehearsing under pressure.
            </p>
            <a href="https://voicereason.ai" className="mt-8 inline-block text-[var(--accent)] hover:underline">
              Visit voicereason.ai
            </a>
          </Reveal>
        </div>
      </section>

      <section id="namecalled360" className="scroll-mt-24 bg-[var(--bg-muted)] px-6 py-40 text-center">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <NameCalled360Mark className="mb-6 h-20 w-auto mx-auto sm:h-24" />
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">Venture 02</p>
            <p className="mt-4 inline-block rounded-full bg-[#e7f6ee] px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-[#0b7a4f]">Live today</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">NameCalled<span className="text-[#0b7a6f]">360</span></h3>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#0f8b7e]" />
            <p className="mt-6 text-xl leading-relaxed text-black/70">
              We get your business found. You get back to running it.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              NameCalled360 checks where a business shows up on Google Maps, review and listing sites, and in AI answers from ChatGPT, Gemini, Claude and Google, then puts it all in one Found score with a history that says in plain words what moved it.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              More buyers now ask an AI assistant before they search. NameCalled360 brings SEO and AI answer optimization (AEO) together in one plan, where every move has a named owner, a next step and a link to the finished work.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              It is done for you. Pyrigen&apos;s team checks each business every week and does the work to close the gaps, and nothing goes out in an owner&apos;s name until they approve it.
            </p>
            <a href="https://namecalled360.com" className="mt-8 inline-block text-[var(--accent)] hover:underline">
              Visit namecalled360.com
            </a>
          </Reveal>
        </div>
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
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">Venture 03</p>
            <p className="mt-4 inline-block rounded-full bg-[#e7f6ee] px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-[#0b7a4f]">Live today</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">Soul<span className="text-[#c2703d]">Anthem</span></h3>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#c2703d]" />
            <p className="mt-6 text-xl leading-relaxed text-black/70">
              A voice-driven companion for building real self-belief.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
              SoulAnthem uses believability-laddering and Bandura&apos;s self-efficacy framework to move people from doubt to genuine confidence, not with empty affirmations but with honest, achievable steps that compound over time.
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

      <section id="coming-soon" className="scroll-mt-24 bg-[var(--bg-muted)] px-6 py-40 text-center">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
              Coming soon
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
                <Image src="/provemastery_seal.png" alt="ProveMastery" width={512} height={512} className="h-12 w-auto self-start" />
                <p className="mt-6 self-start rounded-full bg-black/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-black/50">Coming soon</p>
                <h3 className="mt-4 text-xl font-semibold">ProveMastery</h3>
                <p className="mt-2 font-semibold text-black/70">Turn learning into proof of skill.</p>
                <p className="mt-4 flex-1 leading-relaxed text-black/55">An AI training platform that takes learners from first exposure to proven skill, and ends with a verifiable Mastery Proof Report that shows someone can actually do the thing.</p>
                <a href="https://provemastery.ai" className="mt-6 inline-block text-[var(--accent)] hover:underline">Preview provemastery.ai</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
                <Image src="/logos/trendcast360.svg" alt="TrendCast360" width={512} height={512} unoptimized className="h-12 w-auto self-start" />
                <p className="mt-6 self-start rounded-full bg-black/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-black/50">Coming soon</p>
                <h3 className="mt-4 text-xl font-semibold">TrendCast360</h3>
                <p className="mt-2 font-semibold text-black/70">On-brand content, planned and made for you.</p>
                <p className="mt-4 flex-1 leading-relaxed text-black/55">TrendCast360 plans, writes and makes posts and short videos in your brand voice, backed by real research on who each piece is for. It checks every piece against your brand, and nothing posts until you approve it.</p>
                <a href="https://trendcast360.com" className="mt-6 inline-block text-[var(--accent)] hover:underline">Visit trendcast360.com</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
                <Image src="/logos/revthunder.svg" alt="RevThunder" width={64} height={64} unoptimized className="h-12 w-auto self-start" />
                <p className="mt-6 self-start rounded-full bg-black/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-black/50">Coming soon</p>
                <h3 className="mt-4 text-xl font-semibold">RevThunder</h3>
                <p className="mt-2 font-semibold text-black/70">Find the right people. Say the right thing. Get paid for it.</p>
                <p className="mt-4 flex-1 leading-relaxed text-black/55">RevThunder is the revenue platform for sales partners, affiliates and agencies. It finds companies that fit, tells you who to reach today and what to say, and tracks every deal and commission.</p>
                <a href="https://revthunder.com" className="mt-6 inline-block text-[var(--accent)] hover:underline">Visit revthunder.com</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
                <Image src="/logos/shoulderowl.svg" alt="ShoulderOwl" width={64} height={50} unoptimized className="h-12 w-auto self-start" />
                <p className="mt-6 self-start rounded-full bg-black/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-black/50">Coming soon</p>
                <h3 className="mt-4 text-xl font-semibold">ShoulderOwl</h3>
                <p className="mt-2 font-semibold text-black/70">The AI that rides on your shoulder.</p>
                <p className="mt-4 flex-1 leading-relaxed text-black/55">ShoulderOwl listens to your calls and meetings and coaches you in real time on your screen. When you need backup, its AI speaks up with the facts you gave it.</p>
                <a href="https://shoulderowl.com" className="mt-6 inline-block text-[var(--accent)] hover:underline">Visit shoulderowl.com</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-40 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            What Pyrigen stands for
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/55">
            Three principles behind every product.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl font-semibold">Grounded in research.</h3>
              <p className="mt-4 leading-relaxed text-black/55">
                Each product begins with established research on how people learn, perform and change. The technology serves the evidence, not the other way around.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl font-semibold">Proven, not promised.</h3>
              <p className="mt-4 leading-relaxed text-black/55">
                We measure whether our products actually change outcomes for the people using them, and we hold our own AI to that same standard.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-8 text-left shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl font-semibold">Built for the moments that matter.</h3>
              <p className="mt-4 leading-relaxed text-black/55">
                Our products are made for the moments that decide outcomes, and they keep getting better as people use them.
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
                <h3 className="text-xl font-semibold">What does Pyrigen do?</h3>
                <p className="mt-4 leading-relaxed text-black/55">
                  Pyrigen builds agentic AI products that help people perform when it counts, and designs custom agentic AI solutions for companies.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Does Pyrigen build custom AI for companies?</h3>
                <p className="mt-4 leading-relaxed text-black/55">
                  Yes. Pyrigen designs and builds custom agentic AI solutions for teams that want results like our products deliver, inside their own business. Email hello@pyrigen.com to start a conversation.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Where is Pyrigen located?</h3>
                <p className="mt-4 leading-relaxed text-black/55">
                  Pyrigen Incorporated is a Texas corporation headquartered in Dallas, Texas.
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
          <p>Dallas, Texas, USA</p>
          <p>
            <a href="mailto:hello@pyrigen.com" className="hover:text-black/70">
              hello@pyrigen.com
            </a>
          </p>
          <p className="mt-2">Founder &amp; CEO:{" "}<a href="https://clevenwright.com" className="hover:text-black/70">Cleven Wright</a></p>
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
