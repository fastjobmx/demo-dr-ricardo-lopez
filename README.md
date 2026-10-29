# Dr. Ricardo López Pérez — Propuesta de renovación digital

Demostración independiente preparada por **Cerebro Digital IO**. No reemplaza ni modifica el sitio actual
(https://www.sofrologiadrricardolopez.net/).

Stack: React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide · React Router
(el mismo stack que usa Lovable, por lo que el proyecto puede importarse vía GitHub).

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # genera /dist
```

## Dónde editar

- `src/data/site.ts` — datos de contacto, enlaces de WhatsApp, terapias, cursos, preguntas frecuentes e imágenes.
- `src/components/ui.tsx` → `DoctorPortrait` — retrato oficial (imagen en `public/images/dr-ricardo-lopez.webp`).
- Textos marcados como **[Editable]** — pendientes de validar con el profesional.

## Pendiente antes de publicar

- Retrato del Dr. Ricardo López incluido (`public/images/`); conviene una versión en mayor resolución. Fotos reales del consultorio, si se desean.
- Validar formación, títulos y descripción de una sesión de hipnosis clínica.
- Fechas, modalidades e inversión de los cursos.
- Aviso de privacidad definitivo (Ley 1581 de 2012).
- Autorización para reutilizar testimonios (no incluidos en la demo).
- Quitar `<meta name="robots" content="noindex">` de `index.html` y definir el dominio final.
- Imágenes conceptuales de Unsplash: sustituir o confirmar licencia para producción.
