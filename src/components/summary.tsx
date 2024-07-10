import { SectionId } from '~/model/section-id.enum';

import type { JSX } from 'react';

export function Summary(): JSX.Element {
  return (
    <section id={SectionId.Summary}>
      <h2 className="heading">Summary</h2>
      <p className="py-3">
        I became interested in programming in July 2020 as a hobby. Learned some basics on my own, developed an app
        called IQTestRPM (Raven's Progressive Matrices), released it on Google Play (1.5k installs and 4.54★). When the
        app's download count started to go up, I realized that I enjoy creating apps that people use. For a while, I
        abandoned the hobby for personal reasons. Later came back to development, started learning JS on my own, and
        then the rest of the technology frontend stack (and a bit of the backend). Completed JS, Node and React courses
        at RSSchool (courses from EPAM), participated in team projects and still volunteer there, helping newcomers with
        various issues. I am offering myself for the position of Frontend Software Developer at a cost of 1400$
      </p>
    </section>
  );
}
