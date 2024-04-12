import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Navbar'
import News from './components/News'
import Login from './components/Login'

function App() {
 
  return (
    <>
      <BrowserRouter>
          <Nav/>  
          <Routes>
              <Route path='/' element= {<Home/>}></Route>
              <Route path='/news' element= {<News/>}></Route>
              <Route path='/login' element= {<Login/>}></Route>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
