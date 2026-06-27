"use client";

import { useEffect, useState } from "react";
import { API_URL, APP_URL } from "@/lib/config";

// Public social proof. Fetches owner-approved reviews from the backend and shows
// the aggregate rating + testimonials. Until real reviews exist (or if the API
// is unreachable) it shows an honest "be a founding reviewer" state — never fake
// quotes.
function Stars({ value = 0, size = 16 }) {
  return (
    <span className="inline-flex" style={{ gap: 2 }} aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 24 24" width={size} height={size}
          className={n <= Math.round(value) ? "text-amber-400" : "text-white/15"}
          fill="currentColor">
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(`${API_URL}/feedback/public`, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (alive) { setData(d); setLoaded(true); } })
      .catch(() => { if (alive) setLoaded(true); });
    return () => { alive = false; };
  }, []);

  const testimonials = data?.testimonials || [];
  const hasReviews = testimonials.length > 0;

  return (
    <section id="reviews" className="scroll-mt-24 relative z-10 mx-auto max-w-7xl px-6 pb-28">
      <div className="mb-12 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-300/70">
          What people say
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Loved by early users</h2>
        {hasReviews && data?.average != null && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <Stars value={data.average} size={20} />
            <span className="text-sm text-white/70">
              <span className="font-semibold text-white">{data.average}</span> / 5
              <span className="text-white/40"> · {data.count} review{data.count === 1 ? "" : "s"}</span>
            </span>
          </div>
        )}
      </div>

      {hasReviews ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <Stars value={t.rating} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                “{t.comment}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 text-xs font-bold text-white">
                  {(t.display_name || "M").trim().charAt(0).toUpperCase()}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-white">
                    {t.display_name || "Memora user"}
                  </span>
                  {t.role && <span className="block truncate text-[12px] text-white/40">{t.role}</span>}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <Stars value={5} size={22} />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            We're just getting started — be one of our first reviewers. Try Memora OS, then leave a
            rating from <span className="text-white/80">Settings → Rate Memora OS</span>. Real
            reviews from real users will appear right here.
          </p>
          <a
            href={APP_URL}
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Start free
          </a>
        </div>
      )}
    </section>
  );
}
