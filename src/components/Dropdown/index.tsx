import { useEffect, useState } from "react";
import style from './Dropdown.module.scss';
import chevron from '../../assets/pictures/chevron.svg'

interface DropdownProps {
  title: string;
  content: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({title, content}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<string>('');

  useEffect(() => {
    const dropdownArrow = document.querySelector('.dropdown_arrow');
    
    if (isOpen) {
      dropdownArrow?.classList.add('open');
    } else {
      dropdownArrow?.classList.remove('open');
    }
  }, [isOpen]);

  const handleClick = () => {
    if (isOpen.length > 0) {
      setIsOpen('')
    } else{
      setIsOpen(title);
    }
  }

  return (
    <aside className={style.dropdown}>
      <header className={style.dropdown_header} onClick={() => handleClick()}>
        <h3 className={style.dropdown_title}>{title}</h3>
        <img className={style.dropdown_arrow} src={chevron} alt="flèche" />
      </header>
      <div className={style.dropdown_content}>{(isOpen.length > 0) && content}</div>
      
    </aside>
  )
}

export default Dropdown