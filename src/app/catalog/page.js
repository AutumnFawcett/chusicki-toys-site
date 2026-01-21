export const metadata = { title: "Catalog | Chusicki Toys" };

const CATEGORIES = [
  {
    title: "Standard Figures",
    range: "$40–$55",
    note: "Most popular booth pricing tier.",
    img: "/images/catalog/standard.png",
    alt: "Standard anime figures",
  },
  {
    title: "Premium / Limited",
    range: "$60–$80",
    note: "Larger, limited, or special editions.",
    img: "/images/catalog/jjk.png",
    alt: "Premium and limited edition figures",
  },
  {
    title: "Budget / Mystery",
    range: "$15–$30",
    note: "Small or special bundles (event-based).",
    img: "/images/catalog/blind-box.png",
    alt: "Budget and mystery picks",
  },
  {
    title: "Fanservice-Style (In-Booth Only)",
    range: "Special offer",
    note: "Non-explicit. Buy 2 get 1 free (in-booth only).",
    img: "/images/catalog/fanservice.png",
    alt: "Fanservice-style figures (non-explicit)",
  },
];

function CatalogCard({ c }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-soft">
      <div className="flex gap-4">
        {/* Image (left) */}
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/10">
          <img
            src={c.img}
            alt={c.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text (right) */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="truncate text-base font-bold">{c.title}</div>
              <div className="mt-1 text-sm text-black/70">{c.note}</div>
            </div>

            <div className="shrink-0 text-sm font-extrabold text-brandPink">
              {c.range}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold">Catalog</h1>
      <p className="mt-3 max-w-2xl text-black/70">
        Inventory changes show-to-show. This page is a preview of the types of
        figures we carry. (Optional later: add a live “in-stock” list.)
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {CATEGORIES.map((c) => (
          <CatalogCard key={c.title} c={c} />
        ))}
      </div>
    </div>
  );
}
