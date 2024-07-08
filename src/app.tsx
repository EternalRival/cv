import {
  CodeExample,
  Contacts,
  Education,
  Experience,
  GithubLink,
  Languages,
  NavBar,
  Person,
  Summary,
  TechStack,
} from '~/components';

export function App(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col justify-between gap-2 bg-neutral-300">
      <header className="bg-primary-400 p-2 [box-shadow:inset_0_-1px_3px_var(--tw-shadow-color)]">
        <div className="mx-auto flex h-10 max-w-screen-xl justify-center md:justify-end">
          <NavBar />
        </div>
      </header>
      <main className="p-2">
        <div className="mx-auto flex min-w-80 max-w-screen-xl flex-col shadow shadow-primary-900 md:flex-row">
          <div className="main-part flex shrink-0 flex-col">
            <Person />
            <Contacts />
            <TechStack />
            <Languages />
          </div>
          <div className="secondary-part grow">
            <Summary />
            <CodeExample />
            <Experience />
            <Education />
          </div>
        </div>
      </main>
      <footer className="flex justify-center bg-primary-400 p-2 [box-shadow:inset_0_-1px_3px_var(--tw-shadow-color)]">
        <GithubLink />
      </footer>
    </div>
  );
}
