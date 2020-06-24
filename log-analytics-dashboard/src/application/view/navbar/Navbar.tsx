import React, { useState } from 'react'
import styles from './navbar.module.css'
import { Sidebar } from './Sidebar'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const openSideNav = (event: React.SyntheticEvent) => {
    setSideBarOpen(true)
  }

  const closeSideNav = (event: React.SyntheticEvent) => {
    setSideBarOpen(false)
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerHamburger}>
          <span onClick={openSideNav}>
            <div className={styles.headerHamburgers}></div>
            <div className={styles.headerHamburgers}></div>
            <div className={styles.headerHamburgers}></div>
          </span>
        </div>
        <div className={styles.headerLogo}>
          <h2 className={styles.headerText}>
            Log <span className="yellow-text">Analytics</span>
          </h2>
        </div>
        <div className={styles.headerNav}>
          <nav>
            <NavLink className={styles.headerNavAnchor} to="/" exact activeClassName={styles.headerNavActive}>
              Dashboard
            </NavLink>
            <NavLink className={styles.headerNavAnchor} to="/settings" activeClassName={styles.headerNavActive}>
              Settings
            </NavLink>
          </nav>
        </div>
      </header>
      <Sidebar sideBarOpen={sideBarOpen} closeSideNav={closeSideNav} />
    </div>
  )
}
