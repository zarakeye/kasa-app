import { useState, useEffect, useRef } from "react";
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
    setIsOpen(isOpen => isOpen === title ? '' : title);
  }

  useEffect(() => {
    if (isOpen.length > 0) {
      arrow.current?.classList.add(style.dropdown_arrow_open);
    } else {
      arrow.current?.classList.remove(style.dropdown_arrow_open);
    }
  }, [isOpen])

  return (
    <aside className={style.dropdown} >
      <header className={style.dropdown_header} onClick={handleClick }>
        <h3 className={style.dropdown_title}>{title}</h3>
        <div className={style.dropdown_arrow_container}>
          <img ref={arrow} className={style.dropdown_arrow} src={chevron} alt="flèche" />
        </div>
      </header>
      <div className={`style.dropdown_content ${isOpen ? style.open : '' }`}
      >
        {(isOpen.length > 0) && content}
      </div>
    </aside>
  )
}

export default Dropdown