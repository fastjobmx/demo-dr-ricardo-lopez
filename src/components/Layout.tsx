import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { ExtLink, Logo, WhatsAppIcon } from "./ui";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "smooth" }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-petrol/10 bg-ivory/80 py-3 backdrop-blur-xl" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between gap-6">
        <Link to="/" aria-label="Inicio — Dr. Ricardo López Pérez" className="shrink-0">
          <Logo compact />
        </Link>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    `relative py-2 text-[0.84rem] tracking-wide transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-champagne after:transition-all after:duration-500 ${
                      isActive ? "text-petrol after:w-full" : "text-slate after:w-0 hover:text-petrol hover:after:w-full"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ExtLink href={site.whatsapp.general} className="btn-primary hidden !min-h-[44px] !px-6 sm:inline-flex">
            Agendar consulta
          </ExtLink>
          <ExtLink
            href={site.whatsapp.general}
            label="Escribir por WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-petrol text-ivory sm:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </ExtLink>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-petrol/20 text-petrol transition hover:border-petrol xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex h-[100dvh] flex-col bg-petrol text-ivory"
          >
            <div className="container flex items-center justify-between py-5">
              <Logo light compact />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 transition hover:border-champagne hover:text-champagne"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Menú móvil" className="container flex-1 overflow-y-auto pt-6">
              <ul>
                {nav.map((n, i) => (
                  <motion.li
                    key={n.to}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.045, duration: 0.5 }}
                    className="border-b border-ivory/10"
                  >
                    <NavLink
                      to={n.to}
                      end={n.to === "/"}
                      className={({ isActive }) =>
                        `flex items-baseline gap-4 py-4 font-serif text-[1.9rem] leading-none transition-colors ${isActive ? "text-champagne" : "hover:text-champagne"}`
                      }
                    >
                      <span className="font-sans text-[0.65rem] tracking-widest text-ivory/40">{String(i + 1).padStart(2, "0")}</span>
                      {n.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="container space-y-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6">
              <ExtLink href={site.whatsapp.general} className="btn-light w-full">
                <WhatsAppIcon /> Agendar consulta
              </ExtLink>
              <a href={site.phones.main.href} className="btn-outline-light w-full">
                <Phone className="h-4 w-4" /> {site.phones.main.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function WhatsAppFloat() {
  return (
    <ExtLink
      href={site.whatsapp.general}
      label="Escribir al consultorio por WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-[#1f6b52] pl-4 pr-4 text-white shadow-[0_18px_40px_-14px_rgba(15,43,41,0.75)] ring-1 ring-white/10 transition-all duration-500 hover:bg-[#185a45] hover:pr-6 sm:right-7"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="max-w-0 whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-500 group-hover:ml-3 group-hover:max-w-[10rem] group-hover:opacity-100">
        Escríbenos
      </span>
    </ExtLink>
  );
}

function Footer() {
  return (
    <footer className="bg-petrol-deep text-ivory">
      <div className="container pb-28 pt-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
              Sofrología e hipnosis clínica en Bogotá. {site.experience}.
            </p>
          </div>
          <nav aria-label="Navegación secundaria" className="lg:col-span-3">
            <p className="eyebrow !text-champagne">Navegación</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ivory/75 lg:grid-cols-1">
              {[...nav, { label: "Hipnosis clínica", to: "/hipnosis-clinica" }].map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors hover:text-champagne">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-5">
            <p className="eyebrow !text-champagne">Consultorio</p>
            <address className="mt-5 space-y-4 text-sm not-italic text-ivory/75">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                <span>
                  {site.address.street}, {site.address.office}
                  <br />
                  {site.address.building} · {site.address.city}
                </span>
              </p>
              <p className="flex flex-wrap gap-x-6 gap-y-2">
                <a href={site.phones.main.href} className="flex items-center gap-2 hover:text-champagne">
                  <Phone className="h-4 w-4 text-champagne" /> {site.phones.main.label}
                </a>
                <a href={site.phones.alt.href} className="flex items-center gap-2 hover:text-champagne">
                  <Phone className="h-4 w-4 text-champagne" /> {site.phones.alt.label}
                </a>
              </p>
              <ExtLink href={site.whatsapp.general} className="inline-flex items-center gap-2 hover:text-champagne">
                <WhatsAppIcon className="h-4 w-4 text-champagne" /> Escribir por WhatsApp
              </ExtLink>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-8 text-xs leading-relaxed text-ivory/50">
          <p className="max-w-4xl">
            La información de este sitio es de carácter general y orientativo. No sustituye la valoración, el diagnóstico ni el
            tratamiento de un profesional de la salud. Las áreas de consulta se evalúan de forma individual y los resultados pueden
            variar en cada persona.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name} ·{" "}
              <Link to="/aviso-de-privacidad" className="underline-offset-4 hover:text-champagne hover:underline">
                Aviso de privacidad
              </Link>
            </p>
            <p className="text-ivory/40">
              Propuesta de renovación digital por <span className="text-champagne/80">Cerebro Digital IO</span> · Imágenes conceptuales con fines demostrativos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-petrol focus:px-4 focus:py-2 focus:text-ivory">
        Saltar al contenido
      </a>
      <ScrollManager />
      <Header />
      <main id="contenido" className="overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
