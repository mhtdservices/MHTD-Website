import './App.css';
import Home from './components/home/Home';
import Contact from './components/contact/Contacts';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PrductDetails from './components/home/ProductDetails';
import WarrantyPolicy from './components/policy/WarrantyPolicy';
function App() {
  return (
    <>
    <Header/>
    <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/WarrantyPolicy" element={<WarrantyPolicy/>}></Route>
    <Route path="/ProductDetails/:id" element={<PrductDetails/>}></Route>
  </Routes>
    <Footer/>

    
    </>
  );
}

export default App;
