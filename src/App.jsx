import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Header from './widgets/header/Header'
import Footer from './widgets/footer/Footer'
import HomePage from './pages/home/HomePage'
import ServicesPage from './pages/services/ServicesPage'
import AboutPage from './pages/about/AboutPage'
import ExtraPage from './pages/extra/ExtraPage'
import FreeGuidePage from './pages/free-guide/FreeGuidePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/free-guide" element={<FreeGuidePage />} />
      </Route>
    </Routes>
  )
}