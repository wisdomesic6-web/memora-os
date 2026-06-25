import Link from "next/link";

// Placeholder entry route for the "Initialize Memora" CTA.
// Replace this with your real authenticated app / onboarding flow.
export default function AppEntry() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#05070f] px-6 text-center font-sans text-white antialiased">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">Booting system</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Initializing{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">Memora</span>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/55">
          Your Personal AI Operating System will live here. Wire this route up to your
          authentication and onboarding flow.
        </p>
        <Link
          href="/"
          className="mt-9 rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/80 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
