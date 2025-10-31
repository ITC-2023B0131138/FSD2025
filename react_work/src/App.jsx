import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile.jsx';
import Gallary from './component/Gallary.jsx';


function App() {
  return (
    <>
      <div>
        <h2 >Welcome to react app</h2>
        {/* <h3>
          <Profile />
        </h3> */}

        <Gallary></Gallary>      
        </div>

    </>
  )
}

export default App