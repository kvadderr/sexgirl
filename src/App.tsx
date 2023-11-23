import { useState } from "react"
import { Routes, Route } from 'react-router-dom'

import Menu from "./components/Menu/Menu"
import Home from "./pages/Home/Home"
import Documentation from "./pages/Documentation/Documentation"

function App() {

  const [active, setActive] = useState(1)

  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/documentation' element={<Documentation />} />
        </Routes>
      </div>
      <Menu active={active} setActive={setActive} />
    </div>
  )
}

export default App
