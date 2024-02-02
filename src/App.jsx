import './App.css'
import { Loans } from './components/Loans'
import { Users } from './components/Users'
import { Books } from './components/books/Books'
import { useState } from 'react'

function App() {

  const[searchPhrase,setSearchPhrase]=useState('')

  const handleSearchChange=(e)=>{
    setSearchPhrase(e.target.value)
  }

  return (
    <div className='container'>
      <input
       type="text" 
       className="input" 
       placeholder='Searching phrase'
       value={searchPhrase}
       onChange={handleSearchChange}
       />
    <Books searchPhrase={searchPhrase}/>
    </div>
  )
}

export default App
