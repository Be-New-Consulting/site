import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Parcours from './pages/Parcours'
import useHashScroll from './hooks/useHashScroll'

export default function App() {
  useHashScroll()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parcours" element={<Parcours />} />
      </Routes>
    </Layout>
  )
}
