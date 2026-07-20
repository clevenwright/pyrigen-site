export const metadata = {
  title: "Privacy Policy — Pyrigen Incorporated",
  description:
    "How Pyrigen Incorporated handles information in connection with its corporate website and business operations.",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-black/40">Last Updated: July 19, 2026</p>

      <div className="mt-8 rounded-2xl bg-[var(--bg-muted)] p-6 text-black/70">
        <p>
          <span className="font-medium">Using SoulAnthem?</span> This Privacy Policy covers the corporate operations of Pyrigen Incorporated. It does not govern the SoulAnthem app. If you use SoulAnthem, its data practices are described in the SoulAnthem Privacy Policy at{" "}
          <a href="https://soulanthem.ai/privacy" className="text-[var(--accent)] hover:underline">soulanthem.ai/privacy</a>{" "}
          and the SoulAnthem Consumer Health Data Privacy Policy.
        </p>
        <p className="mt-4">
          <span className="font-medium">Conflict control.</span> For SoulAnthem data practices, SoulAnthem&apos;s product-specific privacy policies control over this Privacy Policy to the extent of any conflict.
        </p>
      </div>

      <p className="mt-8 text-lg leading-relaxed text-black/60">
        This Privacy Policy explains how Pyrigen Incorporated (&quot;Pyrigen,&quot; &quot;we,&quot; &quot;us&quot;), a Texas corporation, handles information in connection with our corporate website at pyrigen.com and our related business operations, such as responding to inquiries and running our appointment messaging program.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Information We Collect</h2>
      <p className="mt-4 text-black/60">Our website is informational. You do not need to create an account or submit a form to use it, we do not use analytics or advertising trackers, and we do not use cross-site tracking. We collect only the following:</p>
      <ul className="mt-4 space-y-3 text-black/60">
        <li><span className="font-medium text-black/80">Technical information.</span> When you visit the site, our hosting provider automatically processes standard technical data such as your IP address, browser type, and request logs, so the site can be served reliably and kept secure.</li>
        <li><span className="font-medium text-black/80">Information you send us.</span> If you email one of the addresses listed on this site, we receive your email address and whatever you choose to include in your message.</li>
        <li><span className="font-medium text-black/80">Appointment and messaging information.</span> If you schedule an appointment with us, including through our AI phone assistant, and choose to receive text messages, we collect your mobile number and your consent, as described under &quot;SMS and text messaging&quot; below.</li>
      </ul>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">How We Use Information</h2>
      <p className="mt-4 text-black/60">We use this information to operate and secure our website, respond to inquiries you send us, schedule appointments and send the confirmations and reminders you have asked for, and comply with our legal obligations. We do not sell your personal information, and we do not use it for third-party advertising or cross-app tracking.</p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">SMS and text messaging</h2>
      <p className="mt-4 text-black/60">
        When you schedule an appointment with Pyrigen, including through our AI phone assistant, and you provide your mobile number, we may send you SMS text messages for appointment confirmations and reminders. We collect your mobile number and your consent for this purpose only.
      </p>
      <p className="mt-4 text-black/60">
        We use Twilio as our SMS service provider to deliver these messages. No mobile information is shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt in data and consent are not shared with any third parties.
      </p>
      <p className="mt-4 text-black/60">
        Message frequency varies with your appointment activity. Message and data rates may apply. You can opt out at any time by replying STOP, and reply HELP for help. See our Terms and Conditions at{" "}
        <a href="https://www.pyrigen.com/terms" className="text-[var(--accent)] hover:underline">
          https://www.pyrigen.com/terms
        </a>
        .
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Service Providers</h2>
      <p className="mt-4 text-black/60">We keep our corporate operations lean and rely on a small number of service providers: a cloud hosting provider that serves and secures this website, and the SMS delivery provider named above for our appointment messages. These providers process information on our behalf only as needed to provide their services to us, support security and reliability, or comply with legal obligations. We may update our service providers from time to time as our operations evolve.</p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Data Retention and Your Choices</h2>
      <p className="mt-4 text-black/60">We keep information only as long as needed for the purposes described here or as required by law. You may ask us to access, correct, or delete information you have sent us by emailing the address below, and you can stop appointment texts at any time by replying STOP. We will respond consistent with applicable law.</p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Children&apos;s Privacy</h2>
      <p className="mt-4 text-black/60">Our website and corporate communications are directed to businesses and adults, not to children, and we do not knowingly collect personal information from children.</p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Changes to This Policy</h2>
      <p className="mt-4 text-black/60">We may update this policy from time to time. Material changes will be reflected by updating the date above.</p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-4 text-black/60">Pyrigen Incorporated, a Texas corporation, Little Elm, Texas. Questions or requests: <a href="mailto:hello@pyrigen.com" className="text-[var(--accent)] hover:underline">hello@pyrigen.com</a></p>

      <p className="mt-16"><a href="/" className="text-[var(--accent)] hover:underline">&larr; Back to Pyrigen</a></p>
    </main>
  );
}
