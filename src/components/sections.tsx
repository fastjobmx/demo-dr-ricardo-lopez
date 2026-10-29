import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Navigation, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { site, therapies, type Therapy } from "@/data/site";
import { Eyebrow, ExtLink, Img, Reveal, WhatsAppIcon } from "./ui";

export function TherapyCard({ t, i }: { t: Therapy; i: number }) {
  return (
    <Reveal as="article" delay={(i % 4) * 0.07} className="group relative flex flex-col bg-ivory">
      <Link to={`/terapias#${t.id}`} className="flex h-full flex-col" aria-label={`${t.title}: conocer más`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Img src={t.image} alt="" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]" />
          <div className="absolute inset-0 bg-petrol/10 transition-colors duration-700 group-hover:bg-petrol/0" />
          <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.65rem] font-medium tracking-[0.2em] text-petrol backdrop-blur">
            {t.n}
          </span>
        </div>
        <div className="flex flex-1 flex-col border-x border-b border-petrol/10 p-6 transition-colors duration-500 group-hover:border-champagne/50 sm:p-7">
          <h3 className="text-[1.55rem] leading-tight">{t.title}</h3>
          <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-slate">{t.short}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-petrol transition-colors group-hover:text-champagne-dark">
            Conocer más
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function TherapyGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {therapies.map((t, i) => (
        <TherapyCard key={t.id} t={t} i={i} />
      ))}
    </div>
  );
}

const interests = ["Una consulta", "Sofrología", "Hipnosis clínica", "Cursos y talleres", "Capacitación para empresas"];

/** Formulario mínimo: no almacena datos ni solicita información clínica; prepara un mensaje de WhatsApp. */
export function InfoRequest() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState(interests[0]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const intro = name.trim() ? `Hola, mi nombre es ${name.trim()}.` : "Hola.";
    const msg = `${intro} Quisiera información sobre: ${interest.toLowerCase()}.`;
    window.open(site.whatsapp.custom(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit} className="border border-petrol/10 bg-white p-6 sm:p-8" aria-labelledby="form-title">
      <p id="form-title" className="font-serif text-2xl">Solicitar información</p>
      <p className="mt-2 text-sm text-slate">Prepararemos un mensaje para que lo envíes por WhatsApp.</p>
      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Tu nombre</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="given-name"
            placeholder="Nombre"
            className="mt-2 h-12 w-full border-b border-petrol/20 bg-transparent text-base outline-none transition-colors placeholder:text-slate/50 focus:border-champagne"
          />
        </label>
        <fieldset>
          <legend className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Me interesa</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {interests.map((it) => (
              <button
                type="button"
                key={it}
                onClick={() => setInterest(it)}
                aria-pressed={interest === it}
                className={`min-h-[40px] rounded-full border px-4 text-sm transition-all ${
                  interest === it ? "border-petrol bg-petrol text-ivory" : "border-petrol/20 text-petrol hover:border-petrol"
                }`}
              >
                {it}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <button type="submit" className="btn-primary mt-8 w-full">
        <WhatsAppIcon /> Continuar en WhatsApp
      </button>
      <p className="mt-4 text-xs leading-relaxed text-slate/80">
        Por tu privacidad, no compartas información clínica en este mensaje. Este formulario no almacena datos.
      </p>
    </form>
  );
}

export function ContactSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-sand-light py-20 sm:py-28">
      <div className="container">
        {heading && (
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Contacto</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="contacto-title" className="h2 mt-6">
                Tu primera conversación puede <em className="text-champagne-dark">comenzar aquí.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lead mt-6 max-w-prose2">
                Comunícate con el consultorio para conocer más información sobre las terapias y la disponibilidad de citas.
              </p>
            </Reveal>
          </div>
        )}

        <div className={`grid gap-6 lg:grid-cols-12 ${heading ? "mt-14" : ""}`}>
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col bg-petrol p-7 text-ivory sm:p-9">
              <p className="eyebrow !text-champagne">WhatsApp</p>
              <a href={site.whatsapp.general} target="_blank" rel="noopener noreferrer" className="mt-3 font-serif text-[2rem] leading-tight hover:text-champagne">
                {site.phones.main.label}
              </a>
              <div className="my-7 h-px bg-ivory/15" />
              <p className="eyebrow !text-champagne">Teléfonos</p>
              <a href={site.phones.main.href} className="mt-3 flex items-center gap-3 text-ivory/85 hover:text-champagne">
                <Phone className="h-4 w-4" /> {site.phones.main.label}
              </a>
              <a href={site.phones.alt.href} className="mt-2 flex items-center gap-3 text-ivory/85 hover:text-champagne">
                <Phone className="h-4 w-4" /> {site.phones.alt.label}
              </a>
              <div className="my-7 h-px bg-ivory/15" />
              <p className="eyebrow !text-champagne">Dirección</p>
              <address className="mt-3 flex gap-3 not-italic leading-relaxed text-ivory/85">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.office} · {site.address.building}
                  <br />
                  {site.address.city}
                </span>
              </address>
              <div className="mt-auto flex flex-col gap-3 pt-9">
                <ExtLink href={site.whatsapp.general} className="btn-light">
                  <WhatsAppIcon /> Escribir por WhatsApp
                </ExtLink>
                <ExtLink href={site.maps.link} className="btn-outline-light">
                  <Navigation className="h-4 w-4" /> Abrir en Google Maps
                </ExtLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-4">
            <div className="relative h-full min-h-[340px] overflow-hidden border border-petrol/10 bg-sand">
              <iframe
                title="Ubicación del consultorio en Google Maps"
                src={site.maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[0.55] sepia-[0.15] contrast-[0.95]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-4">
            <InfoRequest />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden bg-petrol px-7 py-14 text-ivory sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-champagne/20" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-champagne/15" />
            <div className="relative grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="font-serif text-[2rem] leading-tight sm:text-5xl">{title}</h2>
                <p className="mt-5 max-w-xl text-ivory/70">{text}</p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <ExtLink href={href} className="btn-light">
                  <WhatsAppIcon /> {label}
                </ExtLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
