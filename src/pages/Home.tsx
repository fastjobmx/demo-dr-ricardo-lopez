import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, MapPin, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { courseGroups, faqs, images, site } from "@/data/site";
import { Accordion, ArrowLink, Eyebrow, ExtLink, Img, DoctorPortrait, Reveal, WhatsAppIcon, useSeo } from "@/components/ui";
import { ContactSection, TherapyGrid } from "@/components/sections";

const ease = [0.22, 1, 0.36, 1] as const;

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);

  const item = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: d, ease },
  });

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative pb-16 pt-24 sm:pt-36 lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] bg-sand-light lg:block" aria-hidden />
      <div className="container relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6">
          <motion.div {...item(0.1)}>
            <span className="inline-flex items-center gap-3 rounded-full border border-champagne/40 bg-white/60 px-4 py-2 text-[0.64rem] font-medium uppercase tracking-[0.14em] text-champagne-dark sm:text-[0.72rem] sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              {site.experience}
            </span>
          </motion.div>
          <motion.h1 id="hero-title" {...item(0.2)} className="display mt-7">
            Un espacio para <em className="font-normal text-champagne-dark">reconectar</em> con tu bienestar.
          </motion.h1>
          <motion.p {...item(0.32)} className="lead mt-7 max-w-[34rem]">
            Conoce el enfoque del Dr. Ricardo López Pérez en sofrología e hipnosis clínica, respaldado por una amplia trayectoria
            profesional en Bogotá.
          </motion.p>
          <motion.div {...item(0.44)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ExtLink href={site.whatsapp.general} className="btn-primary">
              <WhatsAppIcon /> Solicitar una consulta
            </ExtLink>
            <a href="#terapias" className="btn-ghost">
              Conocer las terapias <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.dl {...item(0.56)} className="mt-14 grid grid-cols-3 border-t border-petrol/15 pt-7">
            {[
              ["+30", "años de trayectoria"],
              ["F.E.I.S.", "Formación en sofrología"],
              ["Javeriana", "Hipnosis clínica"],
            ].map(([k, v], i) => (
              <div key={k} className={`pr-3 ${i ? "border-l border-petrol/10 pl-4 sm:pl-6" : ""}`}>
                <dt className="font-serif text-[1.55rem] leading-none text-petrol sm:text-3xl">{k}</dt>
                <dd className="mt-2 text-[0.72rem] leading-snug text-slate sm:text-xs">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-5 xl:col-start-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease }}
            className="relative"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-t-[180px] sm:aspect-[5/6] sm:rounded-t-[999px] lg:aspect-[4/5]">
              <motion.div style={{ y: imgY }} className="absolute inset-[-6%_0]">
                <Img
                  src={images.hero}
                  eager
                  alt="Imagen conceptual: espacio luminoso y sereno con una silla y una planta"
                  className="h-full w-full object-cover object-[50%_60%]"
                />
              </motion.div>
            </div>
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease }}
              className="absolute -bottom-6 left-4 flex items-center gap-4 border border-petrol/10 bg-ivory/95 px-5 py-4 shadow-[0_24px_50px_-28px_rgba(23,61,58,0.45)] backdrop-blur sm:-left-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-petrol text-champagne">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg">Centro Médico Palermo</span>
                <span className="text-xs text-slate">Consultorio 508 · Bogotá</span>
              </span>
            </motion.div>
            <span className="absolute -right-2 top-10 hidden origin-bottom-right -rotate-90 text-[0.6rem] uppercase tracking-[0.35em] text-slate/70 lg:block">
              Imagen conceptual
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Presentation() {
  return (
    <section aria-labelledby="sobre-title" className="py-20 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <DoctorPortrait className="aspect-[4/5] w-full" />
        </Reveal>
        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <Eyebrow>Sobre el profesional</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="sobre-title" className="h2 mt-6">
              Una trayectoria dedicada al <em className="text-champagne-dark">bienestar humano.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lead mt-7 max-w-2xl">
              El <strong className="font-medium text-petrol">Dr. Ricardo López Pérez</strong>, sofrólogo hipnoterapeuta, cuenta con
              más de 30 años de experiencia en la aplicación de métodos y técnicas propias de la sofrología y de la hipnosis clínica.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 grid gap-px overflow-hidden border border-petrol/10 bg-petrol/10 sm:grid-cols-2">
              {[
                ["Formación en sofrología", "Egresado de la Fundación Escuela Internacional de Sofrología (F.E.I.S.)."],
                ["Hipnosis clínica", "Especializado en hipnosis clínica en la Universidad Javeriana."],
                ["Experiencia aplicada", "Estrés laboral, sofrología educativa, aprendizaje, consultoría individual y entrenamiento deportivo."],
                ["Docencia y consultoría", "Seminarios para profesionales de la salud, capacitación empresarial, conferencias y docencia universitaria."],
              ].map(([t, d]) => (
                <div key={t} className="bg-ivory p-6 sm:p-7">
                  <dt className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-champagne-dark">
                    <Check className="h-3.5 w-3.5" /> {t}
                  </dt>
                  <dd className="mt-3 text-[0.95rem] leading-relaxed text-slate">{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.26} className="mt-10">
            <Link to="/sobre-mi" className="btn-ghost">
              Conocer al Dr. Ricardo López <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Therapies() {
  return (
    <section id="terapias" aria-labelledby="terapias-title" className="bg-sand-light py-20 sm:py-28">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow>Terapias y áreas de atención</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="terapias-title" className="h2 mt-6">
                Conoce las áreas en las que <em className="text-champagne-dark">podemos orientarte.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:col-span-4">
            <p className="text-[0.95rem] leading-relaxed text-slate">
              Cada motivo de consulta se valora de forma individual. Estas áreas describen el tipo de acompañamiento disponible, no
              promesas de resultado.
            </p>
          </Reveal>
        </div>
        <div className="mt-14">
          <TherapyGrid />
        </div>
      </div>
    </section>
  );
}

function Sophrology() {
  return (
    <section aria-labelledby="sofro-title" className="py-20 sm:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-6">
          <div className="aspect-[5/6] overflow-hidden sm:aspect-[4/3] lg:aspect-[5/6]">
            <Img src={images.sofrologia} alt="Imagen conceptual: persona en calma frente a un lago entre montañas" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 right-4 hidden max-w-[15rem] bg-petrol p-6 text-ivory sm:block lg:-right-8">
            <p className="font-serif text-xl italic leading-snug">“El autoconocimiento y la transformación positiva del ser humano.”</p>
            <p className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-champagne">Principio de la sofrología</p>
          </div>
        </Reveal>
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>Qué es la sofrología</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="sofro-title" className="h2 mt-6">
              Sofrología: conciencia, relajación y <em className="text-champagne-dark">bienestar.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lead mt-7">
              La sofrología se presenta como una filosofía humanista orientada al autoconocimiento. Investiga las posibilidades de
              estimular la armonía de la persona y de desarrollar sus propios recursos a través de la conciencia del cuerpo y la mente.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 border-y border-petrol/15">
              {[
                ["Sos", "Serenidad"],
                ["Phren", "Mente, conciencia"],
                ["Logos", "Estudio"],
              ].map(([g, s], i) => (
                <div key={g} className={`py-6 ${i ? "border-l border-petrol/15 pl-4 sm:pl-6" : ""}`}>
                  <p className="font-serif text-2xl italic text-champagne-dark sm:text-3xl">{g}</p>
                  <p className="mt-1 text-xs text-slate sm:text-sm">{s}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <ul className="mt-8 grid gap-3 text-[0.95rem] text-slate sm:grid-cols-2">
              {["Relajación dinámica", "Respiración consciente", "Visualización e imágenes positivas", "Percepción consciente del cuerpo"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-champagne" /> {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/sofrologia" className="btn-primary">
              Descubrir la sofrología <ArrowUpRight className="h-4 w-4" />
            </Link>
            <ExtLink href={site.whatsapp.sofrologia} className="btn-ghost">
              <WhatsAppIcon /> Preguntar por WhatsApp
            </ExtLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Hypnosis() {
  const blocks = [
    {
      t: "En qué consiste",
      d: "Es una técnica terapéutica que facilita un estado especial de conciencia en profunda relajación. Se utiliza como una herramienta dentro de un proceso de acompañamiento profesional.",
    },
    {
      t: "Qué puedes esperar",
      d: "La persona no se encuentra dormida ni pierde la conciencia. Permanece atenta a lo que ocurre y solo dice y hace lo que le permite su propia voluntad.",
    },
    {
      t: "Cómo se desarrolla",
      d: "La dinámica de las sesiones, su duración y frecuencia se explican directamente en la consulta, de acuerdo con la valoración individual de cada caso.",
    },
  ];
  const questions = [
    "¿Cuál es la formación del profesional en hipnosis clínica?",
    "¿Es este enfoque adecuado para mi motivo de consulta?",
    "¿Cómo se complementa con un tratamiento médico o psicológico actual?",
    "¿Qué puedo esperar de las sesiones y qué no?",
  ];
  return (
    <section aria-labelledby="hipno-title" className="relative overflow-hidden bg-petrol py-20 text-ivory sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full border border-ivory/[0.06]" aria-hidden />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow light>Hipnosis clínica</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="hipno-title" className="h2 mt-6">
                Hipnosis clínica: <em className="text-champagne">conoce el proceso.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-10 aspect-[4/3] overflow-hidden">
                <Img src={images.hipnosis} alt="Imagen conceptual: sala cálida y tranquila con luz natural" className="h-full w-full object-cover opacity-90" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="divide-y divide-ivory/10 border-y border-ivory/10">
              {blocks.map((b, i) => (
                <Reveal key={b.t} delay={i * 0.08}>
                  <div className="grid gap-3 py-7 sm:grid-cols-[3.5rem_1fr]">
                    <span className="font-serif text-xl text-champagne">0{i + 1}</span>
                    <div>
                      <h3 className="text-2xl">{b.t}</h3>
                      <p className="mt-2 leading-relaxed text-ivory/70">{b.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 border border-ivory/15 bg-ivory/[0.04] p-6 sm:p-8">
                <p className="eyebrow !text-champagne">Preguntas útiles antes de asistir</p>
                <ul className="mt-5 space-y-3">
                  {questions.map((q) => (
                    <li key={q} className="flex gap-3 text-[0.95rem] text-ivory/80">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-champagne" /> {q}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 flex gap-3 text-sm leading-relaxed text-ivory/65">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-champagne" />
                La participación en una sesión es siempre consciente y voluntaria, y requiere el consentimiento informado de la persona.
                La hipnosis clínica no reemplaza la atención médica o psicológica cuando esta es necesaria.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ExtLink href={site.whatsapp.hipnosis} className="btn-light">
                <WhatsAppIcon /> Consultar sobre hipnosis clínica
              </ExtLink>
              <Link to="/hipnosis-clinica" className="btn-outline-light">
                Leer más <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section aria-labelledby="cursos-title" className="py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Cursos y formación</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="cursos-title" className="h2 mt-6">
                Formación, talleres y <em className="text-champagne-dark">desarrollo profesional.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <ArrowLink to="/cursos">Ver todos los programas</ArrowLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {courseGroups.map((c, i) => (
            <Reveal as="article" key={c.id} delay={i * 0.08} className="group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <Img src={c.image} alt="" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]" />
              </div>
              <div className="flex flex-1 flex-col border-b border-petrol/15 pb-8 pt-6">
                <p className="eyebrow">{c.audience}</p>
                <h3 className="mt-3 text-[1.7rem] leading-tight">{c.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate">{c.summary}</p>
                <ExtLink href={site.whatsapp.custom(c.wa)} className="link-arrow mt-6 group/l">
                  <WhatsAppIcon className="h-4 w-4" /> Solicitar información
                </ExtLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-sand-light py-20 sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="faq-title" className="h2 mt-6">
              Resolvemos tus <em className="text-champagne-dark">dudas.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-slate">¿Tienes otra pregunta? Escríbenos y el consultorio te orientará.</p>
            <ExtLink href={site.whatsapp.general} className="btn-ghost mt-8">
              <WhatsAppIcon /> Hacer una pregunta
            </ExtLink>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-8">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  useSeo(
    "Dr. Ricardo López Pérez | Sofrología e hipnosis clínica en Bogotá",
    "Sofrología e hipnosis clínica en Bogotá con el Dr. Ricardo López Pérez. Más de 30 años de trayectoria. Centro Médico Palermo, Carrera 22 #45B-38.",
  );
  return (
    <>
      <Hero />
      <Presentation />
      <Therapies />
      <Sophrology />
      <Hypnosis />
      <Courses />
      <Faq />
      <ContactSection />
    </>
  );
}
