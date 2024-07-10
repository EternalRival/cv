import { SectionId } from '~/model/section-id.enum';

import type { JSX } from 'react';

const contactsProps = [
  { title: 'GitHub', label: '@EternalRival', href: 'https://github.com/EternalRival/' },
  { title: 'E-Mail', label: 'erdevelopment8@gmail.com', href: 'mailto:erdevelopment8@gmail.com' },
  { title: 'Discord', label: 'Eternal Rival#0309', href: 'https://discordapp.com/users/392430817625899008' },
  { title: 'Telegram', label: '@Eternal_Rival', href: 'https://t.me/Eternal_Rival' },
];

export function Contacts(): JSX.Element {
  return (
    <section id={SectionId.Contacts}>
      <h2 className="heading">Contacts</h2>
      <ul className="list">
        {contactsProps.map(({ href, label, title }) => (
          <li key={title}>
            <b>{title}:</b>{' '}
            <a
              href={href}
              className="link"
              target="_blank"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
