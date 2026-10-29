import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { DoctorPortrait, Eyebrow, PageHero, Reveal, useSeo } from "@/components/ui";
import { CtaBand } from "@/components/sections";

const experience = [
  "Estrés laboral",
  "Sofrología educativa",
  "Problemas de aprendizaje",
  "Consultoría individual",
  "Entrenamiento deportivo",
  "Capacitación empresarial",
  "Conferencista",
  "Docente universitario",
];

const leadership = [
  ["Profesionales de la salud", "Ha dirigido seminarios sobre la aplicación de la hipnosis clínica y la sofrología para profesionales de la salud."],
  ["Docentes universitarios", "Entrenamiento sofropedagógico dirigido a docentes universitarios."],
  ["Sector financiero", "Aplicación de la sofrología de la productividad y el manejo del estrés con ejecutivos bancarios."],
  ["Medios de comunicación", "Ha conducido programas radiales de promoción en salud y desarrollo humano."],
];

const workshops = [
  "Proyección positiva hacia el éxito empresarial",
  "Desarrollo humano integral",
  "Sofrología en el deporte",
  "Entrenamiento sofrológico de la memoria",
  "Manejo de las emociones y el perdón",
  "Temor a hablar en público",
  "Dejar de fumar con hipnosis",
  "Relajación dinámica",
  "Relaciones humanas",
];

export default function About() {
  useSeo(
    "Sobre el Dr. Ricardo López Pérez | Sofrólogo e hipnoterapeuta en Bogotá",
    "Dr. Ricardo López Pérez, sofrólogo hipnoterapeuta egresado de la F.E.I.S. y especializado en hipnosis clínica en la Universidad Javeriana. Más de 30 años de experiencia en Bogotá.",
  );
  return (
    <>
      <PageHero
        eyebrow="Sobre mí"
        title={
          <>
            Dr. Ricardo <em className="text-champagne-dark">López Pérez</em>
          </>
        }
        intro="Sofrólogo hipnoterapeuta con más de 30 años de experiencia en la aplicación terapéutica de métodos y técnicas propias de la sofrología y de la hipnosis clínica."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <DoctorPortrait className="aspect-[4/5] w-full" />
              <dl className="mt-6 grid grid-cols-3 border-y border-petrol/10 py-5 text-center">
                {[
                  ["+30", "años de experiencia"],
                  ["F.E.I.S.", "Sofrología"],
                  ["Javeriana", "Hipnosis clínica"],
                ].map(([k, v], i) => (
                  <div key={k} className={i ? "border-l border-petrol/10" : ""}>
                    <dt className="font-serif text-2xl text-petrol">{k}</dt>
                    <dd className="mt-1 px-1 text-[0.68rem] text-slate sm:text-xs">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="space-y-16 lg:col-span-7">
            <Reveal>
              <Eyebrow>Biografía</Eyebrow>
              <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-slate">
                <p className="font-serif text-[1.65rem] leading-snug text-petrol sm:text-3xl">
                  Sofrólogo hipnoterapeuta, egresado de la Fundación Escuela Internacional de Sofrología (F.E.I.S.) y especializado en
                  hipnosis clínica en la Universidad Javeriana.
                </p>
                <p>
                  Su experiencia abarca el estrés laboral, la sofrología educativa, los problemas de aprendizaje, la consultoría
                  individual, el entrenamiento deportivo y la capacitación empresarial, además de su labor como conferencista y docente
                  universitario.
                </p>
                <p>
                  Ha dirigido seminarios sobre la aplicación de la hipnosis clínica y la sofrología a profesionales de la salud,
                  entrenamiento sofropedagógico a docentes universitarios y programas de sofrología de la productividad y manejo del
                  estrés para ejecutivos bancarios. También ha conducido programas radiales de promoción en salud y desarrollo humano.
                </p>
                <p>
                  Cuenta con más de 30 años de experiencia en la aplicación terapéutica de métodos y técnicas propias de la sofrología y
                  de la hipnosis clínica.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <Eyebrow>Formación</Eyebrow>
              <ul className="mt-6 divide-y divide-petrol/10 border-y border-petrol/10">
                <li className="grid gap-1 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                  <p className="font-serif text-2xl">Fundación Escuela Internacional de Sofrología (F.E.I.S.)</p>
                  <p className="text-sm text-slate">Egresado · Sofrología</p>
                </li>
                <li className="grid gap-1 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                  <p className="font-serif text-2xl">Universidad Javeriana</p>
                  <p className="text-sm text-slate">Especialización en hipnosis clínica</p>
                </li>
              </ul>
            </Reveal>

            <Reveal>
              <Eyebrow>Áreas de experiencia</Eyebrow>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {experience.map((e) => (
                  <li key={e} className="rounded-full border border-petrol/15 bg-white px-4 py-2 text-sm text-petrol">
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <Eyebrow>Seminarios, docencia y divulgación</Eyebrow>
              <div className="mt-6 grid gap-px overflow-hidden border border-petrol/10 bg-petrol/10 sm:grid-cols-2">
                {leadership.map(([t, d]) => (
                  <div key={t} className="bg-ivory p-6">
                    <p className="font-serif text-xl">{t}</p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <Eyebrow>Cursos y talleres de capacitación laboral</Eyebrow>
              <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                {workshops.map((w) => (
                  <li key={w} className="flex gap-3 border-b border-petrol/10 py-3 text-[0.95rem] text-petrol">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-champagne" /> {w}
                  </li>
                ))}
              </ul>
              <Link to="/cursos" className="link-arrow group mt-6">
                Ver cursos y formación
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            <Reveal>
              <blockquote className="border-l-2 border-champagne pl-6 font-serif text-[1.7rem] italic leading-snug text-petrol sm:text-3xl">
                Un enfoque basado en el autoconocimiento, la relajación y el desarrollo de los propios recursos de cada persona.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="¿Quieres conocer si este enfoque es adecuado para ti?"
        text="Escribe al consultorio para recibir información sobre las terapias y la disponibilidad de citas."
        href={site.whatsapp.general}
        label="Escribir por WhatsApp"
      />
    </>
  );
}
