import { DownloadCounter } from "./download-counter";

const downloadUrl =
  "https://github.com/NythralHome/globe/releases/download/v0.1.0-beta.3/Globe-0.1.0-beta.3.dmg";

const repoUrl = "https://github.com/NythralHome/globe";

const setupSteps = [
  {
    title: "Install Globe",
    text: "Download the beta DMG, drag Globe.app to Applications, then open it from Applications.",
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
  "Native macOS menu bar app",
  "Open source under the MIT License",
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Globe home">
          <span className="brandMark">◎</span>
          <span>Globe</span>
        </a>
        <nav>
          <a href="#install">Install</a>
          <a href="#privacy">Privacy</a>
          <a href={repoUrl}>GitHub</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Open-source macOS utility</p>
          <h1>Globe</h1>
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
          </div>
          <p className="releaseNote">Beta 0.1.0-beta.3 for macOS 14 or newer.</p>
        </div>

        <div className="heroMedia" aria-label="Globe setup window preview">
          <div className="appMockup">
            <div className="windowBar">
              <span />
              <span />
              <span />
            </div>
            <div className="mockupBody">
              <aside className="mockupSidebar">
                <strong>Globe</strong>
                <small>Beta setup</small>
                <b>Globe</b>
                <b>Privacy</b>
                <b>Permissions</b>
                <b>Key Actions</b>
              </aside>
              <section className="mockupContent">
                <div className="mockIcon">◎</div>
                <h2>Direct switching</h2>
                <p>
                  Single, double, and triple Globe/Fn presses map to specific
                  input sources.
                </p>
                <div className="mockRows">
                  <span>Single press</span>
                  <strong>Ukrainian</strong>
                  <span>Double press</span>
                  <strong>U.S.</strong>
                  <span>Long press</span>
                  <strong>Settings</strong>
                </div>
              </section>
            </div>
          </div>
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
          <p className="eyebrow">Open source</p>
          <h2>Built in public.</h2>
          <p>
            Globe is open source under the MIT License. The app, build scripts,
            beta packaging, and issue templates are available on GitHub.
          </p>
          <a className="textLink" href={repoUrl}>
            Open NythralHome/globe
          </a>
        </div>
      </section>

      <section className="downloadStrip">
        <div>
          <h2>Download Globe beta</h2>
          <p>Native macOS app, DMG installer, open-source MIT license.</p>
          <DownloadCounter />
        </div>
        <a className="button primary" href={downloadUrl}>
          Download DMG
        </a>
      </section>

      <footer>
        <span>Globe is an independent open-source utility.</span>
        <a href={repoUrl}>GitHub</a>
      </footer>
    </main>
  );
}
