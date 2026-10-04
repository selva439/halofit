import { site } from "@/content/site";

export function Faq() {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {site.faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
            {f.q}
            <span className="text-2xl text-halo transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-white/60">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
