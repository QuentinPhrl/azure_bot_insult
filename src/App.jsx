import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const ifram_style = {
    height: "502px",
  }

  return (
    <div className="App">
      <div>
        <iframe style={ifram_style} src="https://webchat.botframework.com/embed/QnA-bot-react-bot?s=Grtz5eGWcIo.gLakcRPu_k9F-AfDudAtj6uXJ13kivIYFC4lk_8wHyk"></iframe>
      </div>
    </div>
  )
}

export default App
