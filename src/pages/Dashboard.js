import React from 'react'
import { useState, useEffect } from 'react'
import { account, database } from '../Appwrite/config'
import { useNavigate } from 'react-router-dom'
import { Query } from 'appwrite'

const Dashboard = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [todo, setTodo] = useState('')
  const [alltodo, setAllTodo] = useState([])

  const logout = async () => {
    try {
      let res = await account.deleteSession("current")
      navigate('/signin')
    } catch (err) {
      console.log(err)
    }
  }

  const islogin = async () => {
    try {
      let res = await account.get("current")
      setEmail(res.email)
      setName(res.name)
      // console.log(res)
    } catch (err) {
      navigate('/signup')
    }
  }

  const Addtodo = async () => {
    if (todo === '') {
      alert('Enter some todo')
    }
    try {
      let res = await database.createDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID, 'unique()', {
        email: email,
        todos: todo
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  const viewtodo = async () => {
    try {
      console.log(email)
      let res = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID, [
        Query.equal('email', 'varunraje50@gmail.com')
      ])
      console.log(res.documents)
      setAllTodo(res.documents)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    islogin();
    viewtodo();
  }, [email])



  return (
    <div>
      {email && name ? <div>
        <p className='text-3xl font-bold'>Welcome {name}</p>
        <p>Email {email}</p>
        <button onClick={logout} className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">logout</button>

        <div className='m-6'>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            placeholder='Add your todo'
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={Addtodo} className=" mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add</button>
        </div>
        <div>
          {alltodo.map(e => {
            return (
              <p>{e.todos}</p>
            )
          })}
        </div>
      </div> : <>Loading.....</>}
    </div>
  )
}

export default Dashboard