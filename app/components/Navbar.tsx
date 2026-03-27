"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const timeout = setTimeout(() => {
        setVisible(true);
      }, 750);

      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-slate-900 backdrop-blur z-50 transition-transform duration-500 ${
      visible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Morris Harrison
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-slate-300 hover:text-white transition font-medium">
            Home
          </Link>
          <Link href="/skills" className="text-slate-300 hover:text-white transition font-medium">
            Skills
          </Link>
          <Link href="/projects" className="text-slate-300 hover:text-white transition font-medium">
            Projects
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-white transition font-medium">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
