import React from 'react'
import style from './Container.module.scss'

interface ContainerProps {
  children: React.ReactNode
}

/**
 * A functional component that wraps its children within a styled div container.
 *
 * @param {ContainerProps} props - The properties passed to the Container component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @returns {JSX.Element} A div element styled with the container class.
 */
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default Container