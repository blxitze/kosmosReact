import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import Kosmos from './pages/Kosmos'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/kosmos" element={<Kosmos />} /> */}
      {/* Добавьте другие маршруты по аналогии */}
    </Routes>
  )
}