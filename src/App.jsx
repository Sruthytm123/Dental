import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AddtoCart from './pages/AddtoCart'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Settings from './pages/Settings'

function App() {


  return (
    <>
       <Routes>
          <Route path='/cart' element = {<AddtoCart/>}/> 
          <Route path='/' element = {<HomePage />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path='/settings' element = {<Settings />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
       </Routes> 
    </>
  )
}

export default App
