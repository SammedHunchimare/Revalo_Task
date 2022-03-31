import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';

function App() {
  return (
    
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="Register" element={<Register />}/>
        <Route path="Home" element={<Home />}/>
      </Routes>
  );
}

export default App;
