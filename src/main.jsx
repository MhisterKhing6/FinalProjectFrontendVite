import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { VerificationContextProvider } from './context/verificationContext.jsx'
import { StudentContextProvider } from './context/studentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <VerificationContextProvider>
        <StudentContextProvider >
        <App />
        </StudentContextProvider>
      </VerificationContextProvider>
    </React.StrictMode>
  </BrowserRouter>
)
