import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis La Tortuga — Stitch examples",
  description:
    "Sample landing pages exported from the Oasis La Tortuga Stitch project.",
};

const examples = [
  {
    href: "/examples/dream-refuge",
    title: "Dream Refuge Landing",
    subtitle: "Luxury island escape",
    detail:
      "Full desktop layout from Stitch: hero, amenities, and booking cues with the project teal palette.",
  },
  {
    href: "/examples/oasis",
    title: "Oasis Landing Page",
    subtitle: "Primary resort story",
    detail:
      "Alternate landing treatment from the same Stitch project — typography and Material symbols match the source screens.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-[#f8f9fa] text-[#191c1d]">
      <main className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-16 sm:py-24">
        <header className="space-y-3">
          <p className="text-sm font-medium tracking-wide text-[#006a64]">
            Stitch project
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#191c1d] sm:text-5xl [font-family:var(--font-noto-serif)]">
            Oasis La Tortuga
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-[#3c4947]">
            Two landing-page examples, rendered from the exported HTML in your
            Stitch project so they stay pixel-true to the designs.
          </p>
        </header>

        <ul className="flex flex-col gap-4">
          {examples.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block rounded-xl border border-[#e1e3e4] bg-white p-6 shadow-sm transition hover:border-[#006a64]/35 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-[#191c1d] group-hover:text-[#006a64] [font-family:var(--font-noto-serif)]">
                      {item.title}
                    </h2>
                    <p className="text-sm font-medium text-[#725a39]">
                      {item.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed text-[#3c4947]">
                      {item.detail}
                    </p>
                  </div>
                  <span
                    className="shrink-0 text-sm font-semibold text-[#006a64] opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  >
                    Open →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
