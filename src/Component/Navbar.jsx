import React, { useContext } from 'react'
import { GlobalContext } from '../Context/ContextApi'

const Navbar = () => {
    const {theme, setTheme} = useContext(GlobalContext)
  return (
    <div className={theme === 'light-mode' ? 'navbar bg-base-100' : 'navbar dark'}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" 
          className={theme === 'light-mode' ? 'btn btn-ghost btn-circle' : 'btn btn-base-content btn-circle'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <h3 style={{
            color : theme === 'light-mode' ? 'black' : 'white',
            fontSize: '20px',
        
        }}>{theme === 'light-mode' ? 'Light Mode' : 'Dark Mode'}</h3>
      </div>
      <div className="navbar-end">
      <input type="checkbox" 
      onClick={() => {
          setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode')
      }} 
      className="toggle toggle-info" defaultChecked />
      </div>
</div>
  )
}

export default Navbar