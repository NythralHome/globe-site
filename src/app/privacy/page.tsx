import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Globe",
  description:
    "Privacy policy for Globe Pro, an open-source macOS input source switcher by Nythral.",
};

export default function PrivacyPage() {
  return (
    <main className="policyPage">
      <header className="policyHeader">
        <Link className="brand" href="/" aria-label="Globe home">
          <Image
            className="brandIcon"
            src="/brand/globe-icon.png"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span>Globe</span>
        </Link>
      </header>

      <article className="policyDocument">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Globe does not record typed text.</h1>
        <p className="policyLead">
          Globe is an open-source macOS utility by Nythral for predictable input
          source switching. This policy explains what the app observes, stores,
          and never collects.
        </p>

        <section>
          <h2>Data Globe Does Not Collect</h2>
          <p>
            Globe does not record, store, transmit, or sell typed text,
            passwords, documents, messages, browsing activity, or clipboard
            contents.
          </p>
        </section>

        <section>
          <h2>Data Used On Device</h2>
          <p>
            Globe Pro observes Globe/Fn key state changes, current macOS input
            source metadata, configured input source mappings, timing settings,
            launch-at-login preference, and permission state. The Mac App Store
            edition uses registered global shortcuts instead of Globe/Fn key
            monitoring. This information is used locally to switch input sources
            and show app status.
          </p>
        </section>

        <section>
          <h2>Diagnostics</h2>
          <p>
            Globe can export a diagnostics file when you choose to report a
            problem. Diagnostics may include app version, macOS version,
            permission status, installed input source names and identifiers, app
            settings, and recent Globe log lines. Diagnostics do not include
            typed text. The file stays on your Mac unless you decide to attach
            it to a GitHub issue or send it to Nythral.
          </p>
        </section>

        <section>
          <h2>Network Access</h2>
          <p>
            The Globe Pro Developer ID build can check GitHub Releases when you
            request an update check. App Store builds are updated through the Mac
            App Store. Globe does not run background analytics or advertising
            trackers.
          </p>
        </section>

        <section>
          <h2>Permissions</h2>
          <p>
            Globe Pro requests Input Monitoring permission so macOS allows it to
            observe Globe/Fn key state changes globally. This permission is used
            for direct input source switching and does not grant Globe a reason
            to record typed text. The Mac App Store edition does not request
            Input Monitoring.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy questions or bug reports, use{" "}
            <a href="https://github.com/NythralHome/globe/issues/new/choose">
              GitHub Issues
            </a>{" "}
            or visit <a href="https://nythral.com">nythral.com</a>.
          </p>
        </section>

        <p className="policyUpdated">Last updated: June 16, 2026.</p>
      </article>
    </main>
  );
}
