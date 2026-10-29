// Datos públicos verificados en https://www.sofrologiadrricardolopez.net/
// Los valores marcados como EDITABLE deben confirmarse con el consultorio antes de publicar.

const wa = (text: string) => `https://wa.me/573163901873?text=${encodeURIComponent(text)}`;

export const site = {
  name: "Dr. Ricardo López Pérez",
  tagline: "Sofrología · Hipnosis clínica",
  city: "Bogotá D.C., Colombia",
  experience: "Más de 30 años de trayectoria profesional",
  phones: {
    main: { label: "+57 316 390 1873", href: "tel:+573163901873" },
    alt: { label: "+57 314 468 3988", href: "tel:+573144683988" },
  },
  address: {
    street: "Carrera 22 #45B-38",
    office: "Consultorio 508",
    building: "Centro Médico Palermo",
    city: "Bogotá D.C., Colombia",
  },
  maps: {
    link: "https://www.google.com/maps/search/?api=1&query=Centro+M%C3%A9dico+Palermo+Carrera+22+%2345B-38+Bogot%C3%A1",
    embed: "https://www.google.com/maps?q=Carrera+22+%2345B-38,+Bogot%C3%A1,+Colombia&z=16&output=embed",
  },
  whatsapp: {
    general: wa("Hola, quisiera información sobre una consulta."),
    hipnosis: wa("Hola, quisiera información sobre hipnosis clínica."),
    sofrologia: wa("Hola, quisiera información sobre sofrología."),
    cursos: wa("Hola, quisiera información sobre sus cursos."),
    custom: wa,
  },
  original: "https://www.sofrologiadrricardolopez.net/",
};

export const nav = [
  { label: "Inicio", to: "/" },
  { label: "Sobre mí", to: "/sobre-mi" },
  { label: "Terapias", to: "/terapias" },
  { label: "Sofrología", to: "/sofrologia" },
  { label: "Cursos", to: "/cursos" },
  { label: "Preguntas frecuentes", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto" },
];

const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

export const images = {
  hero: u("1519710164239-da123dc03ef4", 1400),
  sofrologia: u("1508672019048-805c876b67e2", 1400),
  hipnosis: u("1600210492486-724fe5c67fb0", 1400),
  contacto: u("1524758631624-e2822e304c36", 1400),
  u,
};

export type Therapy = {
  id: string;
  n: string;
  title: string;
  short: string;
  image: string;
  detail: string[];
  topics: string[];
};

export const therapies: Therapy[] = [
  {
    id: "estres",
    n: "01",
    title: "Manejo del estrés",
    short:
      "Herramientas de relajación dinámica y respiración consciente para reconocer las señales del estrés cotidiano y laboral, y aprender a gestionarlas con mayor serenidad.",
    image: u("1441974231531-c6227db76b6e", 900),
    detail: [
      "El estrés laboral es una de las áreas en las que el Dr. Ricardo López ha desarrollado buena parte de su experiencia, incluyendo programas de manejo del estrés para equipos de trabajo.",
      "Las prácticas de sofrología buscan que la persona tome conciencia de su cuerpo y su respiración, y desarrolle recursos propios para afrontar las exigencias del día a día.",
    ],
    topics: ["Estrés laboral", "Relajación dinámica", "Respiración consciente"],
  },
  {
    id: "sueno",
    n: "02",
    title: "Dificultades del sueño",
    short:
      "Orientación en técnicas de relajación que pueden favorecer el descanso. Cada caso se evalúa de manera individual para definir el acompañamiento más adecuado.",
    image: u("1505693416388-ac5ce068fe85", 900),
    detail: [
      "Las dificultades para conciliar o mantener el sueño figuran entre las áreas de consulta publicadas por el profesional.",
      "El trabajo se orienta hacia el aprendizaje de técnicas de relajación y hábitos de descanso. Si existe una condición médica de base, es importante mantener el seguimiento con el médico tratante.",
    ],
    topics: ["Relajación previa al descanso", "Rutinas de sueño", "Evaluación individual"],
  },
  {
    id: "fobias",
    n: "03",
    title: "Fobias y temores",
    short:
      "Un espacio para comprender los temores que limitan la vida cotidiana y explorar, mediante sofrología e hipnosis clínica, nuevas formas de afrontarlos de manera gradual.",
    image: u("1470252649378-9c29740c9fa8", 900),
    detail: [
      "El control de las fobias es una de las áreas de atención descritas en el sitio del profesional.",
      "El proceso se adapta a cada persona y se desarrolla con su participación consciente, a un ritmo respetuoso con su experiencia.",
    ],
    topics: ["Temores específicos", "Exposición gradual guiada", "Participación consciente"],
  },
  {
    id: "hablar-en-publico",
    n: "04",
    title: "Seguridad personal y hablar en público",
    short:
      "Acompañamiento para personas que sienten timidez o temor al expresarse frente a otros, con ejercicios de visualización, respiración y preparación consciente.",
    image: u("1475721027785-f74eccf877e2", 900),
    detail: [
      "La timidez y el temor a hablar en público son áreas de consulta individual y también temas de talleres grupales publicados por el profesional.",
      "Se trabaja con técnicas de visualización y relajación orientadas a fortalecer la confianza al comunicarse.",
    ],
    topics: ["Timidez", "Presentaciones y entrevistas", "Visualización positiva"],
  },
  {
    id: "dejar-de-fumar",
    n: "05",
    title: "Apoyo para dejar de fumar",
    short:
      "Acompañamiento con sofrología e hipnosis clínica para personas que han decidido dejar el cigarrillo y buscan herramientas que refuercen su propia decisión.",
    image: u("1499209974431-9dddcece7f88", 900),
    detail: [
      "Dejar de fumar es una de las áreas de atención del consultorio y también el tema de uno de los talleres publicados.",
      "La motivación personal es central en este proceso: las técnicas buscan apoyar la decisión de la persona, no reemplazarla. Los resultados varían en cada caso.",
    ],
    topics: ["Motivación personal", "Manejo de la ansiedad", "Acompañamiento"],
  },
  {
    id: "bienestar-emocional",
    n: "06",
    title: "Bienestar emocional y relaciones",
    short:
      "Orientación para explorar apegos afectivos, emociones y formas de relacionarse, desde el autoconocimiento que propone la sofrología.",
    image: u("1544027993-37dbfe43562a", 900),
    detail: [
      "Los apegos afectivos y las relaciones humanas aparecen tanto en las áreas de consulta como en los talleres del profesional, entre ellos «Manejo de las emociones y el perdón».",
      "El enfoque parte del autoconocimiento y la transformación positiva que describe la sofrología.",
    ],
    topics: ["Apegos afectivos", "Manejo de las emociones", "Relaciones humanas"],
  },
  {
    id: "aprendizaje",
    n: "07",
    title: "Aprendizaje y concentración",
    short:
      "Sofrología aplicada al aprendizaje: ejercicios de atención, memoria y relajación para estudiantes y para quienes desean mejorar su forma de aprender.",
    image: u("1434030216411-0b793f4b4173", 900),
    detail: [
      "La sofrología educativa y los problemas de aprendizaje forman parte de la experiencia publicada del Dr. Ricardo López, quien también ha realizado entrenamiento sofropedagógico con docentes universitarios.",
      "Las prácticas buscan favorecer la atención, la memoria y una actitud más tranquila frente al estudio.",
    ],
    topics: ["Sofrología educativa", "Memoria y atención", "Entrenamiento sofropedagógico"],
  },
  {
    id: "otras-areas",
    n: "08",
    title: "Otras áreas de consulta",
    short:
      "Hábitos alimentarios, bienestar en la vida de pareja, preparación deportiva y otros motivos de consulta que pueden conversarse directamente con el consultorio.",
    image: u("1586023492125-27b2c045efd7", 900),
    detail: [
      "El sitio actual menciona además el control de peso, la salud sexual y el entrenamiento sofrológico para deportistas, entre otras áreas.",
      "Si tu motivo de consulta no aparece en esta lista, puedes comunicarte con el consultorio para recibir orientación sobre si este enfoque es adecuado para ti.",
    ],
    topics: ["Hábitos y control de peso", "Bienestar en pareja", "Sofrología en el deporte"],
  },
];

export const courseGroups = [
  {
    id: "formacion",
    title: "Formación en sofrología e hipnosis clínica",
    audience: "Para profesionales de la salud",
    summary:
      "Seminarios dirigidos a médicos, psicoterapeutas, odontólogos, enfermeras y fisioterapeutas, entre otros profesionales.",
    image: u("1524178232363-1fb2b075b655", 1000),
    items: [
      "Hipnosis clínica y sofrología: manejo terapéutico",
      "Manejo del dolor con hipnosis clínica",
      "Hipnodoncia en odontología",
      "Manejo del estrés laboral",
    ],
    wa: "Hola, quisiera información sobre la formación en sofrología e hipnosis clínica para profesionales.",
  },
  {
    id: "estres-relajacion",
    title: "Manejo del estrés y relajación",
    audience: "Talleres abiertos",
    summary:
      "Talleres prácticos para aprender técnicas de relajación dinámica y recursos para la vida cotidiana.",
    image: u("1545205597-3d9d02c29597", 1000),
    items: [
      "Taller de relajación dinámica",
      "Temor a hablar en público",
      "Dejar de fumar con hipnosis",
      "Preparación del parto con sofrología",
    ],
    wa: "Hola, quisiera información sobre los talleres de manejo del estrés y relajación.",
  },
  {
    id: "desarrollo",
    title: "Desarrollo personal y capacitación profesional",
    audience: "Personas, equipos y organizaciones",
    summary:
      "Programas de desarrollo humano, aprendizaje y productividad para personas, instituciones educativas y empresas.",
    image: u("1517048676732-d65bc937f952", 1000),
    items: [
      "Desarrollo humano integral con sofrología",
      "Entrenamiento sofrológico de la memoria",
      "Manejo de las emociones y el perdón",
      "Relaciones humanas y sofrología",
      "Sofrología en el deporte",
      "Proyección positiva hacia el éxito empresarial",
      "Entrenamiento sofropedagógico en el aprendizaje",
      "Autogestión del aprendizaje con sofrología",
    ],
    wa: "Hola, quisiera información sobre los programas de desarrollo personal y capacitación.",
  },
];

export const faqs = [
  {
    q: "¿Qué es la sofrología?",
    a: "Según la descripción publicada por el Dr. Ricardo López, la sofrología es una disciplina que estudia las posibilidades de estimular la armonía del ser humano en sus planos físico, mental y espiritual, y se presenta como una filosofía humanista basada en el autoconocimiento. Su nombre proviene del griego: sos (serenidad), phren (mente, conciencia) y logos (estudio). En la práctica se trabaja con relajación dinámica, respiración, visualización y percepción consciente del cuerpo.",
  },
  {
    q: "¿Qué es la hipnosis clínica?",
    a: "Es una técnica terapéutica que facilita un estado especial de conciencia en profunda relajación. En el contexto clínico se utiliza como herramienta dentro de un proceso de acompañamiento, y su pertinencia se valora de forma individual en cada caso.",
  },
  {
    q: "¿Durante una sesión se pierde la conciencia?",
    a: "No. Tal como se explica en el sitio del profesional, durante la hipnosis clínica la persona no se encuentra dormida ni pierde la conciencia, y solo dice y hace lo que le permite su propia voluntad. La participación es siempre consciente y voluntaria.",
  },
  {
    q: "¿Cómo puedo solicitar una consulta?",
    a: "Puedes escribir por WhatsApp al +57 316 390 1873 o llamar al +57 314 468 3988. El consultorio te brindará información sobre las terapias y la disponibilidad de citas.",
  },
  {
    q: "¿Dónde está ubicado el consultorio?",
    a: "En la Carrera 22 #45B-38, consultorio 508, Centro Médico Palermo, Bogotá D.C. Puedes abrir la ubicación en Google Maps desde la sección de contacto.",
  },
  {
    q: "¿Cómo puedo conocer los cursos disponibles?",
    a: "En la página de Cursos encontrarás los programas publicados para profesionales de la salud, talleres abiertos y capacitación para organizaciones. Para conocer próximas fechas y condiciones, solicita información directamente por WhatsApp.",
  },
];
