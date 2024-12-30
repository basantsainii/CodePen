
import Root from './assets/Root.jsx'
import './App.css'
import Header from './assets/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContentHome from './assets/Home/ContentHome.jsx'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Root/>}>
      <Route path='/' element={<ContentHome/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
