import React, { ReactNode } from 'react'
import './styles.scss'

interface IButton {
  children: ReactNode;
  extraClass: ReactNode;
  onClick:()=>void
}
const Button = ({children,extraClass,onClick}:IButton) => {
  return (
    <div className={`button ${extraClass}`} onClick={onClick}>
        {children}
    </div>
  )
}

export default Button