import React from 'react'
import style from './LoaderWrapper.module.scss'

interface LoaderWrapperProps {
  children: React.ReactNode
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({children}) => {
  return (
    <div className={style.loader_wrapper}>
      {children}
    </div>
  )
}

export default LoaderWrapper