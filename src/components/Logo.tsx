export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <ellipse cx="20" cy="9" rx="13" ry="4" fill="none" stroke="#F5B700" strokeWidth="2.5" />
        <path
          d="M11 18h4v4h10v-4h4v14h-4v-6H15v6h-4z"
          fill="currentColor"
        />
      </svg>
      <span className="font-display text-2xl uppercase tracking-wide leading-none">
        Halo<span className="text-halo">Fit</span>
      </span>
    </span>
  );
}
