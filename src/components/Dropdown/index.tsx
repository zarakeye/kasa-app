import React, { useState, useEffect, useRef } from "react";
import style from './Dropdown.module.scss';
import chevron from '../../assets/pictures/chevron.svg'
import DropdownContent from "../DropdownContent";

interface DropdownProps {
  title: string;
  content: string | string[];
}

const Dropdown: React.FC<DropdownProps> = ({title, content}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const arrow = useRef<HTMLImageElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (isOpen) {
      arrow.current?.classList.add(style.dropdown_arrow_open);
    } else {
      arrow.current?.classList.remove(style.dropdown_arrow_open);
    }
  }, [isOpen])

  // const renderContent = () => {
  //   return Array.isArray(content) ? (
  //     <ul className={`${style.dropdown_content_list } ${isOpen ? style.open : ''}`}>
  //       {content.map((item, index) => (
  //         <li key={index} className={style.dropdown_content_item}>
  //           {item}
  //         </li>
  //       ))}
  //     </ul>
  //   ) : (
  //     <p className={`${style.dropdown_content_text} ${isOpen ? style.open : ''}`}>{content}</p>
  //   )
  // }

  return (
    <aside className={style.dropdown} >
      <header className={style.dropdown_header} onClick={() => setIsOpen(!isOpen) }>
        <h3 className={style.dropdown_title}>{title}</h3>
        <div className={style.dropdown_arrow_container}>
          <img ref={arrow} className={style.dropdown_arrow} src={chevron} alt="flèche" />
        </div>
      </header>
        <div
          ref={contentWrapperRef}
          className={`${style.dropdown_content_wrapper} ${isOpen ? style.open : ''}`}
        >
        {/* {isOpen && ( */}
          <div
            ref={contentRef}
            className={`${style.dropdown_content_container} ${isOpen ? style.open : ''}`} id={style.dropdown_content}
          >
            <DropdownContent content={content} isOpen={isOpen} />
          </div>
        {/* )} */}
      </div>
    </aside>
  )
}

export default Dropdown