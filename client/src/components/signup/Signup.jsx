import React from 'react'
import './signup.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, email, password)
  }
  return (
    <form className="gamemoir__login" onSubmit={handleSubmit}>
      {/* <img className="lines" src={lines} /> */}
      <img src={logo}></img>
      <div className="gamemoir__login-username">
        <label htmlFor="name">Username</label>
        <input
          required
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="gamemoir__login-email">
        <label htmlFor="name">Email Address</label>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="gamemoir__login-password">
        <label htmlFor="name">Password</label>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button className=" sign relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-bl from-[#743ad5] to-[#d53a9d] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-slate-400 dark:text-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <input
          type="submit"
          value="SIGN UP"
          className="relative  transition-all ease-in duration-75 bg-slate-400 dark:bg-gray-900 rounded-md group-hover:bg-opacity-3"
        />
      </button>
    </form>
  )
}
export default Signup
