import { useState, useRef } from "react";
import style from './Dropdown.module.scss';
import chevron from '../../assets/pictures/chevron.svg'

interface DropdownProps {
  title: string;
  content: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({title, content}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<string>('');
  const arrow = useRef<HTMLImageElement>(null);

  const handleClick = () => {
    arrow.current?.classList.toggle('open');
    setIsOpen(isOpen => isOpen === title ? '' : title);
  }

  return (
    <aside className={style.dropdown}>
      <header className={style.dropdown_header} onClick={handleClick}>
        <h3 className={style.dropdown_title}>{title}</h3>
        <img ref={arrow} className={style.dropdown_arrow} src={chevron} alt="flèche" />
      </header>
      <div className={style.dropdown_content}>{(isOpen.length > 0) && content}</div>
    </aside>
  )
}

export default Dropdown