"use client";

import { useEffect } from "react";

const TALLY_SRC =
  "https://tally.so/embed/D4v12E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_SCRIPT = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export function TallyEmbed() {
  useEffect(() => {
    const loadEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }
      document
        .querySelectorAll<HTMLIFrameElement>(
          "iframe[data-tally-src]:not([src])",
        )
        .forEach((iframe) => {
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
    };

    if (typeof window.Tally !== "undefined") {
      loadEmbeds();
      return;
    }

    const existing = document.querySelector(
      `script[src="${TALLY_SCRIPT}"]`,
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", loadEmbeds, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = TALLY_SCRIPT;
    script.async = true;
    script.onload = loadEmbeds;
    script.onerror = loadEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      data-tally-src={TALLY_SRC}
      loading="lazy"
      width="100%"
      height={284}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Get a free operations audit"
      className="block w-full"
    />
  );
}
