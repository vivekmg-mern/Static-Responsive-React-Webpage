import './App.css'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './components/Header';




function App() {
  

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/Home' element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
