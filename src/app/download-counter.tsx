"use client";

import { useEffect, useState } from "react";

type Release = {
  assets: Array<{
    name: string;
    download_count: number;
  }>;
};

export function DownloadCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch("https://api.github.com/repos/NythralHome/globe/releases/tags/v0.1.0-beta.6", {
      headers: {
        Accept: "application/vnd.github+json",
      },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((release: Release | null) => {
        if (!isMounted || !release) {
          return;
        }

        const total = release.assets.reduce(
          (sum, asset) => sum + asset.download_count,
          0
        );
        setCount(total);
      })
      .catch(() => {
        if (isMounted) {
          setCount(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (count === null) {
    return <p className="downloadCount">Beta download count loads from GitHub.</p>;
  }

  return (
    <p className="downloadCount">
      {count.toLocaleString()} beta {count === 1 ? "download" : "downloads"} on
      GitHub Releases.
    </p>
  );
}
