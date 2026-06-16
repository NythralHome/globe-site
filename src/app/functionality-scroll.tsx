"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const functionalityItems = [
  {
    label: "First launch",
    title: "Know exactly what just opened.",
    text: "The welcome flow explains the menu bar app, privacy boundary, Accessibility permission, and the one keyboard setting macOS keeps manual.",
    image: "/screenshots/globe-onboarding.png",
    bullets: ["Welcome setup", "Menu bar status", "Manual macOS step"],
  },
  {
    label: "Permissions",
    title: "Test the Globe key before mapping anything.",
    text: "The permissions screen shows Accessibility state, opens the right System Settings pane, and confirms whether Globe/Fn events are visible.",
    image: "/screenshots/globe-permissions.png",
    bullets: ["Accessibility helper", "Globe/Fn test", "Keyboard setting guide"],
  },
  {
    label: "Key Actions",
    title: "Jump to the language you meant.",
    text: "Assign installed input sources to single, double, and triple Globe/Fn presses. Keep long press for settings when you need to adjust the app.",
    image: "/screenshots/globe-key-actions.png",
    bullets: ["Single press", "Double press", "Triple press"],
  },
  {
    label: "Control center",
    title: "Settings, updates, and diagnostics in one place.",
    text: "Tabs keep the utility compact: launch options, timing, menu bar behavior, update checks, source links, and exportable diagnostics stay together.",
    image: "/screenshots/globe-settings.png",
    bullets: ["Tabbed settings", "Signed updates", "Export diagnostics"],
  },
];

export function FunctionalityScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const index = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "-34% 0px -42% 0px",
        threshold: [0.12, 0.32, 0.56, 0.76],
      },
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  const activeItem = functionalityItems[activeIndex];

  return (
    <section className="functionalityScroll" id="workflow">
      <div className="functionalityIntro">
        <p className="eyebrow">Functionality</p>
        <h2>Make the Globe key predictable.</h2>
        <p>
          Globe turns one overloaded macOS key into direct, intentional actions
          without hiding what the app needs from the system.
        </p>
      </div>

      <div className="functionalityStage">
        <div className="functionalityCopy">
          {functionalityItems.map((item, index) => (
            <article
              className={`functionalityCard ${index === activeIndex ? "active" : ""}`}
              data-index={index}
              key={item.title}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
            >
              <p className="functionalityLabel">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="functionalityPills">
                {item.bullets.map((bullet) => (
                  <span key={bullet}>{bullet}</span>
                ))}
              </div>
              <Image
                alt={`${item.label} screen`}
                className="functionalityCardImage"
                src={item.image}
                width={1520}
                height={1070}
              />
            </article>
          ))}
        </div>

        <div className="functionalityVisual" aria-live="polite">
          <div className="visualChrome">
            <span />
            <span />
            <span />
            <strong>{activeItem.label}</strong>
          </div>
          <div className="visualImageWrap">
            {functionalityItems.map((item, index) => (
              <Image
                alt={`${item.label} screen`}
                className={`functionalityImage ${
                  index === activeIndex ? "active" : ""
                }`}
                fill
                key={item.image}
                src={item.image}
                sizes="(max-width: 1080px) 0px, 58vw"
                priority={index === 0}
              />
            ))}
          </div>
          <div className="visualCaption">
            <strong>{activeItem.title}</strong>
            <span>{activeItem.bullets.join(" / ")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
