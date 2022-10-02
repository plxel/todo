import React from 'react';
import { NavBar } from './NavBar';
import s from './styles.module.css'

interface Props {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: Props) => (
  <div>
    <NavBar />
    <div className={s.content}>
      {children}
    </div>
  </div>
)