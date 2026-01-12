import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/conventions", label: "Conventions" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brandPink text-white font-bold shadow-soft">
            CT
          </span>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight">Chusicki Toys</div>
            <div className="text-xs text-black/60">Anime Figures • Event Pop-Up Shop</div>
          </div>
        </Link>

        <nav className="hidden gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-black/80 hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="#cta"
          className="rounded-xl bg-brandBlack px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Find Us
        </a>
      </div>
    </header>
  );
}
