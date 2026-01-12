export const metadata = { title: "Conventions | Chusicki Toys" };

export default function ConventionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold">Conventions</h1>
      <p className="mt-3 max-w-2xl text-black/70">
        Upcoming show schedule and booth details. (We’ll update this as events confirm.)
      </p>

      <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
        <div className="text-sm font-semibold text-black/60">Featured Event</div>
        <div className="mt-2 text-xl font-extrabold">Calgary Expo</div>
        <div className="mt-1 text-sm text-black/70">
          April 23–26, 2026 • Stampede Park, Calgary
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-brandPink/10 p-4">
            <div className="text-sm font-bold">What to expect</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/70">
              <li>Anime figures in multiple price tiers</li>
              <li>Bundles and show specials</li>
              <li>Cash & card accepted</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-black/5 p-4">
            <div className="text-sm font-bold">Booth number</div>
            <div className="mt-2 text-sm text-black/70">
              Coming soon — we’ll post the booth number when assigned.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-black/60">
        Want us at your event? Email <span className="font-semibold">hello@chusickitoys.com</span>.
      </div>
    </div>
  );
}
