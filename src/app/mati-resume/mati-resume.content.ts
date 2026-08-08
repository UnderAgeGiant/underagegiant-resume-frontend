export interface ResumeJob {
  role: string;
  company: string;
  place: string;
  dates: string;
  bullets: string[];
  proyectos: string | null;
  isPersonalProject?: boolean;
}

export interface ResumeEducation {
  title: string;
  school: string;
  dates: string;
}

export interface ResumeTechGroup {
  title: string;
  items: string[];
}

export interface ResumeContent {
  navResumen: string;
  navExperiencia: string;
  navEducacion: string;
  navHabilidades: string;
  navTecnologias: string;
  heroKicker: string;
  heroTitle: string;
  stats: { label: string }[];
  resumenLabel: string;
  resumen: string;
  experienciaLabel: string;
  proyectosLabel: string;
  experience: ResumeJob[];
  educacionLabel: string;
  education: ResumeEducation[];
  habilidadesLabel: string;
  skills: string[];
  tecnologiasLabel: string;
  techGroups: ResumeTechGroup[];
  languagesLine: string[];
}

export const RESUME_CONTENT: Record<'es' | 'en', ResumeContent> = {
  es: {
    navResumen: 'Resumen', navExperiencia: 'Experiencia', navEducacion: 'Educación',
    navHabilidades: 'Habilidades', navTecnologias: 'Tecnologías',
    heroKicker: 'Curriculum Vitae',
    heroTitle: 'Software Engineering Manager — Liderazgo de Equipos de Ingeniería y Entrega de Producto',
    stats: [
      { label: '14+ Años de experiencia' },
      { label: 'Magister en dirección TI' },
      { label: 'Manager y Dev Backend' },
      { label: 'Fabricante de nuevos líderes' }
    ],
    resumenLabel: 'Resumen profesional',
    resumen: 'Ingeniero de software con 14 años de experiencia liderando equipos de ingeniería y el desarrollo de productos tecnológicos en organizaciones de gran escala. Experiencia en gestión de personas (hiring técnico, planificación de capacidad, desarrollo de carrera y coordinación de equipos multidisciplinarios de hasta 21 profesionales), combinada con una sólida base técnica en arquitectura de microservicios y sistemas escalables. He liderado iniciativas de modernización tecnológica, observabilidad, seguridad y compliance, fortaleciendo la excelencia técnica y el crecimiento de equipos para alcanzar objetivos de negocio. Orientado a posiciones de liderazgo como Engineering Manager, impulsando equipos de alto desempeño y productos tecnológicos escalables, seguros y de alto impacto.',
    experienciaLabel: 'Experiencia',
    proyectosLabel: 'Proyectos:',
    experience: [
      {
        role: 'Planificador de Viajes con IA (tripilove.com)', company: 'Proyecto Personal', place: 'Santiago, Chile', dates: '2026',
        bullets: [
          'Diseñé y desarrollé TripiLove (tripilove.com), un planificador de viajes personal impulsado por IA, integrado con Deepseek para recomendar las mejores atracciones turísticas en cada viaje.',
          'Implementé una arquitectura de microservicios con Angular v20 y Node.js, con PostgreSQL y Redis para la persistencia de datos, desplegada en Vercel bajo un modelo serverless.',
          'Desarrollé el proyecto íntegramente con Claude Code siguiendo la metodología Spec-Driven Development, utilizando agentes para la definición de nuevas features, el desarrollo de componentes y QA en cada despliegue, manteniendo un modelo Human-in-the-loop para despliegues seguros.'
        ], proyectos: null, isPersonalProject: true
      },
      {
        role: 'Software Project Leader', company: 'Mercado Libre', place: 'Santiago, Chile', dates: 'Jun 2025 – Nov 2025',
        bullets: [
          'Lideré un equipo regional de 8 desarrolladores distribuidos entre Chile, Colombia y Argentina, responsable de los principales puntos de acceso a Mercado Play, plataforma de streaming con más de 6 millones de usuarios.',
          'Definí soluciones técnicas sobre arquitectura de microservicios (Java Springboot), participando en el roadmap tecnológico, el gobierno de arquitectura y la planificación trimestral de capacidad.',
          'Impulsé prácticas de ingeniería orientadas a resultados mediante OKRs y KPIs de disponibilidad, rendimiento y calidad.',
          'Incrementé en un 13% (aprox. 800.000 usuarios) el tráfico hacia la plataforma mediante experimentación y optimización de la experiencia de usuario.',
          'Implementé dashboards y alertas de observabilidad; promoví el uso de herramientas de IA (Cursor, Windsurf) y lideré la automatización de procesos con VerdiFlow (basado en n8n).'
        ], proyectos: null
      },
      {
        role: 'Technical Leader', company: 'Banco Falabella', place: 'Santiago, Chile', dates: 'Oct 2021 – Dic 2024',
        bullets: [
          'Lideré múltiples equipos multidisciplinarios, coordinando hasta 21 profesionales (desarrolladores, QAs y BAs).',
          'Fui responsable del hiring técnico, la planificación de capacidad y el desarrollo de personas, coordinando con stakeholders técnicos y de negocio para asegurar la entrega de iniciativas estratégicas.',
          'Diseñé y validé arquitecturas de microservicios con API Gateway y balanceadores de carga, garantizando soluciones escalables, seguras y mantenibles.',
          'Supervisé la calidad técnica y las integraciones REST y SOAP, liderando la evolución de plataformas web y móviles para Banco Falabella en Chile, Perú, Colombia y México.'
        ], proyectos: null
      },
      {
        role: 'Fullstack Developer', company: 'Banco Falabella', place: 'Santiago, Chile', dates: 'Mar 2019 – Oct 2021',
        bullets: [
          'Inicié como desarrollador backend y evolucioné al rol de Focal Point técnico, liderando el diseño de soluciones en coordinación con líderes técnicos y Business Analysts.',
          'Participé en la definición y estimación de historias de usuario bajo metodologías ágiles (Scrum y Kanban), asegurando implementaciones de alta calidad.',
          'Apoyé el crecimiento técnico del equipo mediante mentoría y onboarding.',
          'Fui asignado a células de desarrollo para varios negocios dentro del ecosistema de Banco Falabella.'
        ], proyectos: null
      },
      {
        role: 'Solutions Team Leader', company: 'Everis Chile', place: 'Santiago, Chile', dates: 'Ene 2015 – Mar 2019',
        bullets: [
          'Lideré el equipo de desarrollo, coordinando la asignación de tareas, la planificación y estimación del trabajo, y el seguimiento de la ejecución para garantizar el cumplimiento de los objetivos del proyecto.',
          'Colaboré estrechamente con el equipo funcional en el levantamiento de requerimientos, definiendo el alcance técnico de las soluciones.'
        ],
        proyectos: 'Sistema de Fiscalización con enfoque de derechos (Superintendencia de Educación); Migración de Aplicaciones (Servicio Nacional de Aduanas); Mantenimiento Evolutivo SICOGEN II y SICOGEN II (Contraloría General de la República); Sistema de Gestión de Causas (Consejo de Defensa del Estado).'
      },
      {
        role: 'Solutions Analyst', company: 'Everis Chile', place: 'Santiago, Chile', dates: 'Ago 2012 – Dic 2014',
        bullets: [
          'Desarrollé nuevos componentes y funcionalidades, analizando su impacto técnico, alcance e integración con sistemas existentes.',
          'Participé en la resolución de incidencias y la evolución de aplicaciones para proyectos del sector público, incluyendo soluciones licitadas a través de Mercado Público.'
        ],
        proyectos: 'BIP – Banco Integrado de Proyectos (Ministerio de Desarrollo Social); SSYO – Subsistema de Seguridades y Oportunidades (Ministerio de Desarrollo Social); AquaCIS (Aguas Andinas).'
      }
    ],
    educacionLabel: 'Educación',
    education: [
      { title: 'Magíster en Dirección de Sistemas y Tecnologías de la Información', school: 'OBS Business School – Universitat de Barcelona', dates: 'Ene 2025 – Mar 2026, Barcelona, España' },
      { title: 'Diplomado en Ingeniería en Desarrollo de Software', school: 'Universidad de Chile', dates: 'Ene 2014 – Dic 2014, Santiago, Chile' },
      { title: 'Ingeniería Civil en Informática', school: 'Universidad Tecnológica de Chile', dates: 'Ene 2011 – Dic 2011, La Serena, Chile' },
      { title: 'Ingeniería en Informática', school: 'Universidad Tecnológica de Chile', dates: 'Ene 2007 – Dic 2010, La Serena, Chile' }
    ],
    habilidadesLabel: 'Habilidades de liderazgo y gestión',
    skills: ['Engineering Leadership', 'People Management', 'Hiring & Recruiting', 'Performance Management', 'Career Development', 'Capacity & Headcount Planning', 'Org Design', 'Technical Strategy', 'Solution Architecture', 'Mentoring', 'Stakeholder Management', 'Agile Leadership', 'Incident Management', 'OKRs', 'Technical Decision Making'],
    tecnologiasLabel: 'Tecnologías',
    techGroups: [
      { title: 'Frontend', items: ['Angular', 'TypeScript'] },
      { title: 'Backend', items: ['Node.js', 'NestJS', 'TypeScript', 'Java Springboot', 'REST Services', 'SOAP Web Services', 'Redis', 'Oracle', 'PostgreSQL', 'PL/SQL', 'SQL', 'OAuth 2.0', 'JWT'] },
      { title: 'Arquitectura', items: ['Microservices', 'Event-Driven Architecture', 'Hexagonal Architecture', 'API Gateway (Kong)', 'diseño de APIs REST', 'integración con servicios SOAP'] },
      { title: 'DevOps / Cloud / Observabilidad', items: ['GitLab-CI', 'Docker', 'Terraform', 'Portainer', 'Cloudflare', 'GCP', 'AWS', 'Datadog', 'Looker', 'Fury'] },
      { title: 'IA', items: ['Claude Code', 'Cursor', 'Windsurf'] }
    ],
    languagesLine: ['Español: Nativo', 'Inglés: Nivel Avanzado (C1)']
  },
  en: {
    navResumen: 'Summary', navExperiencia: 'Experience', navEducacion: 'Education',
    navHabilidades: 'Skills', navTecnologias: 'Technologies',
    heroKicker: 'Resume',
    heroTitle: 'Software Engineering Manager — Engineering Team Leadership & Product Delivery',
    stats: [
      { label: '14+ Years of experience' },
      { label: "Master's in IT Management" },
      { label: 'Manager & Backend Dev' },
      { label: 'Builder of new leaders' }
    ],
    resumenLabel: 'Professional summary',
    resumen: 'Software engineer with 14 years of experience leading engineering teams and building technology products at large-scale organizations. Experienced in people management (technical hiring, capacity planning, career development and coordinating cross-functional teams of up to 21 professionals), combined with a strong technical foundation in microservices architecture and scalable systems. I have led technology modernization, observability, security and compliance initiatives, strengthening technical excellence and team growth to reach business goals. Seeking leadership positions as an Engineering Manager, driving high-performing teams and scalable, secure, high-impact technology products.',
    experienciaLabel: 'Experience',
    proyectosLabel: 'Projects:',
    experience: [
      {
        role: 'AI Travel Planner (tripilove.com)', company: 'Personal Project', place: 'Santiago, Chile', dates: '2026',
        bullets: [
          'Designed and built TripiLove (tripilove.com), a personal AI-powered travel planner integrated with Deepseek to recommend the best attractions for every trip.',
          'Implemented a microservices architecture with Angular v20 and Node.js, backed by PostgreSQL and Redis for data persistence, deployed on Vercel as serverless.',
          'Built the project entirely with Claude Code following Spec-Driven Development methodology, using agents for feature definition, component development, and QA on every deployment, maintaining a human-in-the-loop model for safe releases.'
        ], proyectos: null, isPersonalProject: true
      },
      {
        role: 'Software Project Leader', company: 'Mercado Libre', place: 'Santiago, Chile', dates: 'Jun 2025 – Nov 2025',
        bullets: [
          'Led a regional team of 8 developers across Chile, Colombia and Argentina, responsible for the main entry points to Mercado Play, a streaming platform with more than 6 million users.',
          'Defined technical solutions on a microservices architecture (Java Springboot), participating in the technology roadmap, architecture governance and quarterly capacity planning.',
          'Drove results-oriented engineering practices through OKRs and KPIs for availability, performance and quality.',
          'Increased platform traffic by 13% (approx. 800,000 users) through experimentation and UX optimization.',
          'Implemented observability dashboards and alerts; promoted the use of AI tools (Cursor, Windsurf) and led process automation with VerdiFlow (built on n8n).'
        ], proyectos: null
      },
      {
        role: 'Technical Leader', company: 'Banco Falabella', place: 'Santiago, Chile', dates: 'Oct 2021 – Dec 2024',
        bullets: [
          'Led multiple cross-functional teams, coordinating up to 21 professionals (developers, QAs and BAs).',
          'Was responsible for technical hiring, capacity planning and people development, coordinating with technical and business stakeholders to ensure delivery of strategic initiatives.',
          'Designed and validated microservices architectures with API Gateway and load balancers, ensuring scalable, secure and maintainable solutions.',
          'Oversaw technical quality and REST/SOAP integrations, leading the evolution of web and mobile platforms for Banco Falabella in Chile, Peru, Colombia and Mexico.'
        ], proyectos: null
      },
      {
        role: 'Fullstack Developer', company: 'Banco Falabella', place: 'Santiago, Chile', dates: 'Mar 2019 – Oct 2021',
        bullets: [
          'Started as a backend developer and grew into the technical Focal Point role, leading solution design in coordination with technical leads and Business Analysts.',
          'Took part in defining and estimating user stories under agile methodologies (Scrum and Kanban), ensuring high-quality implementations.',
          "Supported the team's technical growth through mentoring and onboarding.",
          'Was assigned to development cells serving several business lines within the Banco Falabella ecosystem.'
        ], proyectos: null
      },
      {
        role: 'Solutions Team Leader', company: 'Everis Chile', place: 'Santiago, Chile', dates: 'Jan 2015 – Mar 2019',
        bullets: [
          'Led the development team, coordinating task assignment, planning and work estimation, and tracking execution to ensure project goals were met.',
          'Worked closely with the functional team on requirements gathering, defining the technical scope of solutions.'
        ],
        proyectos: 'Rights-based Oversight System (Superintendency of Education); Application Migration (National Customs Service); Evolutionary Maintenance of SICOGEN II and SICOGEN II (Office of the Comptroller General); Case Management System (State Defense Council).'
      },
      {
        role: 'Solutions Analyst', company: 'Everis Chile', place: 'Santiago, Chile', dates: 'Aug 2012 – Dec 2014',
        bullets: [
          'Developed new components and features, analyzing their technical impact, scope and integration with existing systems.',
          'Took part in incident resolution and application evolution for public-sector projects, including solutions tendered through Mercado Público.'
        ],
        proyectos: 'BIP – Integrated Project Bank (Ministry of Social Development); SSYO – Social Security and Opportunities Subsystem (Ministry of Social Development); AquaCIS (Aguas Andinas).'
      }
    ],
    educacionLabel: 'Education',
    education: [
      { title: "Master's in Information Systems & Technology Management", school: 'OBS Business School – Universitat de Barcelona', dates: 'Jan 2025 – Mar 2026, Barcelona, Spain' },
      { title: 'Diploma in Software Development Engineering', school: 'Universidad de Chile', dates: 'Jan 2014 – Dec 2014, Santiago, Chile' },
      { title: 'Civil Engineering in Computer Science', school: 'Universidad Tecnológica de Chile', dates: 'Jan 2011 – Dec 2011, La Serena, Chile' },
      { title: 'Engineering in Computer Science', school: 'Universidad Tecnológica de Chile', dates: 'Jan 2007 – Dec 2010, La Serena, Chile' }
    ],
    habilidadesLabel: 'Leadership & management skills',
    skills: ['Engineering Leadership', 'People Management', 'Hiring & Recruiting', 'Performance Management', 'Career Development', 'Capacity & Headcount Planning', 'Org Design', 'Technical Strategy', 'Solution Architecture', 'Mentoring', 'Stakeholder Management', 'Agile Leadership', 'Incident Management', 'OKRs', 'Technical Decision Making'],
    tecnologiasLabel: 'Technologies',
    techGroups: [
      { title: 'Frontend', items: ['Angular', 'TypeScript'] },
      { title: 'Backend', items: ['Node.js', 'NestJS', 'TypeScript', 'Java Springboot', 'REST Services', 'SOAP Web Services', 'Redis', 'Oracle', 'PostgreSQL', 'PL/SQL', 'SQL', 'OAuth 2.0', 'JWT'] },
      { title: 'Architecture', items: ['Microservices', 'Event-Driven Architecture', 'Hexagonal Architecture', 'API Gateway (Kong)', 'REST API design', 'SOAP service integration'] },
      { title: 'DevOps / Cloud / Observability', items: ['GitLab-CI', 'Docker', 'Terraform', 'Portainer', 'Cloudflare', 'GCP', 'AWS', 'Datadog', 'Looker', 'Fury'] },
      { title: 'AI', items: ['Claude Code', 'Cursor', 'Windsurf'] }
    ],
    languagesLine: ['Spanish: Native', 'English: Advanced (C1)']
  }
};
