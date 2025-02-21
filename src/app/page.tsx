'use client';

import { CONNECTIONS } from '@/components/Connection/data';
import { SKILLS } from '@/components/Skill/data';
import { Magnetic } from '@/components/ui/magnetic';
import { WORK_EXPERIENCE } from '@/components/WorkExperience/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

function MagneticConnection({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.5}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full px-2.5 py-1 text-sm transition-colors duration-200"
      >
        {children}
      </a>
    </Magnetic>
  );
}

export default function Page() {
  return (
    <div className="space-y-24">
      <div className="flex-1">
        <p>
          Back-end developer passionate about JavaScript, TypeScript, and
          Node.js. Constantly exploring new technologies, and optimizing
          back-end solutions. Linux enthusiast.
        </p>
      </div>
      <div>
        <h3 className="mb-5 text-lg font-medium">Where I&apos;ve Worked</h3>

        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              className="border border-[#9580FF] rounded-[15px] p-4"
              key={exp.id}
            >
              <div className="flex flex-row justify-between">
                <div>
                  <h4>{exp.title}</h4>
                  <p className="opacity-65">{exp.company}</p>
                </div>
                <p>
                  {exp.start} - {exp.end}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-5 text-lg font-medium">Skills</h3>

        <div className="inline-grid grid-cols-5 gap-4 justify-items-center">
          {SKILLS.map((skill) => (
            <div key={skill.key} className="group">
              <FontAwesomeIcon
                className={cn(
                  skill.color,
                  'text-5xl transition-colors duration-150'
                )}
                icon={skill.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 opacity-65">
          Feel free to contact me at{' '}
          <a className="underline" href="mailto:douglastenfen@gmail.com">
            douglastenfen@gmail.com
          </a>
        </p>

        <div className="flex items-center justify-start space-x-3">
          {CONNECTIONS.map((connection) => (
            <MagneticConnection key={connection.key} link={connection.link}>
              <FontAwesomeIcon className="text-2xl" icon={connection.icon} />
            </MagneticConnection>
          ))}
        </div>
      </div>
    </div>
  );
}
