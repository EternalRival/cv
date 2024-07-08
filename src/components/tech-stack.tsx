import { SectionId } from '~/model/section-id.enum';

const techStackList = [
  'Git',
  'TypeScript / React',
  'Webpack / Vite / NextJS (Pages Router)',
  'TanstackRouter / React Router',
  'Zustand / RTK',
  'TanstackQuery / RTKQ',
  'RESTful Api / GraphQL',
  'CSS modules / SCSS / TailwindCSS / MUI',
  'Yup / Zod',
  'Jest / Vitest / Testing Library',
];

export function TechStack(): JSX.Element {
  return (
    <section id={SectionId.TechStack}>
      <h2 className="heading">Tech Stack</h2>
      <ul className="list">
        {techStackList.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
