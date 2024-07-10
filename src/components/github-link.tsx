import githubIconSrc from '~/assets/er-github.png';

import type { JSX } from 'react';

export function GithubLink(): JSX.Element {
  return (
    <a
      href="http://github.com/EternalRival/"
      target="_blank"
      className="h-10 duration-150 hover:scale-110"
    >
      <img
        src={githubIconSrc}
        alt="author's github"
        className="h-full"
      />
    </a>
  );
}
