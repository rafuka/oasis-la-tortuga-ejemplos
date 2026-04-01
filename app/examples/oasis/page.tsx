import type { Metadata } from "next";
import { StitchFrame } from "@/components/StitchFrame";

export const metadata: Metadata = {
  title: "Oasis Landing Page | Oasis La Tortuga",
  description:
    "Primary resort landing — Stitch design export for Oasis La Tortuga.",
};

export default function OasisLandingPage() {
  return (
    <StitchFrame
      src="/stitch/oasis-landing.html"
      title="Oasis La Tortuga Landing Page"
    />
  );
}
