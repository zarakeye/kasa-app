import React from 'react'
import style from './DropdownContent.module.scss'

interface DropdownContentProps {
  content: string | string[];
  isOpen: boolean;
}

/**
 * The DropdownContent component is used to display the content of a Dropdown.
 *
 * It will display its content as either a list of items or a single text block,
 * depending on the type of the content prop.
 *
 * The isOpen prop is used to toggle the visibility of the content.
 *
 * @prop {string | string[]} content - The content to be displayed. Can be either a string or an array of strings.
 * @prop {boolean} isOpen - Whether the content should be visible or not.
 *
 * @return {JSX.Element} The JSX element representing the dropdown content.
 */
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