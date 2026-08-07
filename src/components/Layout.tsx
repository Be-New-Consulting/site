import { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../styles/components.css'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
