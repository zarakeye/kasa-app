import { useEffect, useState } from "react";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({title, children}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const dropdownContent = document.querySelector('.dropdown_content');
    
    if (isOpen) {
      dropdownContent?.classList.add('visible');
    } else {
      dropdownContent?.classList.remove('visible');
    }
  }, [isOpen]);

  return (
    <aside className="dropdown">
      <header className="dropdown_header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="dropdown_title">{title}</h3>
        <span className="dropdown_arrow"></span>
      </header>
      <div className={`dropdown_content ${isOpen ? 'visible' : ''}`}>{children}</div>
      
    </aside>
  )
}

export default Dropdown