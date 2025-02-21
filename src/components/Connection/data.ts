import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLetterboxd, faLinkedin } from '@fortawesome/free-brands-svg-icons';

type Connection = {
  icon: IconProp;
  key: string;
  name: string;
  link: string;
};

export const CONNECTIONS: Connection[] = [
  {
    icon: faGithub,
    key: 'github',
    name: 'Github',
    link: 'https://github.com/douglastenfen',
  },
  {
    icon: faLinkedin,
    key: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/douglas-tenfen-de-oliveira/',
  },
  {
    icon: faLetterboxd,
    key: 'letterboxd',
    name: 'Letterboxd',
    link: 'https://letterboxd.com/od0uglas/',
  }
];
