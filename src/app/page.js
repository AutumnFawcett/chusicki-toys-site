import Link from "next/link";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-b from-brandPink/15 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>Authentic Anime Figures</Pill>
                <Pill>Convention Pop-Up Vendor</Pill>
                <Pill>Cash & Card Accepted</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Chusicki Toys
                <span className="block text-brandPink">Anime figures you actually want.</span>
              </h1>

              <p className="mt-5 text-base text-black/70 md:text-lg">
                We carry a rotating selection of figures (Chainsaw Man, Hatsune Miku, JJK and more).
                Find us at conventions across Alberta — inventory updates coming soon.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/conventions"
                  className="rounded-2xl bg-brandBlack px-6 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
                >
                  Where to Find Us
                </Link>
                <Link
                  href="/catalog"
                  className="rounded-2xl border border-black/15 bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-black/5"
                >
                  View Catalog
                </Link>
              </div>

              <div id="cta" className="mt-8 rounded-2xl border border-black/10 bg-white p-4 shadow-soft">
                <div className="text-sm font-bold">Show Special</div>
                <div className="mt-1 text-sm text-black/70">
                  Select 18+ (“gooner”) figures: <span className="font-semibold">Buy 2, Get 1 Free</span> (in-booth only).
                </div>
                <div className="mt-2 text-xs text-black/50">
                  18+ items are not displayed online and may be restricted by event policies.
                </div>
              </div>
            </div>

            {/* Fake “product grid” */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="font-extrabold">Featured Categories</div>
                <span className="text-xs font-semibold text-black/50">Updated at events</span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Chainsaw Man", note: "Popular picks & variants" },
                  { title: "Jujutsu Kaisen (JJK)", note: "Main cast + limiteds" },
                  { title: "Hatsune Miku", note: "Seasonal / themed" },
                  { title: "Mystery Picks", note: "Budget friendly" },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl border border-black/10 p-4 hover:border-brandPink/40">
                    <div className="font-bold">{c.title}</div>
                    <div className="mt-1 text-sm text-black/60">{c.note}</div>
                    <div className="mt-3 text-xs font-semibold text-brandPink">Ask in-booth</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-brandPink/10 p-4">
                <div className="text-sm font-bold">Payments</div>
                <div className="mt-1 text-sm text-black/70">
                  We accept cash and card. Card payments may include a processing fee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold">What we do</h2>
        <p className="mt-3 max-w-3xl text-black/70">
          Chusicki Toys is a small convention vendor business focused on anime figure fans.
          We source figures through Japan-based sellers and third-party forwarding/warehouse shipping
          so we can bring fresh inventory to each show.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { t: "Authenticity focus", d: "We avoid bootlegs and prioritize reputable sources." },
            { t: "Event-first sales", d: "In-person booth experience with clear pricing." },
            { t: "Fast restocks", d: "Top sellers get re-ordered for future conventions." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="font-bold">{x.t}</div>
              <div className="mt-2 text-sm text-black/70">{x.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
