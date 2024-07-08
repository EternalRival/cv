import { Fragment } from 'react/jsx-runtime';
import { SectionId } from '../model/section-id.enum';
import clsx from 'clsx';

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
  },
  {
    label: 'virtual-keyboard',
    sourceHref: 'https://github.com/EternalRival/virtual-keyboard',
    deployHref: 'https://eternalrival.github.io/virtual-keyboard/',
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

      <div className="p-2">
        <div className="grid max-w-fit grid-cols-3 border border-primary-900">
          {projectsProps.map(({ label, sourceHref, deployHref, className }) => (
            <Fragment key={label}>
              <div className={'border border-primary-900 p-1 font-medium'}>
                <span className={className}>{label}</span>
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
                <a
                  href={deployHref}
                  className={clsx('link', className)}
                >
                  deploy
                </a>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
