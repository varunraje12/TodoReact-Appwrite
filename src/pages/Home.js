import React, { useEffect } from 'react'
import { account } from '../Appwrite/config'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {

    console.log(account)
  }, [])

  return (
    <>
      <p className='flex justify-center font-bold text-xl'><span onClick={() => navigate("/signin")} className='text-blue-500 underline cursor-pointer'>SIGNIN</span>to list your task...Don't have account <span onClick={() => navigate("/signup")} className='text-blue-500 underline cursor-pointer'> SIGNUP</span> </p>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          SIGNUP
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          SIGNIN
        </button>
      </div>
    </>
  )
}

export default Home