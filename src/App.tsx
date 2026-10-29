import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Therapies from "@/pages/Therapies";
import Sophrology from "@/pages/Sophrology";
import Hypnosis from "@/pages/Hypnosis";
import Courses from "@/pages/Courses";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-mi" element={<About />} />
        <Route path="terapias" element={<Therapies />} />
        <Route path="sofrologia" element={<Sophrology />} />
        <Route path="hipnosis-clinica" element={<Hypnosis />} />
        <Route path="cursos" element={<Courses />} />
        <Route path="preguntas-frecuentes" element={<Faq />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="aviso-de-privacidad" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
