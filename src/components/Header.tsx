"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { site } from "@/content/site";

const nav = [
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  ...(site.gallery.length > 0 ? [{ href: "#gallery", label: "Gallery" }] : []),
  { href: "#membership", label: "Membership" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-ink/95 backdrop-blur border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" aria-label="Halo Fit home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium uppercase tracking-wider text-white/80 hover:text-halo">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2.5">
            Join Now
          </a>
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/5 bg-ink">
          <div className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-medium uppercase tracking-wider text-white/90"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">
              Join Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
