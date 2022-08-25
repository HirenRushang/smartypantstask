import Home from "./components/home/Home";
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import HomeDetail from "./components/homedetail/HomeDetail"
import "./App.css"
import {Routes,Route} from "react-router-dom";



function App() {
  return (
    <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/home/:homeId" element={<HomeDetail />}/>

  </Routes>
  );
}

export default App;
