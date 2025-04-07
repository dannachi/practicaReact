import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegistroUsuarios  from './RegistroUsuarios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistroUsuarios />
  </StrictMode>,
)
