import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/ContextApi'

const Login = () => {
    const {theme, setTheme} = useContext(GlobalContext)
  return (
    <div>
        <div className={theme === 'light-mode' ? "hero bg-base-700 min-h-screen" : "hero dark min-h-screen"}>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className={theme === 'light-mode' ? 'text-center lg:text-left' : ' text-center lg:text-left light'}>
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className={theme === 'light-mode' ? "card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" : "card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"}>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className={theme === 'light-mode' ? "btn btn-primary" : 'btn  btn-outline'}>Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Login