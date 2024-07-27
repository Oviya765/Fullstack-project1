// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import Home1 from './Component/Home1';
import Slider from './Component/Slider';
function App() {
  return (
    <div>
   <Routes>
    <Route path='/register' element={<Register />} />
    <Route path='/' element={<Login />} />
    <Route path='/home' element={<Home1/>}/>
   </Routes>
   </div>
  );
}

export default App;
