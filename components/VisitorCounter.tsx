"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Analytics } from "@vercel/analytics/next";

// Two visitor counters, neither shown on the site:
//  - Vercel's (numbers in the Vercel dashboard's Analytics tab; countries only).
//  - Our own log (/api/visit -> SiteVisit table; read with `npx tsx scripts/visitor-stats.ts`),
//    which adds cities and true unique visitors via a random id kept in the visitor's browser.
// Manish's own visits are left out of both: once he signs in on a device, that device is
// remembered and never counted again, even when signed out.
const SKIP_KEY = "va-disable";
const VISITOR_KEY = "tv-visitor";

function isSkipped(): boolean {
  try {
    return localStorage.getItem(SKIP_KEY) === "1";
  } catch {
    return false;
  }
}

function visitorId(): string {
  const fresh = () =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = fresh();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return fresh();
  }
}

export function VisitorCounter() {
  const { status } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    if (status !== "authenticated") return;
    try {
      localStorage.setItem(SKIP_KEY, "1");
    } catch {}
  }, [status]);

  // Our own log: wait until sign-in status is known, so a signed-in device is never logged.
  useEffect(() => {
    if (status === "loading" || status === "authenticated" || !pathname || isSkipped()) return;
    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitorId: visitorId(), path: pathname }),
      keepalive: true,
    }).catch(() => {});
  }, [status, pathname]);

  return <Analytics beforeSend={(event) => (isSkipped() ? null : event)} />;
}
