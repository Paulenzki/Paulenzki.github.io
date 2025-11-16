import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from "virtual:generated-pages-react"


export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes(routes)}
    </Suspense>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
