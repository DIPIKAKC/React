import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroUIProvider } from '@heroui/react'
import { Provider } from 'react-redux'
import { store } from './store.js'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    {/* for globally=>> action ra state sabai le paos bhanera main component ma pass gareko store lai */}
    <Provider store={store}>

      <App />
      <Toaster />
      
    </Provider>
  </HeroUIProvider>


)
