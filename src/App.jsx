import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddtoCart from './components/userpages/AddtoCart'
import HomePage from './components/HomePage'
import Login from './components/userpages/Login'
import Settings from './components/Settings'

function App() {


  return (
    <>
  
      
       <Routes>
          <Route path='/cart' element = {<AddtoCart/>}/> 
          <Route path='/' element = {<HomePage />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path='/settings' element = {<Settings />}/>
       </Routes> 
    </>
  )
}

export default App
