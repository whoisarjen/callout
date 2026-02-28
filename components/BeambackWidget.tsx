"use client";

import Script from "next/script";

export function BeambackWidget() {
  return (
    <Script
      src="https://beamback.whoisarjen.com/widget.js"
      data-api-key="NEEDS_NEW_KEY"
      strategy="afterInteractive"
    />
  );
}
