
import './App.css'
import Navbar from './components/layouts/Navbar'
import { Home} from '@mui/icons-material'
import { Route, Routes } from 'react-router-dom'
import Productos from './pages/productos'
import Profile from './pages/Profile'
import Account from './pages/Account'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <>
  <Navbar />
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />

      
      </Routes>     
   
    </>
  )
}

export default App
