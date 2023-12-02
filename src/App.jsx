import './App.css'
import Home from './components/Home'
import Nav from "./components/Nav"
import { Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Transaction from './components/Transaction'
import Data from './components/Data'
function App() {
  return (
  <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
      <Route path="/data" element={<Data/>}/>
    </Routes>
  </Router>
  )
}

export default App
