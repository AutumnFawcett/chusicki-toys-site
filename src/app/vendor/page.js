export const metadata = {
  title: "Vendor Info | Chusicki Toys",
  description: "Vendor application information for Chusicki Toys.",
};

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-xs font-semibold text-black/50">{label}</div>
      <div className="text-sm font-semibold text-black">{value}</div>
    </div>
  );
}

export default function VendorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold tracking-tight">Vendor Info</h1>
        <p className="max-w-3xl text-black/70">
          This page is provided for convention/vendor applications and includes our
          product categories, pricing ranges, and policies.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <InfoRow label="Business Name" value="Chusicki Toys" />
        <InfoRow label="Business Type" value="Convention pop-up retail vendor" />
        <InfoRow
          label="Products"
          value="Anime figures (Chainsaw Man, JJK, Hatsune Miku + rotating inventory)"
        />
        <InfoRow label="Price Range" value="$40–$80 CAD (varies by figure)" />
        <InfoRow label="Payments" value="Cash + card (Square). Card processing fee where permitted." />
        <InfoRow
          label="Special Offer"
          value='Select items: "Buy 2, Get 1 Free" (in-booth only)'
        />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="font-bold">Authenticity Policy</div>
          <p className="mt-2 text-sm text-black/70">
            We aim to source authentic products and avoid bootlegs/counterfeits.
          </p>
        </div>

        <div className="mt-1 text-sm text-black/70">
                Select <span className="font-semibold">fanservice-style figures (non-explicit)</span>:{" "}
                <span className="font-semibold">Buy 2, Get 1 Free</span> (in-booth only).
            </div>
            <div className="mt-2 text-xs text-black/50">
             Some items may be age-restricted by event policy. We follow all convention vendor rules.
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="font-bold">Contact</div>
          <p className="mt-2 text-sm text-black/70">
            Email: <span className="font-semibold">hello@chusicki.com</span>
            <br />
            Instagram: <span className="font-semibold">@chusicki</span>
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl bg-brandPink/10 p-6">
        <div className="font-bold">Notes for Organizers</div>
        <p className="mt-2 text-sm text-black/70">
          We will comply with all vendor guidelines, payment policies, and any restrictions on
          mature content. Booth number and inventory list can be provided once confirmed.
        </p>
      </div>
    </div>
  );
}
