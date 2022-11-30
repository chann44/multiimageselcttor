import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Tweetsstate } from './tweetswithJotai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Tweetsstate />
  )
}

export default App
