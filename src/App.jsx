import { useContext } from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import ProjectList from './components/projectList/ProjectList'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode && '#fff',
      }}
    >
      <Navbar />
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
