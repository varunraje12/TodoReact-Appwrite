import React from 'react'
import { useState } from 'react'
import { account } from '../Appwrite/config'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handlesubmit = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      alert("invalid credentials")
      return
    }
    try {
      let res = await account.createEmailSession(email, password)
      navigate("/dashboard")
      console.log(res)
    } catch (err) {
      console.log("Email or Password is inncorrect")
    }


  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handlesubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signin