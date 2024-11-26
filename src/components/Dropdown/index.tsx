import React, { useState, useEffect, useRef } from "react";
import style from './Dropdown.module.scss';
import chevron from '../../assets/pictures/chevron.svg'

interface DropdownProps {
  title: string;
  content: string | string[];
}

const Dropdown: React.FC<DropdownProps> = ({title, content}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const arrow = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef && contentRef.current) {
      arrow.current?.classList.add(style.dropdown_arrow_open);
      contentRef.current.style.height = `${contentRef.current?.scrollHeight}px`;
    } else if (contentRef && contentRef.current) {
      arrow.current?.classList.remove(style.dropdown_arrow_open);
      contentRef.current.style.height = '0';
    }
  }, [isOpen])

  return (
    <aside className={style.dropdown} >
      <header className={style.dropdown_header} onClick={() => setIsOpen(!isOpen) }>
        <h3 className={style.dropdown_title}>{title}</h3>
        <div className={style.dropdown_arrow_container}>
          <img ref={arrow} className={style.dropdown_arrow} src={chevron} alt="flèche" />
        </div>
      </header>
      {/* {isOpen &&  */}
        <div ref={contentRef} className={isOpen ? `${style.dropdown_content_wrapper} ${style.open}` : `${style.dropdown_content_wrapper} ${style.close}`}>
          <div className={isOpen ? `${style.dropdown_content} ${style.open}` : `${style.dropdown_content} ${style.close}`} ref={contentRef}>
            {Array.isArray(content)
              ? <ul className={style.dropdown_content_list}>
                  {content.map((item, index) => <li key={index} className={style.dropdown_content_item}>{item}</li>)}
                </ul>
              : <p className={style.dropdown_content_text}>{content}</p>
            }
          </div>
        </div>
      {/* } */}
    </aside>
  )
}

export default Dropdown