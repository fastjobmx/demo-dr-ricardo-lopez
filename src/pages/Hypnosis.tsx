import { ShieldCheck } from "lucide-react";
import { images, site } from "@/data/site";
import { Eyebrow, ExtLink, PageHero, Reveal, WhatsAppIcon, useSeo } from "@/components/ui";
import { CtaBand } from "@/components/sections";

const myths = [
  ["¿Me quedaré dormido?", "No. La persona no se encuentra dormida: experimenta un estado especial de conciencia en profunda relajación."],
  ["¿Pierdo el control?", "No. Según la descripción publicada por el profesional, la persona solo dice y hace lo que le permite su propia voluntad."],
  ["¿Es igual a la hipnosis de espectáculo?", "No. En el contexto clínico, la hipnosis se usa como una herramienta terapéutica dentro de un acompañamiento profesional."],
];

const questions = [
  "¿Cuál es la formación del profesional en hipnosis clínica?",
  "¿Es este enfoque adecuado para mi motivo de consulta?",
  "¿Cómo se complementa con un tratamiento médico o psicológico actual?",
  "¿Cómo se desarrollan las sesiones y cuántas podrían requerirse?",
  "¿Qué puedo esperar del proceso y qué no?",
];

export default function Hypnosis() {
  useSeo(
    "Hipnosis clínica en Bogotá | Dr. Ricardo López Pérez",
    "Qué es la hipnosis clínica, qué esperar y qué preguntar antes de asistir. Participación consciente y voluntaria. Consultorio en Bogotá.",
  );
  return (
    <>
      <PageHero
        eyebrow="Hipnosis clínica"
        title={
          <>
            Conoce el <em className="text-champagne-dark">proceso.</em>
          </>
        }
        intro="La hipnosis clínica es una técnica terapéutica que facilita un estado especial de conciencia en profunda relajación. Durante ese estado, la persona permanece consciente y participa de manera voluntaria."
        image={images.hipnosis}
        imageAlt="Imagen conceptual: sala cálida y tranquila con luz natural"
      />

      <section className="bg-petrol py-20 text-ivory sm:py-28">
        <div className="container">
          <Reveal>
            <Eyebrow light>Ideas frecuentes</Eyebrow>
            <h2 className="h2 mt-6 max-w-2xl">Lo que la hipnosis clínica es, y lo que no.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {myths.map(([q, a], i) => (
              <Reveal key={q} delay={i * 0.08} className="border-t border-champagne/40 pt-7">
                <h3 className="text-2xl">{q}</h3>
                <p className="mt-3 leading-relaxed text-ivory/70">{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Antes de asistir</Eyebrow>
            <h2 className="h2 mt-6">Preguntas que conviene hacer.</h2>
            <p className="mt-6 text-slate">
              Una consulta informada empieza por resolver dudas. Estas preguntas pueden ayudarte a conversar con cualquier profesional
              antes de iniciar un proceso.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-petrol/10 border-y border-petrol/10">
              {questions.map((q, i) => (
                <li key={q} className="flex gap-5 py-5 text-lg">
                  <span className="font-serif text-champagne-dark">0{i + 1}</span> {q}
                </li>
              ))}
            </ol>
            <div className="mt-10 flex gap-4 bg-sand-light p-6 text-sm leading-relaxed text-slate">
              <ShieldCheck className="h-5 w-5 shrink-0 text-champagne-dark" />
              <p>
                <strong className="font-medium text-petrol">Consentimiento y participación consciente.</strong> Toda sesión requiere el
                consentimiento informado de la persona. La hipnosis clínica no reemplaza la atención médica o psicológica cuando esta es
                necesaria, y sus resultados varían en cada caso. [Editable] La descripción detallada de una sesión se incorporará cuando sea
                validada por el profesional.
              </p>
            </div>
            <ExtLink href={site.whatsapp.hipnosis} className="btn-primary mt-9">
              <WhatsAppIcon /> Consultar sobre hipnosis clínica
            </ExtLink>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Resuelve tus dudas antes de dar el primer paso."
        text="Escribe al consultorio y recibe información sobre la hipnosis clínica y la disponibilidad de citas."
        href={site.whatsapp.hipnosis}
        label="Escribir por WhatsApp"
      />
    </>
  );
}
