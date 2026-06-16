import Image from "next/image";
import { DownloadCounter } from "./download-counter";

const downloadUrl =
  "https://github.com/NythralHome/globe/releases/download/v0.1.0-beta.7/Globe-0.1.0-beta.7.pkg";

const repoUrl = "https://github.com/NythralHome/globe";
const issueUrl = "https://github.com/NythralHome/globe/issues/new/choose";
const authorUrl = "https://nythral.com";

const setupSteps = [
  {
    title: "Install Globe",
    text: "Download the signed beta installer, open it, and Globe starts automatically from Applications.",
  },
  {
    title: "Allow Accessibility",
    text: "Add Globe in System Settings > Privacy & Security > Accessibility. macOS requires this for global Globe/Fn key events.",
  },
  {
    title: "Disable the default Globe action",
    text: "In System Settings > Keyboard, set “Press Globe key to” to “Do Nothing”. This is a manual Apple-controlled setting.",
  },
  {
    title: "Choose direct switches",
    text: "Assign single, double, and triple Globe/Fn presses to installed macOS input sources.",
  },
];

const features = [
  "Single Globe/Fn press -> one specific input source",
  "Double press -> another input source",
  "Triple press -> a third input source",
  "Long press -> settings",
  "On-demand GitHub release update checks",
  "Native macOS menu bar app",
  "Open source under the MIT License",
];

const screenshots = [
  {
    title: "Welcome setup",
    text: "A guided first launch explains privacy, permissions, and the manual macOS Globe key setting.",
    src: "/screenshots/globe-onboarding.png",
    alt: "Globe welcome setup window",
  },
  {
    title: "General settings",
    text: "Keep Globe enabled, launch at login, control the menu bar item, and show the switching HUD.",
    src: "/screenshots/globe-settings.png",
    alt: "Globe General settings tab",
  },
  {
    title: "Permissions",
    text: "Open the exact macOS settings needed for Accessibility and the default Globe key action.",
    src: "/screenshots/globe-permissions.png",
    alt: "Globe Permissions settings tab",
  },
  {
    title: "Key actions",
    text: "Map single, double, triple, and long Globe/Fn presses to the actions you actually use.",
    src: "/screenshots/globe-key-actions.png",
    alt: "Globe Key Actions settings tab",
  },
  {
    title: "About and updates",
    text: "See the author, source, support links, and check GitHub Releases for a newer signed installer.",
    src: "/screenshots/globe-about.png",
    alt: "Globe About settings tab",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Globe home">
          <Image
            className="brandIcon"
            src="/brand/globe-icon.png"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span>Globe</span>
        </a>
        <nav>
          <a href="#install">Install</a>
          <a href="#screens">Screens</a>
          <a href="#privacy">Privacy</a>
          <a href={issueUrl}>Report issue</a>
          <a href={repoUrl}>GitHub</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Open-source macOS utility</p>
          <div className="heroTitle">
            <Image src="/brand/globe-icon.png" alt="" width={72} height={72} />
            <h1>Globe</h1>
          </div>
          <p className="lede">
            A predictable Globe/Fn key input source switcher for people who
            type in multiple languages every day.
          </p>
          <div className="actions">
            <a className="button primary" href={downloadUrl}>
              Download beta
            </a>
            <a className="button secondary" href={repoUrl}>
              View source
            </a>
            <a className="button ghost" href={issueUrl}>
              Report issue
            </a>
          </div>
          <p className="releaseNote">Beta 0.1.0-beta.7 for macOS 14 or newer.</p>
        </div>

        <div className="heroMedia" aria-label="Globe settings window screenshot">
          <Image
            className="heroScreenshot"
            src="/screenshots/globe-settings.png"
            alt="Globe settings window with General, Permissions, Key Actions, and Advanced tabs"
            width={1520}
            height={1070}
            loading="eager"
            priority
          />
        </div>
      </section>

      <section className="band">
        <div className="featureGrid">
          {features.map((feature) => (
            <div className="feature" key={feature}>
              <span className="check">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section screensSection" id="screens">
        <div className="sectionHeading">
          <p className="eyebrow">Screens</p>
          <h2>Every setup screen is built into the app.</h2>
          <p>
            Globe keeps the product surface small: one welcome flow, one
            tabbed settings window, and direct links to the system settings
            macOS requires.
          </p>
        </div>

        <div className="screensGrid">
          {screenshots.map((screenshot) => (
            <article className="screenCard" key={screenshot.src}>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={1520}
                height={1070}
                className="screenImage"
              />
              <div>
                <h3>{screenshot.title}</h3>
                <p>{screenshot.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="install">
        <div className="sectionHeading">
          <p className="eyebrow">Install</p>
          <h2>Beta setup is guided, with two macOS steps.</h2>
          <p>
            Globe cannot silently change Apple-controlled keyboard and security
            settings. The welcome screen opens the right places and shows what
            to change.
          </p>
        </div>

        <div className="steps">
          {setupSteps.map((step, index) => (
            <article className="step" key={step.title}>
              <span className="stepNumber">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section twoColumn" id="privacy">
        <div>
          <p className="eyebrow">Privacy</p>
          <h2>No typed text is recorded.</h2>
          <p>
            Globe only listens for Globe/Fn key state changes so it can switch
            input sources directly. It does not record, store, or transmit typed
            text.
          </p>
        </div>
        <div>
          <p className="eyebrow">About</p>
          <h2>Built by Nythral, in public.</h2>
          <p>
            Globe is open source under the MIT License. The app, build scripts,
            beta packaging, and issue templates are available on GitHub. It is
            developed by Nythral for people who switch languages constantly on
            macOS.
          </p>
          <div className="linkRow">
            <a className="textLink" href={authorUrl}>
              Nythral website
            </a>
            <a className="textLink" href={repoUrl}>
              Source code
            </a>
          </div>
        </div>
      </section>

      <section className="section updateSection">
        <div className="sectionHeading">
          <p className="eyebrow">Updates</p>
          <h2>Update checks are explicit.</h2>
          <p>
            Globe beta checks GitHub Releases when you ask it to. If a newer
            version exists, the app shows what changed and opens the signed
            installer download page.
          </p>
        </div>
      </section>

      <section className="downloadStrip">
        <div>
          <h2>Download Globe beta</h2>
          <p>Native macOS app, signed installer package, open-source MIT license.</p>
          <DownloadCounter />
        </div>
        <a className="button primary" href={downloadUrl}>
          Download PKG
        </a>
      </section>

      <footer>
        <span>Globe is an independent open-source utility by Nythral.</span>
        <div className="footerLinks">
          <a href={authorUrl}>Nythral</a>
          <a href={issueUrl}>Report issue</a>
          <a href={repoUrl}>GitHub</a>
        </div>
      </footer>
    </main>
  );
}
