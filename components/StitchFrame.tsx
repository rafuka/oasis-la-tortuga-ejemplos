import Link from "next/link";

type StitchFrameProps = {
  src: string;
  title: string;
};

export function StitchFrame({ src, title }: StitchFrameProps) {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#f8f9fa]">
      <Link
        href="/#ejemplos"
        className="absolute left-4 bottom-4 z-10 rounded-full border border-[#bbc9c7]/80 bg-white/95 px-4 py-2 text-sm font-medium text-[#191c1d] shadow-sm backdrop-blur-md transition hover:border-[#006a64]/40 hover:text-[#006a64]"
      >
        ← Volver a ejemplos
      </Link>
      <iframe
        title={title}
        src={src}
        className="h-full w-full border-0"
        allow="fullscreen"
      />
    </div>
  );
}
