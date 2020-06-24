import React, { ReactNode } from 'react'
import { Navbar } from '../navbar/Navbar'
import styles from './layout.module.css'

export type LayoutProps = {
  children: ReactNode
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.mainContent}>{props.children}</div>
      </main>

      <footer className={styles.footer}>
        <div>2020: Log Analytics</div>
      </footer>
    </div>
  )
}
