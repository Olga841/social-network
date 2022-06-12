import React from "react";
import  s from './componrnts_styles/header.module.css'

export function Header() {
    return (
      <header className={s.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
      </header> 
    )
}