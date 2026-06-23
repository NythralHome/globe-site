"use client";

import { useEffect, useState } from "react";

const releaseDownloadsUrl = "https://api.github.com/repos/NythralHome/globe/releases?per_page=100";

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

    fetch(releaseDownloadsUrl, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((releases: Release[] | null) => {
        if (!isMounted || !releases) {
          return;
        }

        const total = releases.reduce((releaseTotal, release) => {
          const assetTotal = release.assets
            .filter((asset) => /^Globe-.+\.pkg$/.test(asset.name))
            .reduce((sum, asset) => sum + asset.download_count, 0);

          return releaseTotal + assetTotal;
        }, 0);
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
    return <p className="downloadCount">Pro download count loads from GitHub.</p>;
  }

  return (
    <p className="downloadCount">
      {count.toLocaleString()} Pro {count === 1 ? "download" : "downloads"} on
      GitHub Releases.
    </p>
  );
}
