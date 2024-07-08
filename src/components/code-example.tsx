import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SectionId } from '../model/section-id.enum';

const codeExample = `
type Props = Readonly<
  PropsWithChildren<{
    legendText?: string;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    className?: string;
  }>
>;

export function UiForm({children, legendText, onSubmit, className }: Props): ReactNode {
  return (
    <form
      className="bg-color1 p-2 shadow shadow-color4"
      onSubmit={onSubmit}
    >
      <fieldset className={clsx('p-2', className)}>
        <legend className="text-lg font-medium">{legendText}</legend>
        {children}
      </fieldset>
    </form>
  );
}
`;

export function CodeExample(): JSX.Element {
  return (
    <section id={SectionId.CodeExample}>
      <h2 className="heading">Code Example</h2>
      <div className="py-3 text-sm">
        <SyntaxHighlighter
          language="tsx"
          style={darcula}
          wrapLongLines
        >
          {codeExample.trim()}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
