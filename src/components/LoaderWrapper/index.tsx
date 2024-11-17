import React from 'react'
import './LoaderWrapper.scss'

interface LoaderWrapperProps {
  children: React.ReactNode
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({children}) => {
  return (
    <div className="loader_wrapper">
      {children}
    </div>
  )
}

export default LoaderWrapper