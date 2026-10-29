import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { images, site } from "@/data/site";
import { Eyebrow, ExtLink, Img, PageHero, Reveal, WhatsAppIcon, useSeo } from "@/components/ui";
import { CtaBand } from "@/components/sections";

const practices = [
  ["Relajación dinámica", "Ejercicios que combinan movimiento suave, respiración y atención al cuerpo para favorecer un estado de calma activa."],
  ["Respiración consciente", "Aprender a observar y regular la respiración como un recurso cotidiano para la serenidad."],
  ["Visualización", "Trabajo con imágenes y pensamientos positivos orientado al desarrollo de recursos personales."],
  ["Percepción corporal", "Atención consciente a las sensaciones agradables del cuerpo como vía de autoconocimiento."],
];

const applications = [
  "Manejo del estrés",
  "Sofrología educativa y aprendizaje",
  "Preparación del parto",
  "Entrenamiento deportivo",
  "Productividad y bienestar laboral",
  "Desarrollo humano integral",
];

export default function Sophrology() {
  useSeo(
    "Sofrología en Bogotá | Dr. Ricardo López Pérez",
    "Qué es la sofrología: relajación dinámica, respiración consciente y autoconocimiento. Enfoque del Dr. Ricardo López Pérez en Bogotá.",
  );
  return (
    <>
      <PageHero
        eyebrow="Sofrología"
        title={
          <>
            Conciencia, relajación y <em className="text-champagne-dark">bienestar.</em>
          </>
        }
        intro="La sofrología se describe como una filosofía humanista basada en el autoconocimiento y en la transformación positiva del ser humano. Investiga las posibilidades de estimular la armonía de la persona en sus planos físico, mental y espiritual."
        image={images.sofrologia}
        imageAlt="Imagen conceptual: persona en calma frente a un lago entre montañas"
      />

      <section className="bg-petrol py-20 text-ivory sm:py-24">
        <div className="container">
          <Reveal>
            <Eyebrow light>El origen de la palabra</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-px bg-ivory/10 sm:grid-cols-3">
            {[
              ["Sos", "Serenidad"],
              ["Phren", "Mente, conciencia"],
              ["Logos", "Estudio"],
            ].map(([g, s], i) => (
              <Reveal key={g} delay={i * 0.08} className="bg-petrol py-8 sm:px-8">
                <p className="font-serif text-6xl italic text-champagne">{g}</p>
                <p className="mt-3 text-ivory/70">{s}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl font-serif text-2xl leading-snug text-ivory/90 sm:text-3xl">
              El estudio de la conciencia en serenidad: una práctica para conocerse y desarrollar los propios recursos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Método</Eyebrow>
              <h2 className="h2 mt-6">Las prácticas</h2>
              <p className="mt-6 text-slate">Técnicas descritas en el enfoque publicado por el Dr. Ricardo López Pérez.</p>
            </Reveal>
          </div>
          <div className="grid gap-px overflow-hidden border border-petrol/10 bg-petrol/10 sm:grid-cols-2 lg:col-span-8">
            {practices.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06} className="bg-ivory p-7 sm:p-9">
                <span className="font-serif text-lg text-champagne-dark">0{i + 1}</span>
                <h3 className="mt-3 text-2xl">{t}</h3>
                <p className="mt-3 leading-relaxed text-slate">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-light py-20 sm:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden">
              <Img src={images.u("1545205597-3d9d02c29597", 1100)} alt="Imagen conceptual: grupo practicando ejercicios de relajación al aire libre" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow>Aplicaciones</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">Ámbitos en los que se aplica</h2>
              <ul className="mt-8 divide-y divide-petrol/10 border-y border-petrol/10">
                {applications.map((a) => (
                  <li key={a} className="flex items-center justify-between py-4 text-lg">
                    {a} <span className="h-px w-6 bg-champagne" />
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ExtLink href={site.whatsapp.sofrologia} className="btn-primary">
                  <WhatsAppIcon /> Consultar sobre sofrología
                </ExtLink>
                <Link to="/hipnosis-clinica" className="btn-ghost">
                  Hipnosis clínica <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Descubre la sofrología en una primera conversación."
        text="El consultorio puede orientarte sobre cómo se aplican estas prácticas a tu situación."
        href={site.whatsapp.sofrologia}
        label="Escribir por WhatsApp"
      />
    </>
  );
}
