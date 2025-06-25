
import './App.css'
import Dash from './dashboard/dash.jsx'
import Description from './component/Description/chart.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/home/Hom.jsx'
import Login from './component/Auth/login.jsx'
import SignUp from './component/Auth/signup.jsx'
import Book from './component/book/book.jsx'
import WhyUs from './component/WhyUs/whyus.jsx'
import Contact from './component/ContactUs/contact.jsx'

function App() {

  return (
    <>
    <div><Dash/></div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/why-us" element={<WhyUs/>} />

      <Route path="/ContactUs" element={<Contact/>}/>
      <Route path="/Description" element={<Description/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/book" element={<Book/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
