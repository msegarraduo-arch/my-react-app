import { useState } from 'react'
import './App.css'

function App() {
  const [uno, setUno] = useState("init");
  const [dos, setDos] = useState("init");

  return (
    <>
      <input type="text" placeholder="Escribe algo" value={uno} onChange={(e) => setUno(e.target.value)} />
      <input type="text" placeholder="Escribe algo" value={dos} onChange={(e) => setDos(e.target.value)} />
    </>
  )
}

export default App
