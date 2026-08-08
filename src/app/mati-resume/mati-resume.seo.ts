import { ResumeContent } from './mati-resume.content';

const PERSON_NAME = 'Matías Fuentes Pérez';
const PERSON_EMAIL = 'matias.fuentes.p@hotmail.com';
const PERSON_PHONE = '+56992291862';
const LINKEDIN_URL = 'https://linkedin.com/in/matias-fuentes-perez';

export function buildResumeTitle(content: ResumeContent): string {
  return `${PERSON_NAME} — ${content.heroTitle}`;
}

export function buildResumeStructuredData(content: ResumeContent): object {
  // jobTitle/worksFor should reflect a real employer, not a personal project.
  const primaryJob =
    content.experience.find((job) => !job.isPersonalProject) ?? content.experience[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON_NAME,
    jobTitle: primaryJob?.role,
    description: content.resumen,
    email: `mailto:${PERSON_EMAIL}`,
    telephone: PERSON_PHONE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressCountry: 'CL'
    },
    sameAs: [LINKEDIN_URL],
    knowsLanguage: ['es', 'en'],
    worksFor: primaryJob
      ? { '@type': 'Organization', name: primaryJob.company }
      : undefined,
    alumniOf: content.education.map((ed) => ({
      '@type': 'EducationalOrganization',
      name: ed.school
    })),
    knowsAbout: content.techGroups.flatMap((group) => group.items)
  };
}
