import { useState, useContext } from 'react'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import ProjectList from './components/projectList/ProjectList'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className='app'
      style={{
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode && '#fff',
      }}
    >
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
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
