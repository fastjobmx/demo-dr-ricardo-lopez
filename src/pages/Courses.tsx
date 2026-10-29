import { courseGroups, site } from "@/data/site";
import { Eyebrow, ExtLink, Img, PageHero, Reveal, WhatsAppIcon, useSeo } from "@/components/ui";
import { CtaBand } from "@/components/sections";

export default function Courses() {
  useSeo(
    "Cursos de sofrología e hipnosis clínica en Bogotá | Dr. Ricardo López Pérez",
    "Seminarios para profesionales de la salud, talleres de relajación y programas de desarrollo personal y capacitación empresarial.",
  );
  return (
    <>
      <PageHero
        eyebrow="Cursos y formación"
        title={
          <>
            Formación, talleres y <em className="text-champagne-dark">desarrollo profesional.</em>
          </>
        }
        intro="Programas dirigidos a profesionales de la salud, a personas interesadas en su bienestar y a organizaciones. Las fechas, modalidades y condiciones de cada programa se informan directamente por el consultorio."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container space-y-6">
          {courseGroups.map((c, i) => (
            <Reveal as="article" key={c.id} delay={0.05} className="grid overflow-hidden border border-petrol/10 bg-white lg:grid-cols-12">
              <div className={`relative aspect-[16/10] lg:col-span-5 lg:aspect-auto ${i % 2 ? "lg:order-2" : ""}`}>
                <Img src={c.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-7 sm:p-10 lg:col-span-7 lg:p-14">
                <Eyebrow>{c.audience}</Eyebrow>
                <h2 className="mt-5 font-serif text-[2rem] leading-tight sm:text-[2.6rem]">{c.title}</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-slate">{c.summary}</p>
                <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-3 border-b border-petrol/10 py-3 text-[0.95rem] text-petrol">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-champagne" /> {it}
                    </li>
                  ))}
                </ul>
                <ExtLink href={site.whatsapp.custom(c.wa)} className="btn-primary mt-9">
                  <WhatsAppIcon /> Solicitar información
                </ExtLink>
              </div>
            </Reveal>
          ))}
          <p className="pt-4 text-xs text-slate/80">
            Programas publicados en el sitio actual del profesional. [Editable] Próximas fechas, duración, modalidad e inversión se
            confirmarán con el consultorio.
          </p>
        </div>
      </section>

      <CtaBand
        title="¿Buscas una capacitación para tu equipo o institución?"
        text="Solicita información sobre programas de manejo del estrés, aprendizaje y desarrollo humano para organizaciones."
        href={site.whatsapp.cursos}
        label="Solicitar información"
      />
    </>
  );
}
