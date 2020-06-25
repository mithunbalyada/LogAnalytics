import React from 'react'
import styles from './sidebar.module.css'
import { NavLink } from 'react-router-dom'

export type SidebarProps = {
  sideBarOpen: boolean
  closeSideNav: (e: React.SyntheticEvent) => void
}

export const Sidebar = (props: SidebarProps) => {
  if (props.sideBarOpen) {
    return (
      <aside className={styles.sidenav}>
        <div className={styles.sidenavClose}>
          <span onClick={props.closeSideNav}>&times;</span>
        </div>
        <nav className={styles.sidenavNav}>
          <NavLink className={styles.sidenavNavlink} to="/" exact activeClassName={styles.sidenavActive}>
            Dashboard
          </NavLink>
          <NavLink to="/settings" className={styles.sidenavNavlink} activeClassName={styles.sidenavActive}>
            Settings
          </NavLink>
        </nav>
      </aside>
    )
  }

  return <></>
}
