import React, { useState, useEffect, useRef } from "react";
import style from './Dropdown.module.scss';
import chevron from '../../assets/pictures/chevron.svg'
import DropdownContent from "../DropdownContent";

interface DropdownProps {
  title: string;
  content: string | string[];
}

/**
 * The Dropdown component is used to display a dropdown content.
 *
 * It will display the content, passed as a prop, as either a list of items or a single text block,
 * depending on the type of the content.
 *
 * The isOpen prop is used to toggle the visibility of the content.
 *
 * @prop {string} title - The title of the dropdown.
 * @prop {string | string[]} content - The content to be displayed. Can be either a string or an array of strings.
 *
 * @return {JSX.Element} The JSX element representing the dropdown.
 */
const Dropdown: React.FC<DropdownProps> = ({title, content}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const arrow = useRef<HTMLImageElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      arrow.current?.classList.add(style.dropdown_arrow_open);
    } else {
      arrow.current?.classList.remove(style.dropdown_arrow_open);
    }
  }, [isOpen])

  return (
    <aside className={style.dropdown} >
      <header className={style.dropdown_header} onClick={() => setIsOpen(!isOpen) }>
        <h3 className={style.dropdown_title}>{title}</h3>
        <div className={style.dropdown_arrow_container}>
          <img ref={arrow} className={`${style.dropdown_arrow } ${isOpen ? style.open : ''}`} src={chevron} alt="flèche" />
        </div>
      </header>
        <div
          ref={contentWrapperRef}
          className={`${style.dropdown_content_wrapper} ${isOpen ? style.open : ''}`}
        >
          <DropdownContent content={content} isOpen={isOpen} />
        </div>
    </aside>
  )
}

export default Dropdown