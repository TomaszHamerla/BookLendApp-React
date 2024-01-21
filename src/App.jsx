import './App.css'
import { Loans } from './components/Loans'
import { Users } from './components/Users'
import { Books } from './components/Books'
import { useState } from 'react'

function App() {


  return (
    <div className='container'>
      <input type="text" className="input" placeholder='Searching phrase'/>
    </div>
  )
}

export default App
