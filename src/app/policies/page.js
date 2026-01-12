export const metadata = { title: "Policies | Chusicki Toys" };

export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold">Policies</h1>
      <p className="mt-3 max-w-3xl text-black/70">
        These are simple event policies to keep transactions clean and professional.
        (Adjust as needed per convention rules.)
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="font-bold">Authenticity</div>
          <p className="mt-2 text-sm text-black/70">
            We aim to source authentic figures through reputable sellers and import/forwarding services.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="font-bold">Returns & Exchanges</div>
          <p className="mt-2 text-sm text-black/70">
            Convention sales are typically final. If an item has a verified defect at purchase,
            bring it to us immediately at the booth for a resolution (when possible).
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="font-bold">18+ Items</div>
          <p className="mt-2 text-sm text-black/70">
            Adult-themed items are in-booth only, may require ID, and may be restricted by event policies.
            We do not display 18+ items online.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="font-bold">Payments</div>
          <p className="mt-2 text-sm text-black/70">
            Cash and card accepted. Card payments may include a processing fee (where permitted).
          </p>
        </div>
      </div>
    </div>
  );
}
