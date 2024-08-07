import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import { useContext } from 'react'
import { GlobalContext } from './Context/ContextApi'

const App = () => {

  const {theme, setTheme} = useContext(GlobalContext)
  return (
    <div className={theme === 'light-mode' ? 'app light-mode' : 'app dark-mode'}>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default App