"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Analytics } from "@vercel/analytics/next";

// Vercel's visitor counter (numbers show in the Vercel dashboard's Analytics tab, not on the site).
// Manish's own visits are left out: once he signs in on a device, that device is remembered
// and never counted again, even when signed out.
const SKIP_KEY = "va-disable";

function isSkipped(): boolean {
  try {
    return localStorage.getItem(SKIP_KEY) === "1";
  } catch {
    return false;
  }
}

export function VisitorCounter() {
  const { status } = useSession();

  useEffect(() => {
    if (status !== "authenticated") return;
    try {
      localStorage.setItem(SKIP_KEY, "1");
    } catch {}
  }, [status]);

  return <Analytics beforeSend={(event) => (isSkipped() ? null : event)} />;
}
