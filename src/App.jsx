import { useState } from 'react'
import './App.css'

function App() {
  const [uno, setUno] = useState("init");

  return (
    <>
      <input type="text" placeholder="Escribe algo" value={uno} onChange={(e) => setUno(e.target.value)} />
    </>
  )
}

export default App
