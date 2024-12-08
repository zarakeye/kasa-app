import React from 'react'
import style from './DropdownContent.module.scss'

interface DropdownContentProps {
  content: string | string[];
  isOpen: boolean;
}

const DropdownContent: React.FC<DropdownContentProps> = ({content, isOpen}) => {
  return Array.isArray(content) ? (
    <ul className={`${style.dropdown_content_list } ${isOpen ? style.open : ''}`}>
      {content.map((item, index) => (
        <li key={index} className={style.dropdown_content_item}>
          {item}
        </li>
      ))}
    </ul>
  ) : (
    <p className={`${style.dropdown_content_text} ${isOpen ? style.open : ''}`}>{content}</p>
  )
}

export default DropdownContent