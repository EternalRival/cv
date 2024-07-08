import clsx from 'clsx';
import { SectionId } from '~/model/section-id.enum';

const navBarProps = [
  { label: 'Contacts', sectionId: SectionId.Contacts, className: 'hidden md:flex' },
  { label: 'Skills', sectionId: SectionId.TechStack, className: 'hidden md:flex' },
  { label: 'Languages', sectionId: SectionId.Languages, className: 'hidden md:flex' },
  { label: 'Summary', sectionId: SectionId.Summary, className: '' },
  { label: 'Code', sectionId: SectionId.CodeExample, className: '' },
  { label: 'Experience', sectionId: SectionId.Experience, className: '' },
  { label: 'Education', sectionId: SectionId.Education, className: '' },
];

export function NavBar(): JSX.Element {
  return (
    <nav>
      <ul className="flex">
        {navBarProps.map(({ label, sectionId, className }) => (
          <li
            key={label}
            className={clsx('flex', className)}
          >
            <a
              href={`#${sectionId}`}
              className="p-2 font-medium duration-100 hover:scale-110"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
