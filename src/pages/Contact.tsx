import { PageHero, useSeo } from "@/components/ui";
import { ContactSection } from "@/components/sections";

export default function Contact() {
  useSeo(
    "Contacto | Consultorio Dr. Ricardo López Pérez en Bogotá",
    "Carrera 22 #45B-38, consultorio 508, Centro Médico Palermo, Bogotá. WhatsApp +57 316 390 1873 · Teléfono +57 314 468 3988.",
  );
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Tu primera conversación puede <em className="text-champagne-dark">comenzar aquí.</em>
          </>
        }
        intro="Comunícate con el consultorio para conocer más información sobre las terapias y la disponibilidad de citas."
      />
      <ContactSection heading={false} />
    </>
  );
}
