import './App.css'
import { Loans } from './components/Loans'
import { Users } from './components/Users'
import { Books } from './components/Books'
import { useState } from 'react'

function App() {
  const [usersState, setUsersState] = useState(false)

  const handleUsersState = () => {
    setUsersState(!usersState)
  }

  return (
    <div>
      {usersState ? <Users /> : <div>
        <button onClick={handleUsersState}>show users</button>
        <Loans />
        <Books />
      </div>
      }

    </div>
  )
}

export default App
