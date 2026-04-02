"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollTo" in window) {
      // Prevent browser scroll restoration and force to top
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  // Re-enable scrolling on non-home routes; home page manages its own lock
  useEffect(() => {
    if (typeof document === "undefined") return;

    const htmlEl = document.documentElement;

    if (pathname === "/") {
      // Leave overflow control to the Home page's intro logic
      return;
    }

    document.body.style.overflow = "auto";
    htmlEl.style.overflow = "auto";
  }, [pathname]);

  return null;
}
