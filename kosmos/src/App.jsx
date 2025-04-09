import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SpaceKz from './pages/SpaceKz'
import WorldExperience from './pages/WorldExperience'
import Tourism from './pages/Tourism'
import Conclusion from './pages/Conclusion.prefixed'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/space" element={<SpaceKz />} />
        <Route path="/worldexperience" element={<WorldExperience />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </>
  )
}