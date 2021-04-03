import { HeaderContentProps } from './../interfaces/interfaces';

export function HeaderContent( props: HeaderContentProps) {
  const { title } = props;

  return (
    <header>
      <span className="category">Categoria:<span> {title} </span></span>
    </header>
  );
}