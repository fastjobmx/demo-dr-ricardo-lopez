import { Link } from "react-router-dom";
import { useSeo } from "@/components/ui";

export default function NotFound() {
  useSeo("Página no encontrada | Dr. Ricardo López Pérez");
  return (
    <section className="container flex min-h-[70vh] flex-col items-start justify-center pt-32">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-5">Esta página no existe.</h1>
      <Link to="/" className="btn-primary mt-10">
        Volver al inicio
      </Link>
    </section>
  );
}
