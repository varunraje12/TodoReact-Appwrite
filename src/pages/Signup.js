import React, { useState } from 'react'
import { account } from '../Appwrite/config'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handlesubmit = async (e) => {
    e.preventDefault()
    console.log({ name, email, password })
    if (name === "" || email === "" || password === "") {
      alert('Please enter your details')
      return
    }
    try {
      let res = await account.create('unique()', email, password, name)
      navigate('/signin')
    } catch (err) {
      console.log(err)
    }

  }


  return (
    <div className="flex justify-center">
      <form onSubmit={handlesubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            Sign Up
          </button>
        </div>
      </form>
    </div>

  )
}

export default Signup