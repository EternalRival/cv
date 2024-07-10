import clsx from 'clsx';
import { Fragment } from 'react/jsx-runtime';
import { SectionId } from '~/model/section-id.enum';
import { GroupIcon } from './group-icon';

import type { JSX } from 'react';

const projectsProps = [
  {
    label: 'gem-puzzle',
    sourceHref: 'https://github.com/EternalRival/RSSchool-JSFE2022Q3/tree/main/gem-puzzle',
    deployHref: 'https://eternalrival.github.io/RSSchool-JSFE2022Q3/gem-puzzle/',
  },
  {
    label: 'songbird',
    sourceHref: 'https://github.com/EternalRival/RSSchool-JSFE2022Q3/tree/main/songbird',
    deployHref: 'https://eternalrival.github.io/RSSchool-JSFE2022Q3/songbird/',
  },
  {
    label: 'online-store',
    sourceHref: 'https://github.com/EternalRival/RSSchool-JSFE2022Q3/tree/main/online-store',
    deployHref: 'https://eternalrival.github.io/RSSchool-JSFE2022Q3/online-store/',
    isTeamProject: true,
  },
  {
    label: 'what do you meme',
    sourceHref: 'https://github.com/EternalRival/RSSchool-JSFE2022Q3/tree/main/what-do-you-meme/server',
    isTeamProject: true,
  },
  {
    label: 'virtual-keyboard',
    sourceHref: 'https://github.com/EternalRival/virtual-keyboard',
    deployHref: 'https://eternalrival.github.io/virtual-keyboard/',
  },
  {
    label: 'rsschool-tools',
    sourceHref: 'https://github.com/EternalRival/er-rsschool-tools',
    deployHref: 'https://er-rsschool-tools.vercel.app/',
  },
  {
    label: 'rsschool-gratitude-summary',
    sourceHref: 'https://github.com/EternalRival/rsschool-gratitude-summary',
    deployHref: 'https://private-user-images.githubusercontent.com/59611223/263753501-ff506148-8db5-4f5f-acd9-7c86923feb9f.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA0NTYzMTUsIm5iZiI6MTcyMDQ1NjAxNSwicGF0aCI6Ii81OTYxMTIyMy8yNjM3NTM1MDEtZmY1MDYxNDgtOGRiNS00ZjVmLWFjZDktN2M4NjkyM2ZlYjlmLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA4VDE2MjY1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU5NWQwMDQ1YzQ5OTlkYWVhMTc3Y2UxMTlhZDgxYzE2MjAxMmVlMjJiMzQ4YmZiNDQ3Y2YzNDc0ODg4MTU3NDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.HGVF6EvOeeoA8--yXx3PfopUMzNvkW9zZh6F5FJEoI4',
  },
  {
    label: 'home-library-service',
    sourceHref: 'https://github.com/EternalRival/RSSchool-NodeJS2023Q2/tree/main/07-home-library-service',
  },
  {
    label: 'graphiql-app',
    sourceHref: 'https://github.com/EternalRival/GraphiQL-App',
    isTeamProject: true,
  },
  {
    label: 'e-commerce-app',
    sourceHref: 'https://github.com/EternalRival/eCommerce',
    deployHref: 'https://er-e-commerce-app.vercel.app/',
    className: 'opacity-50',
  },
];

export function Experience(): JSX.Element {
  return (
    <section id={SectionId.Experience}>
      <h2 className="heading">Experience</h2>

      <div className="p-2 text-sm">
        <div className="grid max-w-fit grid-cols-3 border border-primary-900">
          {projectsProps.map(({ label, sourceHref, deployHref, className, isTeamProject }) => (
            <Fragment key={label}>
              <div
                className={'border border-primary-900 p-1 font-medium'}
                title={isTeamProject ? 'Team project' : 'Solo project'}
              >
                <span className={className}>{label}</span> {isTeamProject && <GroupIcon />}
              </div>
              <div className="border border-primary-900 p-1 text-center">
                <a
                  href={sourceHref}
                  className={clsx('link', className)}
                >
                  source
                </a>
              </div>
              <div className="border border-primary-900 p-1 text-center">
                {deployHref ? (
                  <a
                    href={deployHref}
                    className={clsx('link', className)}
                  >
                    deploy
                  </a>
                ) : (
                  '-'
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
