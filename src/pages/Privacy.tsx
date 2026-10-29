import { PageHero, useSeo } from "@/components/ui";

const blocks = [
  [
    "Información que se recopila",
    "Este sitio no almacena datos personales. El formulario «Solicitar información» únicamente prepara un mensaje que la persona decide enviar por WhatsApp desde su propio dispositivo.",
  ],
  [
    "Información clínica",
    "Recomendamos no compartir información clínica o sensible por medios digitales. Los detalles de cada caso se conversan directamente en la consulta.",
  ],
  [
    "Servicios de terceros",
    "El sitio enlaza a WhatsApp y Google Maps, y carga tipografías e imágenes desde servicios externos. Su uso se rige por las políticas de privacidad de cada proveedor.",
  ],
  [
    "Tratamiento de datos",
    "[Editable] El texto definitivo del aviso de privacidad, conforme a la Ley 1581 de 2012 de protección de datos personales en Colombia, se redactará y validará con el profesional antes de la publicación.",
  ],
];

export default function Privacy() {
  useSeo("Aviso de privacidad | Dr. Ricardo López Pérez");
  return (
    <>
      <PageHero eyebrow="Legal" title="Aviso de privacidad" intro="Versión preliminar para la propuesta de renovación digital." />
      <section className="pb-24">
        <div className="container max-w-3xl divide-y divide-petrol/10 border-y border-petrol/10">
          {blocks.map(([t, d]) => (
            <div key={t} className="py-8">
              <h2 className="text-2xl">{t}</h2>
              <p className="mt-3 leading-relaxed text-slate">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
