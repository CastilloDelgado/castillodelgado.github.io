const experience = [
  { company: 'Lagersoft Games', role: 'Frontend Developer', date: '2023 — 2026', intro: 'Interfaces que acompañan el ritmo del deporte en vivo.', summary: 'Desarrollo frontend con Vue.js para una plataforma de apuestas deportivas con aproximadamente 10,000 usuarios activos diarios.', tags: ['Vue.js', 'JavaScript', 'Tiempo real', 'Sentry', 'LogRocket'], details: [
    ['Actualizaciones en tiempo real', 'Implementación de actualizaciones de eventos deportivos, administración de conexiones y reconexión automática para mantener la información de la interfaz actualizada.'],
    ['Lógica de negocio en la interfaz', 'Manejo de cambios de cuotas, cancelaciones y aplazamientos de eventos, y sus efectos sobre las apuestas relacionadas, manteniendo la consistencia de la información mostrada.'],
    ['Diagnóstico y calidad', 'Investigación de incidentes en producción mediante trazas de Sentry y reproducciones de sesiones en LogRocket. Las correcciones pasaban por validación de QA antes de su liberación, en una base de código con pruebas unitarias.'] ] },
  { company: 'Emergys', role: 'Web Developer', date: '2021', intro: 'Del frontend al cálculo de nómina.', summary: 'Desarrollo de una aplicación de nómina para una distribuidora de gas, con responsabilidades tanto en frontend como en backend.', tags: ['React', 'Java Spring', 'MySQL', 'Docker', 'Google Cloud'], details: [
    ['Frontend e integración', 'Construcción de interfaces con React e integración de APIs para la administración de usuarios y los flujos de nómina.'],
    ['Reglas de pago y persistencia', 'Incorporación de responsabilidades de backend con Java Spring: administración de tablas de pago y reglas de cálculo basadas en ventas, rango y antigüedad del empleado. Integración con el frontend y persistencia en MySQL.'],
    ['Despliegue', 'Participación en el despliegue de la aplicación con Docker sobre Google Cloud Platform.'] ] },
  { company: 'KronosoftMX', role: 'ReactJS Frontend Developer', date: '2020', intro: 'Herramientas para la facturación masiva.', summary: 'Desarrollo de un frontend en React para administrar el proceso de facturación y conectarlo con los servicios de backend.', tags: ['React', 'JavaScript', 'Integración de APIs'], details: [
    ['Administración y facturación', 'Implementación de interfaces para administrar usuarios, facturas y archivos dentro de una herramienta de facturación masiva.'],
    ['Conexión con servicios', 'Integración de servicios de backend que soportaban el flujo de timbrado de facturas.'] ] }
]
const skills = [
  { number: '01', title: 'Frontend', tags: ['JavaScript', 'Vue.js', 'React', 'Nuxt.js', 'Inertia.js'], text: 'Interfaces web, integración con APIs, flujos de administración y lógica de negocio. Experiencia con actualizaciones en tiempo real y manejo de conexiones.' },
  { number: '02', title: 'Backend y datos', tags: ['Node.js', 'Laravel', 'Java Spring', 'MySQL', 'Cloud Firestore', 'Realtime Database', 'Go (Golang)'], text: 'Aplicaciones full stack, cuentas de usuario, gestión de contenido, persistencia de datos y reglas de cálculo conectadas con el frontend. Experiencia adicional con Firebase Cloud Firestore para datos de aplicaciones y Firebase Realtime Database para chat en vivo. Go (Golang) en proyectos personales.' },
  { number: '03', title: 'Entrega y calidad', tags: ['Git', 'Docker', 'AWS EC2', 'Google Cloud', 'Sentry', 'LogRocket', 'Pruebas unitarias'], text: 'Despliegue en la nube, diagnóstico de errores en producción y trabajo en bases de código con pruebas unitarias y validación de QA.' },
  { number: '04', title: 'Herramientas de IA', tags: ['Claude Code', 'Codex (ChatGPT)', 'Lovable'], text: 'Actualmente integro Claude Code y Codex en los flujos de desarrollo y pruebas. También utilizo Lovable para crear landing pages para clientes.' }
]

export default {
  meta: {
    title: 'Marco Castillo · Full Stack Developer',
    description: 'Marco Castillo, Full Stack Developer en Guadalajara. Experiencia en Vue.js, React, Node.js, Java Spring, Laravel, aplicaciones en tiempo real y despliegues en la nube.',
  },
  header: {
    skip: 'Saltar al contenido', home: 'Marco Castillo, inicio', navigation: 'Navegación principal',
    language: 'Seleccionar idioma', menu: 'Menú', close: 'Cerrar', contact: 'Hablemos',
    sections: [
      { id: 'perfil', label: 'Perfil' }, { id: 'experiencia', label: 'Experiencia' },
      { id: 'proyectos', label: 'Proyectos' }, { id: 'conocimientos', label: 'Conocimientos' },
    ],
  },
  profile: {
    intro: ['De la lógica de negocio', 'a una interfaz que funciona'],
    summary: 'Desarrollador de software en Guadalajara, México. Construyo aplicaciones con Vue.js, React, Node.js, Laravel y Java Spring, con experiencia en sistemas en tiempo real y despliegues en la nube.',
    explore: 'Explora mi experiencia', download: 'Descargar CV', location: 'GUADALAJARA, MÉXICO', stackLabel: 'Tecnologías principales',
  },
  experience: {
    heading: { eyebrow: '01 / TRAYECTORIA', title: ['Experiencia que', 'se lleva a producción.'], note: 'Aplicaciones de negocio, interfaces en tiempo real y resolución de problemas en entornos reales.' },
    jobs: experience,
    additional: {
      label: 'TAMBIÉN EN MI TRAYECTORIA', title: 'Ingeniería y diagnóstico electrónico',
      paragraphs: [
        'Product Engineer (2020–2022), Product Technician (2017–2019) y Debug Technician (2016–2017).',
        'Experiencia en introducción de nuevos productos PCBA, cambios de ingeniería, coordinación con clientes y diagnóstico electrónico.',
      ],
    },
  },
  projects: {
    heading: { eyebrow: '02 / PROYECTOS INDEPENDIENTES', title: ['Ideas propias.', 'Desarrollo de punta a punta.'], note: 'Proyectos para conectar interfaces, datos e infraestructura, y explorar nuevas formas de interacción.' },
    items: [
      {
        id: 'blog', number: '01', label: 'FULL STACK / DESPLEGADO EN AWS', title: 'Plataforma de blog',
        art: { label: 'IDEAS / CÓDIGO / NOTAS', title: ['Una idea.', 'Un nuevo post.'] },
        paragraphs: [
          'Blog full stack que desarrollé y administro, con cuentas de usuario y herramientas para crear, editar y eliminar publicaciones, además de cargar imágenes.',
          'Laravel y Vue.js se conectan mediante Inertia.js, con MySQL como base de datos. Despliegue con instancias EC2 y buckets de AWS.',
        ],
        tags: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'AWS'],
      },
      {
        id: 'hue', number: '02', label: 'IOT / EN DESARROLLO', title: 'Editor de animaciones Philips Hue',
        art: { title: ['LUZ EN', 'MOVIMIENTO'] },
        paragraphs: [
          'Interfaz visual para crear animaciones de iluminación y guardarlas en un perfil de usuario, con registro de cuentas.',
          'Integración con Philips Hue Bridge para reproducir las animaciones en luces físicas, probada en una red local.',
        ],
        tags: ['Nuxt.js', 'JavaScript', 'MySQL', 'Philips Hue Bridge'],
      },
    ],
  },
  skills: {
    heading: { eyebrow: '03 / CONOCIMIENTOS', title: ['Mi caja de herramientas.'], note: 'Tecnologías y prácticas que conecto para desarrollar, entregar y mantener aplicaciones.' },
    items: skills,
  },
  education: {
    heading: { eyebrow: '04 / FORMACIÓN', title: ['Una base técnica.', 'Aprendizaje continuo.'] },
    schoolLocation: 'CETI · Guadalajara, México',
    courses: [
      { date: '2017 — 2020', title: 'Ingeniería en Desarrollo de Software', note: 'Estudios cursados · Carrera no concluida' },
      { date: '2012 — 2016', title: 'Técnico en Electricidad y Electrónica' },
    ],
    languages: [{ name: 'Español', level: 'Nativo' }, { name: 'Inglés', level: 'Competente' }, { name: 'Alemán', level: 'Básico' }],
  },
  contact: {
    label: '05 / CONTACTO', title: ['Construyamos', 'lo que sigue'], emailLabel: 'Enviar correo a Marco Castillo',
    download: 'Descargar CV en PDF', backToTop: 'Volver arriba',
  },
}
