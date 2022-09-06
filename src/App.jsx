import { useState } from 'react'
// import Login from './Components/Login'
// import Cadastro from './Components/Cadastro'
// import Header from './Components/Header'
// import Perfil from './Components/Perfil'
import Feed from './Components/Feed'
import "../src/assets/styles/global.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Feed />
    </div>
  )
}

export default App
