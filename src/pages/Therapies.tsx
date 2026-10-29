import { therapies, site } from "@/data/site";
import { Eyebrow, ExtLink, Img, PageHero, Reveal, WhatsAppIcon, useSeo } from "@/components/ui";
import { CtaBand } from "@/components/sections";

export default function Therapies() {
  useSeo(
    "Terapias y áreas de atención | Sofrología e hipnosis clínica en Bogotá",
    "Manejo del estrés, dificultades del sueño, fobias, temor a hablar en público, apoyo para dejar de fumar y más. Áreas de consulta evaluadas de forma individual.",
  );
  return (
    <>
      <PageHero
        eyebrow="Terapias"
        title={
          <>
            Áreas de atención, <em className="text-champagne-dark">con una mirada individual.</em>
          </>
        }
        intro="Estas son las áreas en las que el consultorio ofrece orientación mediante sofrología e hipnosis clínica. Cada caso se valora de manera individual y no se garantizan resultados específicos."
      />

      <nav aria-label="Áreas de atención" className="sticky top-[68px] z-30 border-y border-petrol/10 bg-ivory/90 backdrop-blur-xl">
        <ul className="container flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {therapies.map((t) => (
            <li key={t.id} className="shrink-0">
              <a
                href={`#${t.id}`}
                className="block rounded-full border border-petrol/15 px-4 py-2 text-xs text-petrol transition hover:border-petrol hover:bg-petrol hover:text-ivory"
              >
                {t.n} · {t.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="py-16 sm:py-24">
        <div className="container space-y-20 sm:space-y-28">
          {therapies.map((t, i) => (
            <article id={t.id} key={t.id} aria-labelledby={`${t.id}-t`} className="grid items-center gap-10 [scroll-margin-top:9rem] lg:grid-cols-12 lg:gap-16">
              <Reveal className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden lg:aspect-[5/6]">
                  <Img src={t.image.replace("w=900", "w=1100")} alt="" className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1" : "lg:col-start-7"}`}>
                <Reveal>
                  <Eyebrow>Área {t.n}</Eyebrow>
                  <h2 id={`${t.id}-t`} className="mt-5 font-serif text-[2.2rem] leading-tight sm:text-5xl">
                    {t.title}
                  </h2>
                  <p className="lead mt-6">{t.short}</p>
                  {t.detail.map((p) => (
                    <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-slate">
                      {p}
                    </p>
                  ))}
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {t.topics.map((x) => (
                      <li key={x} className="rounded-full bg-sand px-3.5 py-1.5 text-xs text-petrol">
                        {x}
                      </li>
                    ))}
                  </ul>
                  <ExtLink href={site.whatsapp.custom(`Hola, quisiera información sobre: ${t.title.toLowerCase()}.`)} className="btn-ghost mt-9">
                    <WhatsAppIcon /> Consultar sobre esta área
                  </ExtLink>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Cada proceso comienza con una conversación."
        text="Cuéntale al consultorio tu motivo de consulta de forma general y recibe orientación sobre los siguientes pasos."
        href={site.whatsapp.general}
        label="Solicitar información"
      />
    </>
  );
}
