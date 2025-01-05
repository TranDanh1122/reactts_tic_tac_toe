// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AppProvider from './AppContext.tsx'
createRoot(document.getElementById('root')!).render(
    <AppProvider>
      <App />
    </AppProvider>
)
