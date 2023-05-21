import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';


function App() {



  return (
    <>
      <NavBar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/classes" element={<Classes/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>} />
       <Route  path="/logout" element={<Logout/>} />        
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
