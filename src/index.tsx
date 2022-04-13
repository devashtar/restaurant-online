import { createRoot } from 'react-dom/client'
import '@assets/styles/all.css'
import { App } from './App'
import { StoreProvider } from '@store'

const root = createRoot(document.getElementById('app')!)
root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
)
