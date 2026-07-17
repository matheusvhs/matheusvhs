// Fonte única de dados do currículo/portfólio.
// Campos traduzíveis usam { pt, en }; dados neutros (contato, URLs, datas) são simples.
// Sincronizado com o perfil do LinkedIn (linkedin.com/in/matheusvhs).

export type Locale = 'pt-BR' | 'en';
export type I18nText = { pt: string; en: string };

export interface SocialLink {
  name: string;
  url: string;
  icon: 'linkedin' | 'github' | 'mail';
}

export interface Skill {
  name: I18nText;
  items: string[];
  icon: string; // chave usada em Skills.astro
}

export interface Experience {
  role: I18nText;
  company: string;
  period: I18nText;
  description?: I18nText;
}

export interface Certification {
  title: string;
  issuer: string;
  /** Ano de emissão. Omitir quando desconhecido — o card simplesmente não mostra. */
  year?: number;
  /** 'YYYY-MM' = validade; null = sem expiração; omitido = desconhecido (não exibe). */
  validUntil?: string | null;
  verifyUrl: string;
  /** Imagem local do badge em /public/badges (fallback garantido). */
  image?: string;
  /**
   * Embed oficial (Accredible p/ Databricks & Oracle, Credly p/ Microsoft).
   * Cole aqui o HTML do botão "Add to profile → Embed" da plataforma.
   * Quando preenchido, BadgeCard renderiza o embed; senão usa image + verifyUrl.
   */
  embedHtml?: string;
}

export interface CV {
  name: string;
  /** Nome no <h1> em duas cores: `accent` recebe o gradiente. */
  nameParts: { lead: string; accent: string };
  /** Nome completo revelado no hover do <h1> — `accent` é o que "vhs" significa. */
  fullNameParts: { lead: string; accent: string };
  title: I18nText;
  tagline: I18nText;
  location: I18nText;
  phone: string;
  email: string;
  objective: I18nText;
  education: {
    degree: I18nText;
    institution: string;
    detail: I18nText;
  };
  languages: { name: I18nText; level: I18nText }[];
  social: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  certifications: Certification[];
}

export const cv: CV = {
  name: 'matheusvhs',
  nameParts: { lead: 'matheus', accent: 'vhs' },
  fullNameParts: { lead: 'Matheus', accent: 'Vieira Honório de Souza' },
  title: {
    pt: 'Engenheiro de Dados',
    en: 'Data Engineer',
  },
  tagline: {
    pt: 'Pipelines de dados, PySpark, Databricks e Snowflake — do dado bruto à decisão.',
    en: 'Data pipelines, PySpark, Databricks and Snowflake — from raw data to decisions.',
  },
  location: {
    pt: 'Santa Rita do Sapucaí — MG, Brasil',
    en: 'Santa Rita do Sapucaí — MG, Brazil',
  },
  phone: '(35) 98810-1900',
  email: 'contato@linuxsmt.com',
  objective: {
    pt: 'Atuo em Engenharia de Dados aplicando Python, SQL e PySpark para construir e manter pipelines e dashboards confiáveis em Databricks e Snowflake, transformando dados em valor para o negócio.',
    en: 'I work in Data Engineering applying Python, SQL and PySpark to build and maintain reliable pipelines and dashboards on Databricks and Snowflake, turning data into business value.',
  },
  education: {
    degree: {
      pt: 'Graduando em Engenharia de Software',
      en: 'B.Sc. in Software Engineering (in progress)',
    },
    institution: 'Instituto Nacional de Telecomunicações — INATEL',
    detail: {
      pt: 'Fev/2023 — previsão de conclusão em julho/2027',
      en: 'Feb 2023 — expected graduation: July 2027',
    },
  },
  languages: [
    {
      name: { pt: 'Português', en: 'Portuguese' },
      level: { pt: 'Nativo', en: 'Native' },
    },
    {
      name: { pt: 'Inglês', en: 'English' },
      level: { pt: 'Profissional', en: 'Professional working' },
    },
    {
      name: { pt: 'Espanhol', en: 'Spanish' },
      level: { pt: 'Básico', en: 'Basic' },
    },
  ],
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/matheusvhs/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/matheusvhs', icon: 'github' },
    { name: 'E-mail', url: 'mailto:contato@linuxsmt.com', icon: 'mail' },
  ],
  skills: [
    {
      name: { pt: 'Linguagens', en: 'Languages' },
      items: ['Python', 'SQL', 'Java', 'C++'],
      icon: 'code',
    },
    {
      name: { pt: 'Engenharia de Dados', en: 'Data Engineering' },
      items: ['PySpark', 'Databricks', 'Snowflake', 'Jupyter'],
      icon: 'database',
    },
    {
      name: { pt: 'Machine Learning', en: 'Machine Learning' },
      items: ['MLflow', 'Aprendizado de máquina', 'Projetos de migração'],
      icon: 'brain',
    },
    {
      name: { pt: 'Versionamento', en: 'Version Control' },
      items: ['Git', 'GitHub'],
      icon: 'git',
    },
    {
      name: { pt: 'Sistemas Embarcados', en: 'Embedded Systems' },
      items: ['ESP32', 'ATmega328P', 'Arduino', 'Raspberry Pi Pico'],
      icon: 'chip',
    },
  ],
  experience: [
    {
      role: { pt: 'Solutions Consultant I', en: 'Solutions Consultant I' },
      company: 'Datasolutec',
      period: {
        pt: '04/2026 — atual · São Paulo (remoto)',
        en: 'Apr 2026 — present · São Paulo (remote)',
      },
      description: {
        pt: 'Desenvolvimento de pipelines de dados com PySpark e SQL, além de manutenção de dashboards em Databricks.',
        en: 'Building data pipelines with PySpark and SQL, plus maintaining dashboards on Databricks.',
      },
    },
    {
      role: { pt: 'Trainee', en: 'Trainee' },
      company: 'Datasolutec',
      period: {
        pt: '10/2025 — 03/2026 · São Paulo (remoto)',
        en: 'Oct 2025 — Mar 2026 · São Paulo (remote)',
      },
      description: {
        pt: 'Desenvolvimento de agente de IA com RAG na plataforma Databricks e migração de runtime do Databricks em um cliente do setor bancário.',
        en: 'Built an AI agent with RAG on the Databricks platform and migrated the Databricks runtime for a banking client.',
      },
    },
    {
      role: {
        pt: 'Bolsista de Iniciação Científica (eHealth Innovation Center)',
        en: 'Scholarship Holder at eHealth Innovation Center',
      },
      company: 'Inatel',
      period: {
        pt: '04/2025 — 10/2025 · Santa Rita do Sapucaí (presencial)',
        en: 'Apr 2025 — Oct 2025 · Santa Rita do Sapucaí (on-site)',
      },
      description: {
        pt: 'Desenvolvimento de firmware e hardware com ESP32 para prevenção de quedas em ambiente hospitalar.',
        en: 'Firmware and hardware development with ESP32 for fall prevention in hospital environments.',
      },
    },
  ],
  certifications: [
    {
      title: 'Databricks Certified Data Engineer Professional',
      issuer: 'Databricks',
      year: 2026,
      validUntil: '2028-01',
      verifyUrl: 'https://credentials.databricks.com/74cd9817-c39e-414c-bd9b-fb6ed82bf504',
      image: '/badges/databricks-data-engineer-professional.png',
      // embedHtml: '<!-- cole aqui o embed do Accredible (Add to profile → Embed) -->',
    },
    {
      // Nome conforme a arte do badge; o LinkedIn lista como "Machine Learning Professional".
      title: 'Databricks Certified Machine Learning Engineer Professional',
      issuer: 'Databricks',
      year: 2026,
      validUntil: '2028-07', // expira em 16/07/2028
      verifyUrl: 'https://credentials.databricks.com/64cca01f-ef2c-4035-9f02-0a43d9198248',
      image: '/badges/databricks-machine-learning-professional.png',
    },
    {
      title: 'Microsoft Certified: Fabric Analytics Engineer Associate',
      issuer: 'Microsoft',
      year: 2026,
      validUntil: '2027-01',
      verifyUrl:
        'https://learn.microsoft.com/api/credentials/share/pt-br/Matheus-Souza/BCBD64455517451B?sharingId',
      // Badge oficial de nível "Associate" (o mesmo exibido pelo Microsoft Learn).
      image: '/badges/microsoft-fabric-analytics-engineer.svg',
      // embedHtml: '<!-- cole aqui o embed do Credly -->',
    },
    {
      title: 'Microsoft Certified: Fabric Data Engineer Associate',
      issuer: 'Microsoft',
      year: 2026,
      validUntil: '2027-03', // expira em 19/03/2027
      verifyUrl: 'https://learn.microsoft.com/en-us/users/Matheus-Souza/credentials/6987A21E9B80EBB',
      // Badge oficial de nível "Associate" (o mesmo exibido pelo Microsoft Learn).
      image: '/badges/microsoft-fabric-analytics-engineer.svg',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle',
      year: 2025,
      validUntil: '2027-10',
      verifyUrl:
        'https://catalog-education.oracle.com/ords/certview/sharebadge?id=6EF083BFEFB98A530A7FB5628A3CFFC4F5FD48C585578936E0F577ABCC7DACA3',
      image: '/badges/oracle-generative-ai-professional.png',
      // embedHtml: '<!-- cole aqui o embed do Accredible/Credly -->',
    },
  ],
};

export function pick(text: I18nText, locale: Locale): string {
  return locale === 'en' ? text.en : text.pt;
}
