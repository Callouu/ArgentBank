import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store'

window.addEventListener("beforeunload", () => {
  sessionStorage.removeItem("token");
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
