import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </M>
  );
}

export function useSeo(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-serif ${compact ? "text-[1.28rem]" : "text-[1.45rem]"} font-medium tracking-tight ${light ? "text-ivory" : "text-petrol"}`}>
        Dr. Ricardo López Pérez
      </span>
      <span className={`mt-1.5 text-[0.58rem] font-medium uppercase tracking-[0.3em] ${light ? "text-champagne" : "text-champagne-dark"}`}>
        Sofrología · Hipnosis clínica
      </span>
    </span>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${light ? "!text-champagne" : ""}`}>
      <span className={`h-px w-8 ${light ? "bg-champagne/70" : "bg-champagne"}`} aria-hidden />
      {children}
    </p>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.23-4.25 9.46-9.47 9.46zm8.06-17.52A11.32 11.32 0 0 0 12.04.63C5.76.63.66 5.73.66 12.01c0 2.01.52 3.97 1.52 5.69L.57 23.6l6.03-1.58a11.36 11.36 0 0 0 5.43 1.38h.01c6.27 0 11.38-5.1 11.38-11.38 0-3.04-1.18-5.9-3.33-8.04z" />
    </svg>
  );
}

export function ExtLink({ href, className, children, label }: { href: string; className?: string; children: ReactNode; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
      {children}
    </a>
  );
}

export function ArrowLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link to={to} className={`link-arrow group ${light ? "!text-ivory hover:!text-champagne" : ""}`}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

/** Imagen con carga diferida y fundido suave al terminar de cargar. */
export function Img({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${className} bg-sand transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}

/** Retrato oficial del Dr. Ricardo López (recorte con fondo transparente) sobre una composición editorial. */
export function DoctorPortrait({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative isolate overflow-hidden bg-sand-light ${className}`}>
      <div className="absolute inset-x-[12%] bottom-0 top-[10%] -z-10 rounded-t-[999px] bg-sand" aria-hidden />
      <div className="absolute left-1/2 top-[6%] -z-10 aspect-square w-[78%] -translate-x-1/2 rounded-full border border-champagne/40" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-petrol/10 to-transparent" aria-hidden />
      <picture>
        <source srcSet="/images/dr-ricardo-lopez.webp" type="image/webp" />
        <img
          src="/images/dr-ricardo-lopez.png"
          alt="Dr. Ricardo López Pérez, sofrólogo e hipnoterapeuta"
          width={310}
          height={566}
          loading="lazy"
          decoding="async"
          className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_30px_40px_rgba(23,61,58,0.18)]"
        />
      </picture>
      <figcaption className="absolute bottom-4 left-4 border border-petrol/10 bg-ivory/90 px-4 py-3 backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-5 sm:py-4">
        <p className="font-serif text-lg leading-tight text-petrol sm:text-xl">Dr. Ricardo López Pérez</p>
        <p className="mt-1 text-[0.6rem] uppercase tracking-[0.24em] text-champagne-dark">Sofrólogo · Hipnoterapeuta</p>
      </figcaption>
    </figure>
  );
}

export function Accordion({ items, light = false }: { items: { q: string; a: string }[]; light?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`border-t ${light ? "border-ivory/15" : "border-petrol/15"}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={it.q} className={`border-b ${light ? "border-ivory/15" : "border-petrol/15"}`}>
            <h3 className="font-sans">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-btn`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7"
              >
                <span className={`font-serif text-[1.3rem] leading-snug transition-colors sm:text-2xl ${light ? "text-ivory" : "text-petrol"} group-hover:text-champagne-dark`}>
                  <span className="mr-4 font-sans text-xs tracking-widest text-champagne">{String(i + 1).padStart(2, "0")}</span>
                  {it.q}
                </span>
                <span
                  className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                    isOpen ? "rotate-45 border-champagne bg-champagne text-ivory" : light ? "border-ivory/30 text-ivory" : "border-petrol/25 text-petrol"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-btn`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="overflow-hidden"
                >
                  <p className={`max-w-3xl pb-7 pl-0 leading-relaxed sm:pl-10 ${light ? "text-ivory/75" : "text-slate"}`}>{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** Cabecera editorial para páginas internas. */
export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: ReactNode; intro: string; image?: string; imageAlt?: string }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="container grid items-end gap-10 lg:grid-cols-12">
        <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6">{title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead mt-7 max-w-prose2">{intro}</p>
          </Reveal>
        </div>
        {image && (
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-t-[999px] lg:aspect-[4/5]">
              <Img src={image} alt={imageAlt ?? ""} eager className="h-full w-full object-cover" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
