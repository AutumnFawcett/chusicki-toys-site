export const metadata = { title: "Catalog | Chusicki Toys" };

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold">Catalog</h1>
      <p className="mt-3 max-w-2xl text-black/70">
        Inventory changes show-to-show. This page is a preview of the types of figures we carry.
        (Optional later: add a live “in-stock” list.)
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          { title: "Standard Figures", range: "$40–$55", note: "Most popular booth pricing tier." },
          { title: "Premium / Limited", range: "$60–$80", note: "Larger, limited, or special editions." },
          { title: "Budget / Mystery", range: "$25–$40", note: "Small or special bundles (event-based)." },
          { title: "18+ (In-Booth Only)", range: "Special offer", note: "Buy 2 get 1 free (where allowed)." },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
            <div className="flex items-baseline justify-between gap-4">
              <div className="font-bold">{c.title}</div>
              <div className="text-sm font-extrabold text-brandPink">{c.range}</div>
            </div>
            <div className="mt-2 text-sm text-black/70">{c.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
