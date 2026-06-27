// Memora OS — Personal AI Operating System landing page.
// Tailwind CSS only. Server Component (TopNav is the only client piece).

import TopNav from "@/components/TopNav";
import { APP_URL } from "@/lib/config";

/* ── header icons (inline SVG, no external icon lib) ───────────── */
const svg = "h-4 w-4";
const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={svg}>
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={svg}>
    <path d="M3 3v18h18" />
    <rect x="7" y="11" width="3" height="6" rx="1" />
    <rect x="12" y="7" width="3" height="10" rx="1" />
    <rect x="17" y="13" width="3" height="4" rx="1" />
  </svg>
);
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={svg}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconActivity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={svg}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={svg}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
  </svg>
);

/* ── shared panel shell ────────────────────────────────────────── */
function Panel({ index, title, icon, children }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.07]">
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(160px_90px_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]" />
      <div className="relative mb-4 flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-indigo-300">{icon}</span>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">{title}</h3>
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/30">Layer 0{index}</span>
        </div>
        <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.45)]" />
      </div>
      <div className="relative flex-1">{children}</div>
    </div>
  );
}

/* ── panel 1: Memora Core (memory) ─────────────────────────────── */
function MemoraCore() {
  const mem = [
    { label: "Identity", w: "w-11/12" },
    { label: "Preferences", w: "w-3/4" },
    { label: "Context", w: "w-2/3" },
    { label: "Relationships", w: "w-5/6" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
        <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500" />
        <div className="flex-1 space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-white/20" />
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
        </div>
      </div>
      {mem.map((m) => (
        <div key={m.label} className="flex items-center gap-2">
          <div className="h-6 w-6 shrink-0 rounded-md border border-white/10 bg-indigo-500/10" />
          <div className="flex-1">
            <div className="text-[11px] text-white/70">{m.label}</div>
            <div className="mt-1 h-1 w-full rounded-full bg-white/10">
              <div className={`h-1 ${m.w} rounded-full bg-gradient-to-r from-indigo-400 to-violet-400`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── panel 2: Intelligence Dashboard ───────────────────────────── */
function IntelligenceDashboard() {
  const stats = [
    { v: "1,840", l: "Memories" },
    { v: "92", l: "Goals" },
    { v: "24/7", l: "Active" },
    { v: "45+", l: "Skills" },
  ];
  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] text-white/40">Activity</span>
          <span className="text-[10px] font-medium text-emerald-400">+12.4%</span>
        </div>
        <svg viewBox="0 0 100 36" preserveAspectRatio="none" className="h-12 w-full">
          <defs>
            <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(129,140,248)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(129,140,248)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,28 15,22 30,25 45,14 60,18 75,8 100,12 100,36 0,36" fill="url(#spark)" />
          <polyline points="0,28 15,22 30,25 45,14 60,18 75,8 100,12" fill="none" stroke="rgb(129,140,248)" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {stats.map((s) => (
          <div key={s.l} className="rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="text-sm font-semibold text-white">{s.v}</div>
            <div className="text-[10px] text-white/40">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── panel 3: Digital Assistant (chat) ─────────────────────────── */
function DigitalAssistant() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-2">
        <div className="max-w-[88%] rounded-lg rounded-tl-sm border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] leading-snug text-white/70">
          Good morning. How can I help?
        </div>
        <div className="ml-auto max-w-[88%] rounded-lg rounded-tr-sm bg-gradient-to-br from-indigo-500 to-violet-500 px-2.5 py-1.5 text-[11px] leading-snug text-white">
          Summarize my week
        </div>
        <div className="max-w-[92%] rounded-lg rounded-tl-sm border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] leading-snug text-white/70">
          You hit 4 of 5 goals. Energy peaked Tuesday.
        </div>
        <div className="ml-auto max-w-[88%] rounded-lg rounded-tr-sm bg-gradient-to-br from-indigo-500 to-violet-500 px-2.5 py-1.5 text-[11px] leading-snug text-white">
          What should I focus on?
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
        <span className="text-[11px] text-white/30">Message Memora…</span>
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-md bg-indigo-500/80 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
            <path d="m5 12 14-7-7 14-2-5-5-2Z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/* ── panel 4: Pulse (life tracking) ────────────────────────────── */
function PulseSystem() {
  const metrics = [
    { l: "Focus", v: "82%", w: "w-[82%]", c: "from-cyan-400 to-indigo-400" },
    { l: "Energy", v: "68%", w: "w-[68%]", c: "from-violet-400 to-indigo-400" },
  ];
  const events = [
    { t: "Morning routine", s: "07:30" },
    { t: "Deep work block", s: "09:00" },
    { t: "Reflection logged", s: "21:00" },
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m) => (
          <div key={m.l} className="rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="text-[10px] text-white/40">{m.l}</div>
            <div className="text-sm font-semibold text-white">{m.v}</div>
            <div className="mt-1.5 h-1 rounded-full bg-white/10">
              <div className={`h-1 ${m.w} rounded-full bg-gradient-to-r ${m.c}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2.5 border-l border-white/10 pl-3">
        {events.map((e) => (
          <div key={e.t} className="relative">
            <span className="absolute -left-[15px] top-1 h-2 w-2 rounded-full bg-indigo-400 ring-2 ring-[#05070f]" />
            <div className="text-[11px] text-white/70">{e.t}</div>
            <div className="font-mono text-[10px] text-white/30">{e.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── panel 5: Action Engine (execution) ────────────────────────── */
function ActionEngine() {
  const tasks = [
    { label: "Draft Q3 plan", done: true },
    { label: "Review goals", done: true },
    { label: "Schedule deep work", active: true },
    { label: "Outline follow-ups" },
  ];
  return (
    <div className="space-y-2">
      {tasks.map((t) => (
        <div
          key={t.label}
          className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 transition-colors ${
            t.active
              ? "border-indigo-400/40 bg-indigo-500/10 shadow-[0_0_24px_-8px_rgba(99,102,241,0.7)]"
              : "border-white/10 bg-white/5"
          }`}
        >
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border ${
              t.done
                ? "border-emerald-400/50 bg-emerald-400/20 text-emerald-300"
                : t.active
                ? "border-indigo-400/60"
                : "border-white/15"
            }`}
          >
            {t.done && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
                <path d="m5 12 5 5L20 7" />
              </svg>
            )}
            {t.active && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />}
          </span>
          <span className={`flex-1 text-[11px] ${t.done ? "text-white/40 line-through" : "text-white/80"}`}>{t.label}</span>
          {t.active && <span className="font-mono text-[9px] uppercase tracking-wider text-indigo-300">Running</span>}
        </div>
      ))}
      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
        <div className="mb-1 flex justify-between text-[10px] text-white/40">
          <span>Execution</span>
          <span>3 / 5</span>
        </div>
        <div className="h-1 rounded-full bg-white/10">
          <div className="h-1 w-3/5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
        </div>
      </div>
    </div>
  );
}

/* ── boot-sequence strip ───────────────────────────────────────── */
function BootStrip() {
  const modules = ["memory.core", "intelligence", "assistant", "pulse", "action.engine"];
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-[11px] backdrop-blur-xl">
        <span className="text-indigo-300">$ memora.init</span>
        {modules.map((m) => (
          <span key={m} className="flex items-center gap-1.5 text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_1px_rgba(52,211,153,0.5)]" />
            {m}
            <span className="text-emerald-400/70">ok</span>
          </span>
        ))}
        <span className="ml-auto flex items-center gap-1 text-white/60">
          system ready
          <span className="inline-block h-3 w-1.5 animate-pulse bg-indigo-400" />
        </span>
      </div>
    </div>
  );
}

/* ── "evolves with you" timeline ───────────────────────────────── */
function EvolveTimeline() {
  const steps = [
    { t: "Day 1", h: "Learns your identity", d: "Captures who you are — values, preferences, context." },
    { t: "Week 1", h: "Maps your goals", d: "Connects daily actions to where you're headed." },
    { t: "Month 1", h: "Knows your context", d: "Recalls exactly what matters the moment you ask." },
    { t: "Ongoing", h: "Your second brain", d: "Compounds context the longer you use it." },
  ];
  return (
    <section id="evolve" className="scroll-mt-24 relative z-10 mx-auto max-w-7xl px-6 pb-28">
      <div className="mb-12 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-300/70">It evolves with you</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A system that compounds over time</h2>
      </div>
      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute inset-x-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
        {steps.map((s, i) => (
          <div key={s.t} className="relative">
            <div className="mb-4 flex items-center gap-3">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/40 bg-[#05070f] font-mono text-xs font-semibold text-indigo-300">
                0{i + 1}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">{s.t}</span>
            </div>
            <h3 className="text-base font-semibold text-white">{s.h}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/50">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── footer ────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-white/[0.02] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-violet-500 text-xs font-bold text-white">M</div>
          <span className="text-sm font-semibold">
            Memora<span className="text-white/40">OS</span>
          </span>
        </div>
        <nav className="flex items-center gap-6 text-[13px] text-white/50">
          <a href="#system" className="transition hover:text-white">System</a>
          <a href="#evolve" className="transition hover:text-white">Evolve</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] text-white/40">All systems operational</span>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center font-mono text-[11px] text-white/25">
        © 2026 Memora OS — Personal AI Infrastructure
      </div>
    </footer>
  );
}

/* ── pricing ───────────────────────────────────────────────────── */
const TIERS = [
  {
    name: "Free",
    price: "₦0",
    cadence: "/mo",
    blurb: "A live demo of the system.",
    cta: "Start free",
    features: [
      "25 messages / day",
      "Business memory across sessions",
      "Voice in & out",
      "Image vision",
    ],
  },
  {
    name: "Starter",
    price: "₦15,000",
    cadence: "/mo",
    blurb: "For solo operators & freelancers.",
    cta: "Choose Starter",
    features: [
      "Everything in Free",
      "Live web search with citations",
      "Custom skills",
      "Voice, image & higher limits",
    ],
  },
  {
    name: "Business",
    price: "₦35,000",
    cadence: "/mo",
    blurb: "For teams running on shared context.",
    cta: "Choose Business",
    popular: true,
    features: [
      "Everything in Starter",
      "Team access — shared business memory",
      "Live web search with citations",
      "Custom skills, voice & image vision",
    ],
  },
  {
    name: "Team / Pro",
    price: "₦75,000",
    cadence: "/mo",
    blurb: "For bigger teams.",
    cta: "Choose Team",
    features: [
      "Everything in Business",
      "More team seats",
      "Your data in your own system",
      "Priority support",
    ],
  },
];

function PriceCard({ t }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur-xl ${
        t.popular
          ? "border-indigo-400/40 bg-indigo-500/[0.07] shadow-[0_0_44px_-12px_rgba(99,102,241,0.6)]"
          : "border-white/10 bg-white/5"
      }`}
    >
      {t.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
          Most popular
        </span>
      )}
      <h3 className="text-sm font-semibold text-white">{t.name}</h3>
      <p className="mt-1 text-[12px] text-white/45">{t.blurb}</p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-bold tracking-tight">{t.price}</span>
        <span className="text-[12px] text-white/40">{t.cadence}</span>
      </div>
      <ul className="mt-5 flex-1 space-y-2.5">
        {t.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[13px] text-white/70">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-300">
              <path d="m5 12 5 5L20 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={APP_URL}
        className={`mt-6 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition ${
          t.popular
            ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90"
            : "border border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10"
        }`}
      >
        {t.cta}
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 relative z-10 mx-auto max-w-7xl px-6 pb-28">
      <div className="mb-12 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-300/70">Pricing</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Plans that scale with you</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/50">Start free. Upgrade when your business runs on it.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((t) => (
          <PriceCard key={t.name} t={t} />
        ))}
      </div>

      {/* Done-for-you (5th tier) */}
      <div className="mt-4 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 backdrop-blur-xl md:flex-row md:items-center">
        <div className="max-w-xl">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">Done-for-you</h3>
            <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-indigo-200">Premium</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            We build it for you — custom skills, your business memory loaded in, and your whole
            team onboarded, set up in your own system.
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-white/65">
            <li>• Custom skills built for you</li>
            <li>• Business memory loaded</li>
            <li>• Team onboarded</li>
            <li>• Data in your own system</li>
          </ul>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
          <div className="md:text-right">
            <div className="text-2xl font-bold tracking-tight">
              ₦150,000 <span className="text-sm font-normal text-white/45">setup</span>
            </div>
            <div className="text-sm text-white/55">then ₦50,000<span className="text-white/40">/mo</span></div>
          </div>
          <a href={APP_URL} className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── page ───────────────────────────────────────────────────────── */
export default function MemoraLanding() {
  const panels = [
    { title: "Memora Core", icon: <IconLayers />, body: <MemoraCore /> },
    { title: "Intelligence Dashboard", icon: <IconChart />, body: <IntelligenceDashboard /> },
    { title: "Digital Assistant", icon: <IconChat />, body: <DigitalAssistant /> },
    { title: "Pulse", icon: <IconActivity />, body: <PulseSystem /> },
    { title: "Action Engine", icon: <IconZap />, body: <ActionEngine /> },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070f] font-sans text-white antialiased">
      {/* ambient background: glow blobs + system grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute left-[-10rem] top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
      </div>

      <TopNav />

      {/* hero */}
      <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-32 text-center sm:pt-40">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">Personal AI Infrastructure</span>
        </div>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Your Personal AI
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">Operating System</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
          A system that remembers you, understands your goals, and guides your life with intelligence.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(99,102,241,0.6)] transition hover:opacity-90 hover:shadow-[0_8px_40px_-4px_rgba(99,102,241,0.85)]"
          >
            Initialize Memora
          </a>
          <a
            href="#system"
            className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/80 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            View System
          </a>
        </div>
      </section>

      {/* boot strip */}
      <BootStrip />

      {/* 5-panel system showcase */}
      <section id="system" className="scroll-mt-24 relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 sm:[&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
          {panels.map((p, i) => (
            <Panel key={p.title} index={i + 1} title={p.title} icon={p.icon}>
              {p.body}
            </Panel>
          ))}
        </div>
      </section>

      {/* evolve timeline */}
      <EvolveTimeline />

      {/* pricing */}
      <Pricing />

      {/* footer */}
      <Footer />
    </main>
  );
}
