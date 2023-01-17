import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function RenderApp() {
  
  return(
    <header className="header">
      <h1>TODOs</h1>
      <input className="new-todo" placeholder="What needs to be done?"></input>
    </header>
  )
}

export default RenderApp