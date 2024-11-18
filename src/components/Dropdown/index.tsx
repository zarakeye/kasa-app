import { useEffect, useState } from "react";
import './dropdown.scss';
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
    <aside className="dropdown">
      <header className="dropdown_header" onClick={() => handleClick()}>
        <h3 className="dropdown_title">{title}</h3>
        <img className='dropdown_arrow' src={chevron} alt="flèche" />
      </header>
      <div className='dropdown_content'>{(isOpen.length > 0) && content}</div>
      
    </aside>
  )
}

export default Dropdown