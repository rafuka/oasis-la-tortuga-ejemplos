import type { Metadata } from "next";
import { StitchFrame } from "@/components/StitchFrame";

export const metadata: Metadata = {
  title: "Dream Refuge Landing | Oasis La Tortuga",
  description:
    "Luxury island escape — Stitch design export for Oasis La Tortuga.",
};

export default function DreamRefugePage() {
  return (
    <StitchFrame
      src="/stitch/dream-refuge.html"
      title="Oasis La Tortuga — Dream Refuge Landing"
    />
  );
}
