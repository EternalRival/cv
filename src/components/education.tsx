import { SectionId } from '../model/section-id.enum';

const coursesProps = [
  { label: 'RSSchool JSFE2022Q3', certificateUrl: 'https://app.rs.school/certificate/yuh2boy4' },
  { label: 'RSSchool NodeJS2023Q2', certificateUrl: 'https://app.rs.school/certificate/syc0x9nh' },
  { label: 'RSSchool React2023Q4', certificateUrl: 'https://app.rs.school/certificate/zvg9ydl2' },
];

export function Education(): JSX.Element {
  return (
    <section id={SectionId.Education}>
      <h2 className="heading">Education</h2>
      <ul className="list py-3">
        {coursesProps.map(({ certificateUrl, label }) => (
          <li key={label}>
            {label} (
            <a
              href={certificateUrl}
              className="link"
              target="_blank"
            >
              Certificate
            </a>
            )
          </li>
        ))}
      </ul>
    </section>
  );
}
