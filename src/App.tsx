import React, { useEffect, useState } from 'react'
import './App.css'
import Message from './Message'

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('testing username')
  const [message, setMessage] = useState<string>('user message')

  useEffect(()=>{
    const timer = setTimeout(()=>{
      // update message
      setMessage("updated message")
      // update username
      setUsername("updated username")
    }, 5000)

    return clearTimeout(timer)
  }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='p-3 bg-green-400 rounded-xl shadow-2xl'>
          <p className='text-white font-bold underline underline-offset-4 tracking-wider'>
            TailwindCSS being applied here
          </p>
        </div>
      </div>
      <div>
        hello
        <Message name={username} message={message}/>
      </div>
    </>
  )
}

export default App
