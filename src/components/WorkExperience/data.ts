type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  id: string;
  description?: string;
  techs?: string[];
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Meu Crediário',
    title: 'Mid-level Software Developer',
    start: '2025',
    end: 'present',
    id: 'work1',
  },
  {
    company: 'Vexta Systems',
    title: 'Back-end Developer',
    start: '2022',
    end: '2025',
    id: 'work2',
    description: `At Vexta, I was responsible for developing and integrating critical systems into the company’s ERP for the textile industry. I led the development of an API for issuing electronic fiscal documents, including MFe support for clients in Ceará, Brazil. Additionally, I created a shipping integration API with Correios for generating pre-postings and calculating shipping rates. I also developed an RFID-based API used in client products to enhance inventory control. I organized Vexta’s GitHub structure to streamline CI/CD with GitHub Actions, automated SQL script generation using Python and Google Colab, and performed Linux server maintenance for application hosting.`,
    techs: [
      'Node.js',
      'TypeScript',
      'JavaScript',
      'SQL Server',
      'Linux',
      'Shell Script',
      'MongoDB',
      'PM2',
      'REST',
      'Python',
      'Git',
    ],
  },
  {
    company: 'IPM Sistemas',
    title: 'Delphi Developer',
    start: '2021',
    end: '2022',
    id: 'work3',
    description: `I contributed to the maintenance of a data migration system focused on the healthcare sector, working directly on bug fixes and code improvements. In addition to maintaining the application, I developed new features to enhance its functionality and reliability. My role also included acting as a data migration analyst, analyzing data structures and planning efficient migration strategies. I was responsible for managing databases, ensuring the integrity and performance of all migration processes throughout the project.`,
    techs: [
      'Delphi',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Data Analysis',
      'Database Management',
      'Bug Resolution',
    ],
  },
  {
    company: 'Magazord',
    title: 'QA Intern',
    start: '2019',
    end: '2020',
    id: 'work4',
    description: `I was responsible for testing new features of the company’s e-commerce management system as well as client websites, ensuring quality and reliability before deployment. I worked closely with the development team to identify and resolve bugs during the pre-release phase. Additionally, I created and maintained detailed test cases to guarantee full coverage of core functionalities. I also documented procedures and best practices to support future testing efforts and team onboarding.`,
    techs: [
      'Software Testing',
      'E-commerce Management',
      'QA',
      'Team Collaboration',
      'Software Documentation',
    ],
  },
];
