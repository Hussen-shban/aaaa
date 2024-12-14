import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserProvider from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <BrowserRouter  basename="/SH-social/" >

      <UserProvider>

        <App />

      </UserProvider>
      
    </BrowserRouter>


  </StrictMode>,
)
