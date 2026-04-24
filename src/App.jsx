import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const SubmitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({ title, details })
    settask(copyTask)
    setTitle('')
    setdetails('')
  }

  const deleteNote = (e) => {
    const copyTask = [...task]
    copyTask.splice(e, 1)
    settask(copyTask)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>

      <form
        className='flex flex-col gap-4 lg:w-1/2 border-white p-10 items-start'
        onSubmit={SubmitHandler}
      >
        <h1 className='text-xl font-bold'>Add notes</h1>

        <input
          className='px-5 py-4 mb-4 w-full rounded border border-gray-600 bg-gray-900 text-white'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Notes Heading'
        />
        <textarea
          className='px-5 py-4 w-full mb-3 rounded border border-gray-600 bg-gray-900 text-white resize-none'
          rows={5}
          value={details}
          onChange={(e) => setdetails(e.target.value)}
          placeholder='Enter details'
        />
        <button className='px-5 py-4 rounded bg-white text-black w-full font-semibold hover:bg-gray-200 transition'>
          Add Note
        </button>
      </form>

      <div className='p-5 lg:w-1/2 bg-black lg:border-l-2 border-gray-700 overflow-y-auto'>
        <h1 className='text-xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5'>
          {task.map((elem, idx) => (
            <div
              key={idx}
              className='w-48 bg-amber-100 flex flex-col justify-between text-black p-4 rounded-2xl'
              style={{ minHeight: '180px' }}
            >
              {/* Text section */}
              <div className='overflow-hidden flex-1 mb-3'>
                <h3 className='text-base font-bold leading-tight break-words line-clamp-2'>
                  {elem.title}
                </h3>
                <p className='mt-2 text-sm leading-tight text-gray-600 break-words line-clamp-4'>
                  {elem.details}
                </p>
              </div>

              {/* Delete button always at bottom */}
              <button
                onClick={() => deleteNote(idx)}
                className='bg-red-600 cursor-pointer active:scale-95 text-white rounded-xl py-1 px-4 w-full text-sm'
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App