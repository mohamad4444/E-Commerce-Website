import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header/Header.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Header></Header>
  );
}

export default App
