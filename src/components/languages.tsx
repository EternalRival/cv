import { SectionId } from '~/model/section-id.enum';

const languagesList = ['Russian (Native)', 'English (~A1)'];

export function Languages(): JSX.Element {
  return (
    <section id={SectionId.Languages}>
      <h2 className="heading">Languages</h2>
      <ul className="list">
        {languagesList.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
