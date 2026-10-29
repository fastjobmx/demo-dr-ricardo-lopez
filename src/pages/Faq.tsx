import { faqs, site } from "@/data/site";
import { Accordion, ExtLink, PageHero, Reveal, WhatsAppIcon, useSeo } from "@/components/ui";
import { ContactSection } from "@/components/sections";

export default function Faq() {
  useSeo(
    "Preguntas frecuentes | Sofrología e hipnosis clínica en Bogotá",
    "Respuestas sobre sofrología, hipnosis clínica, cómo solicitar una consulta, ubicación del consultorio y cursos disponibles.",
  );
  return (
    <>
      <PageHero
        eyebrow="Preguntas frecuentes"
        title={
          <>
            Información clara <em className="text-champagne-dark">antes de comenzar.</em>
          </>
        }
        intro="Reunimos las preguntas más habituales sobre la sofrología, la hipnosis clínica y la atención en el consultorio."
      />
      <section className="pb-20 sm:pb-28">
        <div className="container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <Accordion items={faqs} />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="bg-petrol p-8 text-ivory lg:sticky lg:top-28">
              <p className="font-serif text-2xl leading-snug">¿No encuentras tu respuesta?</p>
              <p className="mt-3 text-sm text-ivory/70">El consultorio puede orientarte de manera directa.</p>
              <ExtLink href={site.whatsapp.general} className="btn-light mt-7 w-full">
                <WhatsAppIcon /> Escribir por WhatsApp
              </ExtLink>
            </div>
          </Reveal>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
