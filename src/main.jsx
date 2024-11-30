import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Desktop from './Components/Desktop';
import { MyProvider } from './WindowsData';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>

    <App />
    <Router>
      <Routes>
      <Route path='/' element={<Desktop/>}/>
      <Route path='/home' element={<h1>home</h1>}/>
      </Routes>

    </Router>
    </MyProvider>
  </StrictMode>,
)
