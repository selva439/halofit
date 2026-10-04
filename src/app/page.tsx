import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";

const waLink = `https://wa.me/${site.contact.whatsapp}`;
const telLink = `tel:${site.contact.phone.replace(/\s/g, "")}`;

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20">
          {site.hero.image && (
            <>
              <img src={site.hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
            </>
          )}
          <div className="halo-glow absolute inset-0" />
          {!site.hero.image && <div className="grid-lines absolute inset-0" />}
          <div className="container-x relative">
            <p className="eyebrow">{site.hero.eyebrow}</p>
            <h1 className="mt-5 font-display text-6xl uppercase leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl">
              {site.hero.headline[0]}
              <br />
              <span className="text-halo">{site.hero.headline[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">{site.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Book a Free Trial <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href="#membership" className="btn-ghost">
                View Plans
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        {site.stats.length > 0 && (
          <section className="border-y border-white/10 bg-ink-800">
            <div className="container-x grid grid-cols-2 gap-px md:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label} className="py-10 text-center">
                  <div className="font-display text-4xl text-halo md:text-5xl">{s.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Programs */}
        <section id="programs" className="section">
          <div className="container-x">
            <SectionHeading
              eyebrow="Programs"
              title="Push your limits"
              sub="Training programs designed around your goals — guided by coaches who care about your progress."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {site.programs.map((p) => (
                <article
                  key={p.title}
                  className="card group overflow-hidden transition hover:-translate-y-1 hover:border-halo/50"
                >
                  {p.image ? (
                    <img src={p.image} alt={p.title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                  ) : (
                    <div className="px-8 pt-8">
                      <div className="inline-flex rounded-xl bg-halo/10 p-3 text-halo">
                        <Icon name={p.icon} className="h-7 w-7" />
                      </div>
                    </div>
                  )}
                  <div className="p-8 pt-6">
                    <h3 className="font-display text-2xl uppercase">{p.title}</h3>
                    <p className="mt-2 text-white/60">{p.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section bg-ink-800">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-600 to-ink">
              {site.about.image ? (
                <img src={site.about.image} alt="Inside Halo Fit" loading="lazy" className="h-full w-full object-cover" />
              ) : (
                <>
                  <div className="halo-glow absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Logo className="scale-150 opacity-80" />
                  </div>
                </>
              )}
            </div>
            <div>
              <p className="eyebrow">About Halo Fit</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">{site.about.heading}</h2>
              <p className="mt-6 text-lg text-white/70">{site.about.body}</p>
              <div className="mt-10 space-y-6">
                {site.about.pillars.map((p) => (
                  <div key={p.title} className="border-l-2 border-halo pl-5">
                    <h3 className="font-display text-xl uppercase">{p.title}</h3>
                    <p className="mt-1 text-white/60">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="section">
          <div className="container-x">
            <SectionHeading eyebrow="Why Halo Fit" title="Why choose us?" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {site.whyUs.map((w, i) => (
                <div key={w.title} className="card p-8">
                  <div className="font-display text-5xl text-halo/30">0{i + 1}</div>
                  <h3 className="mt-4 font-display text-xl uppercase">{w.title}</h3>
                  <p className="mt-2 text-white/60">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery — hidden until photos are uploaded at /admin */}
        {site.gallery.length > 0 && (
          <section id="gallery" className="section">
            <div className="container-x">
              <SectionHeading eyebrow="Gallery" title="Inside Halo Fit" />
              <div className="columns-2 gap-4 md:columns-3 [&>figure]:mb-4">
                {site.gallery.map((g) => (
                  <figure key={g.image} className="relative break-inside-avoid overflow-hidden rounded-2xl border border-white/10">
                    <img src={g.image} alt={g.caption || "Halo Fit gym"} loading="lazy" className="w-full" />
                    {g.caption && (
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-10 text-sm font-medium">
                        {g.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Membership */}
        <section id="membership" className="section bg-ink-800">
          <div className="container-x">
            <SectionHeading
              eyebrow="Membership"
              title="Pick your plan"
              sub="Simple pricing, no hidden fees. Every plan starts with a free fitness assessment."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {site.plans.map((p) => (
                <div
                  key={p.name}
                  className={`card relative flex flex-col p-8 ${p.featured ? "border-halo ring-1 ring-halo lg:-my-4 lg:py-12" : ""}`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-halo px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-5xl">{p.price}</span>
                    <span className="text-white/50">{p.period}</span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-white/80">
                        <Icon name="check" className="h-5 w-5 shrink-0 text-halo" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`mt-8 justify-center ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                    Get started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials — hidden until real reviews are added */}
        {site.testimonials.length > 0 && (
          <section className="section">
            <div className="container-x">
              <SectionHeading eyebrow="Testimonials" title="Real stories, real results" />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {site.testimonials.map((t) => (
                  <figure key={t.name} className="card p-8">
                    <blockquote className="text-white/80">“{t.quote}”</blockquote>
                    <figcaption className="mt-6">
                      <div className="font-semibold">{t.name}</div>
                      {t.result && <div className="text-sm text-halo">{t.result}</div>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA banner */}
        <section className="relative overflow-hidden bg-halo text-ink">
          <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
            <h2 className="font-display text-4xl uppercase leading-none md:text-5xl">
              Let&apos;s start your body goal with us
            </h2>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-ink-700">
              Join membership <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container-x max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <Faq />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section bg-ink-800">
          <div className="container-x grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Contact"
                title="Visit us"
                sub="Drop in for a tour, call us, or send a message — your first session is on us."
              />
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Icon name="pin" className="h-6 w-6 shrink-0 text-halo" />
                  <a href={site.contact.mapsUrl} target="_blank" rel="noopener" className="hover:text-halo">
                    {site.contact.address}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Icon name="phone" className="h-6 w-6 shrink-0 text-halo" />
                  <a href={telLink} className="hover:text-halo">
                    {site.contact.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Icon name="mail" className="h-6 w-6 shrink-0 text-halo" />
                  <a href={`mailto:${site.contact.email}`} className="hover:text-halo">
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Icon name="clock" className="h-6 w-6 shrink-0 text-halo" />
                  <div>
                    {site.hours.map((h) => (
                      <div key={h.days}>
                        <span className="text-white/60">{h.days}:</span> {h.time}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <Logo />
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a href={site.contact.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="text-white/60 hover:text-halo">
            <Icon name="instagram" />
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.2-.7-2.7-1.1-4.4-3.8-4.5-4-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
        </svg>
      </a>
    </>
  );
}
