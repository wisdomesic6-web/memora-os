"use client";

import { useState } from "react";
import Link from "next/link";
import { APP_URL } from "@/lib/config";

const NAV = [
  { label: "System", href: "#system" },
  { label: "Evolve", href: "#evolve" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05070f]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-violet-500 text-xs font-bold text-white">
            M
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            Memora<span className="text-white/40">OS</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="text-[13px] text-white/50 transition hover:text-white">
              {n.label}
            </a>
          ))}
          <span className="flex items-center gap-2 border-l border-white/10 pl-5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] text-white/40">System Online</span>
          </span>
          <a
            href={APP_URL}
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-[13px] font-semibold text-white shadow-[0_4px_20px_-6px_rgba(99,102,241,0.6)] transition hover:opacity-90"
          >
            Launch App
          </a>
        </nav>

        {/* mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-t border-white/5 bg-[#05070f]/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href={APP_URL}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Launch App
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
