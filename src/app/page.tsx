import Image from "next/image";
import { DownloadCounter } from "./download-counter";
import { FunctionalityScroll } from "./functionality-scroll";

const version = "0.1.0-beta.14";
const downloadUrl = `https://github.com/NythralHome/globe/releases/download/v${version}/Globe-${version}.pkg`;

const repoUrl = "https://github.com/NythralHome/globe";
const issueUrl = "https://github.com/NythralHome/globe/issues/new/choose";
const authorUrl = "https://nythral.com";

const features = [
  ["One press", "Jump straight to your primary input source."],
  ["Double press", "Switch to a second language without cycling."],
  ["Triple press", "Keep a third input source one gesture away."],
  ["Hold Globe/Fn", "Open settings from anywhere on macOS."],
];

const installSteps = [
  "Install the signed PKG.",
  "Enable Accessibility for Globe.",
  "Set Globe key to Do Nothing.",
  "Map your input sources.",
];

const faq = [
  [
    "Why Accessibility?",
    "macOS requires Accessibility permission for global Globe/Fn key events. Globe does not record typed text.",
  ],
  [
    "Why set Globe to Do Nothing?",
    "It prevents macOS from cycling input sources before Globe can switch directly.",
  ],
  [
    "How do updates work?",
    "Globe checks GitHub Releases only when you ask. It downloads the signed PKG installer and opens it.",
  ],
  [
    "Where do bug reports go?",
    "Use Report issue on GitHub. You can export diagnostics from the app and attach them to the issue.",
  ],
];

const changelog = [
  "Centered menu-bar windows from the active screen context.",
  "Direct update installer downloads from GitHub Releases.",
  "Exportable diagnostics and Globe/Fn key test flow.",
  "Signed, notarized, stapled Developer ID installer.",
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
          <a href="#workflow">Workflow</a>
          <a href="#install">Install</a>
          <a href="#open-source">Open source</a>
          <a href="#faq">FAQ</a>
          <a href={repoUrl}>GitHub</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Open-source macOS utility</p>
          <Image
            className="heroIcon"
            src="/brand/globe-icon.png"
            alt=""
            width={92}
            height={92}
            priority
          />
          <h1>Globe</h1>
          <p className="lede">
            Direct input source switching for macOS. Press Globe/Fn once,
            twice, or three times to jump to the language you meant.
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
          <p className="releaseNote">Beta {version} for macOS 14 or newer.</p>
        </div>

        <div className="heroStage" aria-label="Globe app screenshots">
          <div className="menuBarPreview">
            <span className="traffic" />
            <span className="traffic" />
            <span className="traffic" />
            <span className="menuGlyph">◎</span>
          </div>
          <Image
            className="heroScreenshot"
            src="/screenshots/globe-settings.png"
            alt="Globe settings window"
            width={1520}
            height={1070}
            loading="eager"
            priority
          />
          <div className="floatingBadge">Globe/Fn {"->"} Ukrainian</div>
        </div>
      </section>

      <section className="featureStrip" aria-label="Globe key actions">
        {features.map(([title, text]) => (
          <article className="feature" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <FunctionalityScroll />

      <section className="install section" id="install">
        <div className="sectionHeading">
          <p className="eyebrow">Install</p>
          <h2>Signed beta. Clear macOS steps.</h2>
          <p>
            Globe cannot silently change Apple-controlled permissions. The app
            guides you to the right places and gives you a built-in key test.
          </p>
        </div>
        <div className="installGrid">
          {installSteps.map((step, index) => (
            <article className="step" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy section">
        <div>
          <p className="eyebrow">Privacy</p>
          <h2>No typed text is recorded.</h2>
        </div>
        <p>
          Globe only observes Globe/Fn key state changes and input source
          metadata needed for switching. Diagnostics stay local until you
          choose to export and attach them to an issue.
        </p>
      </section>

      <section className="openSource section" id="open-source">
        <div className="sectionHeading">
          <p className="eyebrow">Open source</p>
          <h2>Built in public by Nythral.</h2>
          <p>
            The app code, packaging scripts, GitHub workflows, issue templates,
            and beta docs are available under the MIT License.
          </p>
        </div>
        <div className="repoCard">
          <div>
            <h3>NythralHome/globe</h3>
            <p>Native Swift app, signed installer, beta release notes, and CI.</p>
          </div>
          <a className="button secondary" href={repoUrl}>
            Open GitHub
          </a>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="sectionHeading">
          <p className="eyebrow">FAQ</p>
          <h2>Designed around macOS boundaries.</h2>
        </div>
        <div className="faqGrid">
          {faq.map(([question, answer]) => (
            <article className="faqItem" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="release section">
        <div>
          <p className="eyebrow">Latest beta</p>
          <h2>{version}</h2>
          <DownloadCounter />
        </div>
        <ul>
          {changelog.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="downloadStrip">
        <div>
          <h2>Download Globe beta</h2>
          <p>Native macOS app, signed installer package, MIT licensed.</p>
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
