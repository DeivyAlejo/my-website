import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Education from './pages/Education'

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/my-website/" element={<HomePage />} />
        <Route path="/my-website/education" element={<Education />} />
        <Route path="/my-website/experience" element={<Experience />} />
        <Route path="/my-website/projects" element={<Projects />} />
        <Route path="/my-website/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
