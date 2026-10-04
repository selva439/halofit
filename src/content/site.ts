// Content lives in site.json so the team can edit it (and upload photos) at /admin.
// Field definitions for that editor are in public/admin/config.yml — keep both in sync.
import data from "./site.json";

type Image = string; // "/images/uploads/…" or "" when not set

export type Site = {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    mapsUrl: string;
    instagram: string;
  };
  hours: { days: string; time: string }[];
  hero: { eyebrow: string; headline: string[]; sub: string; image?: Image };
  stats: { value: string; label: string }[];
  programs: { title: string; body: string; icon: string; image?: Image }[];
  about: {
    heading: string;
    body: string;
    image?: Image;
    pillars: { title: string; body: string }[];
  };
  whyUs: { title: string; body: string }[];
  plans: { name: string; price: string; period: string; features: string[]; featured?: boolean }[];
  testimonials: { name: string; quote: string; result?: string }[];
  gallery: { image: Image; caption?: string }[];
  faqs: { q: string; a: string }[];
};

export const site: Site = data;
