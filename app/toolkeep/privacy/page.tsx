import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ToolKeep Privacy Policy — no data collection, no tracking, no accounts. Everything stays on your iPhone.",
};

const h1 =
  "text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-2 mt-8";
const effective = "text-white/40 text-[15px] mb-8 mt-0";
const h2 =
  "text-[22px] font-bold tracking-[-0.01em] mt-10 mb-3";
const p = "text-white/60 mb-4";
const ul = "text-white/60 pl-6 mb-4 list-disc";
const li = "mb-1.5";
const aCls =
  "text-[#F59E0B] border-b border-[#F59E0B]/30 transition-colors hover:border-[#F59E0B]";

export default function PrivacyPage() {
  return (
    <article>
      <h1 className={h1}>Privacy Policy</h1>
      <p className={effective}>Effective date: April 2026</p>

      <p className={p}>
        ToolKeep is designed to work entirely on your device. Here&apos;s what
        that means in practice.
      </p>

      <h2 className={h2}>What we collect</h2>
      <p className={p}>
        Nothing. There is no account, no sign-in, no server, no analytics, and
        no third-party tracking.
      </p>

      <h2 className={h2}>What&apos;s stored on your device</h2>
      <ul className={ul}>
        <li className={li}>The tools you add and their details</li>
        <li className={li}>
          Photos of receipts and warranty cards (saved in the app&apos;s
          sandboxed storage)
        </li>
        <li className={li}>Your notification preferences</li>
        <li className={li}>Your name and email, if you entered them in Settings</li>
      </ul>
      <p className={p}>
        All of this is stored locally on your iPhone. None of it is transmitted
        off your device by ToolKeep.
      </p>

      <h2 className={h2}>Notifications</h2>
      <p className={p}>
        Warranty expiry reminders are scheduled through Apple&apos;s local
        notification system. They fire from your device. They do not go through
        any server.
      </p>

      <h2 className={h2}>Camera and photos</h2>
      <p className={p}>
        When you scan a serial number or take a photo of a receipt, the image
        is processed entirely on your device. Apple may use on-device machine
        learning for barcode recognition; this is controlled by iOS and is
        subject to Apple&apos;s privacy policy.
      </p>

      <h2 className={h2}>Location</h2>
      <p className={p}>
        If you grant location permission, ToolKeep uses your device location to
        sort service centres by proximity. Your location is used only in-app
        and is never transmitted anywhere. You can revoke this permission at
        any time in iOS Settings.
      </p>

      <h2 className={h2}>Links to external sites</h2>
      <p className={p}>
        ToolKeep links to manufacturer warranty pages and uses Apple Maps for
        directions. When you tap these links, you leave the app and your
        interaction is governed by those services&apos; privacy policies.
      </p>

      <h2 className={h2}>Deleting your data</h2>
      <p className={p}>
        Settings → Data → Clear All Data removes everything. Uninstalling the
        app also removes all local data.
      </p>

      <h2 className={h2}>Contact</h2>
      <p className={p}>
        Questions? Email{" "}
        <a className={aCls} href="mailto:support@mjsconsulting.com.au">
          support@mjsconsulting.com.au
        </a>
        .
      </p>
    </article>
  );
}
