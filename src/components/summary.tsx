import { SectionId } from '~/model/section-id.enum';

export function Summary(): JSX.Element {
  return (
    <section id={SectionId.Summary}>
      <h2 className="heading">Summary</h2>
      <p className="py-3">
        The main goal is to get some Front-End dev skills for fun and profit. Strong sides are logical thinking/mindset
        and assiduity.
      </p>
    </section>
  );
}
