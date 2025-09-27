
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from './components/Context.jsx';
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
  <CardProvider>
      <App/>
  </CardProvider>
   </BrowserRouter>
)


