import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [animation, setAnimation] = useState(false)

  return (
    <div className='container'>
      <p className={`${animation ? 'animation' : ''}`}>{count}</p>
      <button onClick={() => setCount((prevCount) => {
        setAnimation((prevAnimation) => !prevAnimation)
        return prevCount + 1
      })}>Click me!</button>
      <button onClick={() => setCount(() => setCount(0))}>Reset</button>
    </div>
  )
}

export default App
