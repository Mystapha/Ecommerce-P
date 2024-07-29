import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbara from './components/Navbara';
import Profil from "./components/Profil";
import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import { getproduct } from "./JS/productslice";
import { getusers, userCurrent } from "./JS/userSlice";
import Shop from "./components/Shop";
import Title from "./components/Title";
import Home from "./components/Home";
import About from "./components/About";
import Trailer from "./components/Trailer.js";
import Pannier from "./components/Pannier.js";
import { getcommande } from "./JS/commandeSlice.js";
import Dashbord from "./components/Dashbord.js";
import Contact from "./components/Contact.js";





function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getcommande());
    dispatch(getusers());
  }, [ping]);
  return (
    <div className="App">
      <Title/>
      <Navbara/>
    
      <Routes>
        
     
      <Route path="/trailer/:id" element={<Trailer ping={ping} setping={setping}  />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop ping={ping} setping={setping}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/dashbord" element={<Dashbord ping={ping} setping={setping}/>} /> 
        <Route path="/pannier" element={<Pannier ping={ping} setping={setping} />} /> 

       
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
