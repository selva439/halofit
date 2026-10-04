"use client";

import { FormEvent } from "react";
import { site } from "@/content/site";

// No backend: the form composes a WhatsApp message to the gym's number.
export function EnquiryForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      `Hi Halo Fit, I'd like to enquire about membership.`,
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Interested in: ${f.get("goal")}`,
      f.get("message") ? `Message: ${f.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 md:p-8">
      <h3 className="font-display text-2xl uppercase">Book a free trial</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="label">Name</span>
          <input name="name" required className="input" autoComplete="name" />
        </label>
        <label className="block">
          <span className="label">Phone</span>
          <input name="phone" type="tel" required className="input" autoComplete="tel" />
        </label>
      </div>
      <label className="block">
        <span className="label">Interested in</span>
        <select name="goal" className="input" defaultValue={site.programs[0].title}>
          {site.programs.map((p) => (
            <option key={p.title}>{p.title}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="label">Message (optional)</span>
        <textarea name="message" rows={3} className="input resize-none" />
      </label>
      <button type="submit" className="btn-primary w-full justify-center">
        Send on WhatsApp
      </button>
    </form>
  );
}
