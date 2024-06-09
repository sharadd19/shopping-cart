import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './components/HomePage/Home'
function App() {
 return (
  <>
  <Navbar/>
  <Outlet/>
  </>
 )
}

export default App
