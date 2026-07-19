export const metadata = {
  title: "Terms and Conditions | Pyrigen",
  description: "Terms and conditions for the Pyrigen SMS appointment messaging program.",
};

export default function Terms() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-semibold tracking-tight">Terms and Conditions</h1>
        <p className="mt-3 text-sm text-black/40">Effective date: July 19, 2026</p>

        <p className="mt-8 text-lg leading-relaxed text-black/60">
          These Terms and Conditions, referred to as the Terms, govern your use of the SMS messaging service
          provided by Pyrigen Incorporated, a Texas corporation, referred to as Pyrigen, we, or us. By
          providing your mobile number and agreeing to receive text messages, you accept these Terms.
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">1. Program description</h2>
        <p className="mt-4 text-black/60">
          Pyrigen operates an appointment messaging program, referred to as the Program. When you schedule an
          appointment with us, including through our AI phone assistant, and you provide your mobile number and
          consent, we send you SMS text messages containing appointment confirmations and reminders. This is a
          transactional messaging program, and we do not send marketing or promotional texts through it.
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">2. Consent</h2>
        <p className="mt-4 text-black/60">
          You provide consent to receive texts verbally during a phone call with our assistant, or by otherwise
          providing your mobile number for this purpose. Consent to receive automated text messages is not a
          condition of purchasing any goods or services. Message frequency varies based on your appointment
          activity, for example a confirmation at booking and a reminder before the appointment.
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">3. Cost</h2>
        <p className="mt-4 text-black/60">
          Message and data rates may apply. Pyrigen does not charge for the messages themselves, but your mobile
          carrier&apos;s standard rates apply based on your plan.
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">4. Opt out</h2>
        <p className="mt-4 text-black/60">
          You can cancel the Program at any time by texting STOP to the number that messaged you. After you send
          STOP, we will send one confirmation message and then stop sending texts. You may also opt out by telling
          us during a call.
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">5. Help</h2>
        <p className="mt-4 text-black/60">
          For help, text HELP to the number that messaged you, or contact us at{" "}
          <a href="mailto:support@pyrigen.com" className="text-[var(--accent)] hover:underline">
            support@pyrigen.com
          </a>
          .
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">6. Supported carriers</h2>
        <p className="mt-4 text-black/60">
          Carriers are not liable for delayed or undelivered messages.
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">7. Privacy</h2>
        <p className="mt-4 text-black/60">
          Your information is handled according to our Privacy Policy at{" "}
          <a href="https://www.pyrigen.com/privacy" className="text-[var(--accent)] hover:underline">
            https://www.pyrigen.com/privacy
          </a>
          . We do not sell or share mobile information with third parties or affiliates for their marketing or
          promotional purposes.
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">8. Changes</h2>
        <p className="mt-4 text-black/60">
          We may update these Terms. Material changes will be reflected by updating the effective date above.
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight">9. Contact</h2>
        <p className="mt-4 text-black/60">
          Pyrigen Incorporated, a Texas corporation, Little Elm, Texas.
          <br />
          Questions:{" "}
          <a href="mailto:support@pyrigen.com" className="text-[var(--accent)] hover:underline">
            support@pyrigen.com
          </a>
        </p>

        <p className="mt-16">
          <a href="/" className="text-[var(--accent)] hover:underline">
            &larr; Back to Pyrigen
          </a>
        </p>
      </main>

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
          <a href="/privacy" className="hover:text-black/70">
            Privacy Policy
          </a>
          <span className="mx-2">·</span>
          <a href="/terms" className="hover:text-black/70">
            Terms and Conditions
          </a>
        </p>
      </footer>
    </>
  );
}
