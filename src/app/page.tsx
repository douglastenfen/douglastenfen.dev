'use client';

import { CONNECTIONS } from '@/components/Connection/data';
import { SKILLS } from '@/components/Skill/data';
import { Magnetic } from '@/components/ui/magnetic';
import { WORK_EXPERIENCE } from '@/components/WorkExperience/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import { useEffect, useState } from 'react';

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
  const [selectedExp, setSelectedExp] = useState<
    null | (typeof WORK_EXPERIENCE)[0]
  >(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedExp(null);
      }
    };

    if (selectedExp) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('overflow-hidden');
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedExp]);

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
              className="border border-[#9580FF] rounded-[15px] p-4 cursor-pointer hover:bg-[#9580FF]/10 transition"
              key={exp.id}
              onClick={() =>
                setSelectedExp({
                  ...exp,
                  description: exp.description || '',
                })
              }
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
        {selectedExp && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#22212C] rounded-xl p-6 max-w-md w-full shadow-lg relative">
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-2 right-3 hover:text-[#9580FF]"
              >
                ✕
              </button>
              <h4 className="text-xl font-semibold mb-2">
                {selectedExp.title}
              </h4>
              <p className="text-sm opacity-65 mb-1">{selectedExp.company}</p>
              <p className="text-sm mb-4">
                {selectedExp.start} - {selectedExp.end}
              </p>
              <div className="mb-4 text-sm md:text-base leading-relaxed max-w-[600px]">
                <p>{selectedExp.description}</p>
              </div>
              <hr />
              <div className="flex flex-wrap gap-2">
                {selectedExp.techs?.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#22212C] text-white px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
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
          <a className="underline" href="mailto:hi@douglastenfen.dev">
            hi@douglastenfen.dev
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
