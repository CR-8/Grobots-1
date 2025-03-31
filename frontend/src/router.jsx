import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Team from './pages/Team'
import Projects from './pages/Project'
import Blogs from './pages/Blog'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About  />} />
      <Route path="/team" element={<Team />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blogs />} />
    </Routes>
  )
}
