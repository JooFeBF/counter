import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className='container'>
      <p>{count}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default App
