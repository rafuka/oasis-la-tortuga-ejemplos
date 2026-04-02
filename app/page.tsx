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
    title: "Ejemplo Pagina Web 1",
    subtitle: "",
    detail:
      "",
  },
  {
    href: "/examples/oasis",
    title: "Ejemplo Pagina Web 2",
    subtitle: "",
    detail:
      "",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-[#f8f9fa] text-[#191c1d]">
      <main className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-16 sm:py-24">
        <header className="space-y-3">
          <h1 className="text-5xl mb-12 tracking-tight text-[#191c1d] [font-family:var(--font-noto-serif)]">
            Propuesta para infraestructura digital y estrategia de ventas para la posada Oasis La Tortuga
          </h1>
          <h2 className="text-3xl [font-family:var(--font-noto-serif)]">Situaci&oacute;n actual</h2>
          <p className="max-w-lg text-lg leading-relaxed text-[#3c4947] mb-12">
            La posada Oasis La Tortuga no tiene una infraestructura digital robusta. El sitio web esta desactualizado, no tiene un sistema centralizado de reservas y booking online. Tiene una pagina de Instagram con contenido pero no es optimizada para SEO y no tiene un sistema de marketing digital robusto.
          </p>
          <h2 className="text-3xl [font-family:var(--font-noto-serif)]">Propuesta</h2>
          <p className="max-w-lg text-lg leading-relaxed text-[#3c4947] mb-12">
            Hay mucho potencial para crecimiento. En esencia, nosotros nos encargar&iacute;amos de optimizar los canales digitales para generar reservas, sin que ustedes tengan que preocuparse al respecto. Proponemos crear un sitio web moderno, optimizado para SEO y dispositivos m&oacute;viles, con un sistema centralizado de reservas y booking online, as&iacute; como optimizaci&oacute;n de la p&aacute;gina de Instagram. Trazamos una estrategia de marketing digital y creaci&oacute;n de contenido que establezca la marca e identidad de la posada de manera consistente, y que &uacute;ltimamente atraiga a m&aacute;s clientes, aumente las ganancias, y establezca un sentido robusto de la marca.
          </p>
          <h2 className="text-3xl [font-family:var(--font-noto-serif)]">Nuestra oferta</h2>
          <p className="max-w-lg text-lg leading-relaxed text-[#3c4947] mb-2">
            Creamos la infraestructura digital:
          </p>
          <ul className="mt-4 list-disc list-inside mb-4 text-[#3c4947] text-lg">
            <li>P&aacute;gina web optimizada para SEO y dispositivos m&oacute;viles</li>
            <li>Optimizaci&oacute;n de la p&aacute;gina de Instagram</li>
            <li>Sistema de reservas y booking online</li>
            <li>Sistema y estrategia para gesti&oacute;n y atenci&oacute;n de clientes</li>
            <li>Estrategia para creaci&oacute;n de contenido para redes sociales consistente con la marca</li>
          </ul>
          <p className="max-w-lg text-lg leading-relaxed text-[#3c4947] mb-12">

            <span className="font-bold italic">Sin pago inicial</span>. Una vez que desmostremos resultados positivos, pasamos a negociar una mensualidad para la ejecuci&oacute;n de la estrategia de marketing y contenido para social media, as&iacute; como el mantenimiento y optimizaci&oacute;n constante de la infraestructura digital. En caso de que no est&eacute;n satisfechos con nuestros servicios, cancelamos el servicio y no cobramos nada.
          </p>
          <br/>
          <p>A continuaci&oacute;n te mostramos un par de ejemplos de landing pages que creamos para la posada Oasis La Tortuga, para que te des una idea de la calidad de nuestro trabajo. Ten en cuenta que el resultado final ser&iacute;a incluso mejor, ya que puliriamos el dise&ntilde;o y el mensaje para que represente a la posada Oasis la Tortuga lo mejor posible</p>
        </header>

        <ul id="ejemplos" className="flex flex-col gap-4">
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
                    className="shrink-0 text-sm font-semibold text-[#006a64]"
                    aria-hidden
                  >
                    Click para visitar la pagina →
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
