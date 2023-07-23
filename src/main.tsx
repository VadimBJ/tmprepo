// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// Import our custom CSS
import '../src/scss/style.css'
import Contacts from './components/contacts/Contacts.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Contacts />
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
)
