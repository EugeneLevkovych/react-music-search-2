import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AudioProvider } from './components/AudioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AudioProvider>
      <App />
    </AudioProvider>
  </StrictMode>,
)
