export const metadata = { title: "Contact | Chusicki Toys" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <p className="mt-3 max-w-2xl text-black/70">
        For event inquiries, booth questions, or wholesale/vendor coordination.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="font-bold">Email</div>
          <p className="mt-2 text-sm text-black/70">
            hello@chusickitoys.com <span className="text-xs text-black/50">(replace when ready)</span>
          </p>
          <a
            className="mt-4 inline-flex rounded-2xl bg-brandBlack px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            href="mailto:hello@chusickitoys.com?subject=Chusicki%20Toys%20Inquiry"
          >
            Email Us
          </a>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="font-bold">Social</div>
          <p className="mt-2 text-sm text-black/70">
            Instagram: @chusickitoys <span className="text-xs text-black/50">(set this up when ready)</span>
          </p>
          <div className="mt-4 rounded-2xl bg-brandPink/10 p-4 text-sm text-black/70">
            Tip: put your Vercel site URL + Instagram handle on your booth signage and business cards.
          </div>
        </div>
      </div>
    </div>
  );
}
