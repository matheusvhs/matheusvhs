import type { Locale } from '../data/cv';

export const ui = {
  'pt-BR': {
    'nav.about': 'Sobre',
    'nav.skills': 'Skills',
    'nav.experience': 'Experiência',
    'nav.certifications': 'Certificações',
    'nav.contact': 'Contato',
    'hero.cta.contact': 'Fale comigo',
    'hero.cta.linkedin': 'LinkedIn',
    'about.title': 'Sobre',
    'about.education': 'Formação',
    'about.languages': 'Idiomas',
    'skills.title': 'Skills & Stack',
    'skills.subtitle': 'Tecnologias que uso no dia a dia',
    'experience.title': 'Experiência',
    'certifications.title': 'Certificações',
    'certifications.subtitle': 'Credenciais verificáveis com openbadge',
    'certifications.verify': 'Verificar credencial',
    'certifications.validUntil': 'Válido até',
    'certifications.permanent': 'Sem expiração',
    'contact.title': 'Vamos conversar',
    'contact.subtitle': 'Aberto a oportunidades em Engenharia de Dados.',
    'contact.cta': 'Enviar e-mail',
    'footer.rights': 'Todos os direitos reservados.',
    'theme.toggle': 'Alternar tema',
    'lang.toggle': 'English',
    'skip': 'Pular para o conteúdo',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.linkedin': 'LinkedIn',
    'about.title': 'About',
    'about.education': 'Education',
    'about.languages': 'Languages',
    'skills.title': 'Skills & Stack',
    'skills.subtitle': 'Technologies I work with every day',
    'experience.title': 'Experience',
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Verifiable credentials with openbadge',
    'certifications.verify': 'Verify credential',
    'certifications.validUntil': 'Valid until',
    'certifications.permanent': 'No expiration',
    'contact.title': "Let's talk",
    'contact.subtitle': 'Open to opportunities in Data Engineering.',
    'contact.cta': 'Send email',
    'footer.rights': 'All rights reserved.',
    'theme.toggle': 'Toggle theme',
    'lang.toggle': 'Português',
    'skip': 'Skip to content',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt-BR'];

export function useTranslations(locale: Locale) {
  const dict = ui[locale];
  return function t(key: UIKey): string {
    return dict[key];
  };
}
