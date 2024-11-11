import './App.css'
import Message from './Message'

function App() {
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
        <Message name='testing name' message='this is a cool message'/>
      </div>
    </>
  )
}

export default App
