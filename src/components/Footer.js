import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-extrabold">Chusicki Toys</div>
            <p className="mt-2 text-sm text-black/70">
              Pop-up vendor selling authentic anime figures at Canadian conventions.
            </p>
          </div>

          <div>
            <div className="font-bold">Quick Links</div>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <Link className="text-black/70 hover:text-black" href="/catalog">Catalog</Link>
              <Link className="text-black/70 hover:text-black" href="/conventions">Conventions</Link>
              <Link className="text-black/70 hover:text-black" href="/contact">Contact</Link>
              <Link className="text-black/70 hover:text-black" href="/policies">Policies</Link>
            </div>
          </div>

          <div>
            <div className="font-bold">Contact</div>
            <p className="mt-2 text-sm text-black/70">
              Email: <span className="font-semibold">hello@chusickitoys.com</span> (replace later)
              <br />
              Instagram: <span className="font-semibold">@chusickitoys</span> (replace later)
            </p>
          </div>
        </div>

        <div className="mt-10 text-xs text-black/50">
          © {new Date().getFullYear()} Chusicki Toys. All product names are trademarks of their respective owners.
        </div>
      </div>
    </footer>
  );
}
