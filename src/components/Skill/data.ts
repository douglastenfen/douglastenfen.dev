import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCss3,
  faDocker,
  faGitAlt,
  faGithubSquare,
  faHtml5,
  faJs,
  faLinux,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

type Skill = {
  icon: IconProp;
  key: string;
  name: string;
  color: string;
};

export const SKILLS: Skill[] = [
  {
    icon: faNodeJs,
    key: 'nodejs',
    name: 'Node.js',
    color: 'group-hover:text-[#8AFF80]',
  },
  {
    icon: faDocker,
    key: 'docker',
    name: 'Docker',
    color: 'group-hover:text-[#92FFFF]',
  },
  {
    icon: faJs,
    key: 'javascript',
    name: 'JavaScript',
    color: 'group-hover:text-[#FFFF80]',
  },
  {
    icon: faLinux,
    key: 'linux',
    name: 'Linux',
    color: 'group-hover:text-[#676B79]',
  },
  {
    icon: faGitAlt,
    key: 'git',
    name: 'Git',
    color: 'group-hover:text-[#FFCA80]',
  },
  {
    icon: faGithubSquare,
    key: 'github',
    name: 'GitHub',
    color: 'group-hover:text-[#676B79]',
  },
  {
    icon: faDatabase,
    key: 'database',
    name: 'Database',
    color: 'group-hover:text-[#FF80BF]',
  },
  {
    icon: faHtml5,
    key: 'html',
    name: 'HTML',
    color: 'group-hover:text-[#FFCA80]',
  },
  {
    icon: faCss3,
    key: 'css',
    name: 'CSS',
    color: 'group-hover:text-[#92FFFF]',
  },
  {
    icon: faReact,
    key: 'react',
    name: 'React',
    color: 'group-hover:text-[#92FFFF]',
  },
];
