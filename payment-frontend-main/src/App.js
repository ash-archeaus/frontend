// import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import AllTransactions from './components/AllTransactions';
import CustomerDetails from './components/CustomerDetails';
import EmployeeLogin from './components/EmployeeLogin';
import Home from './components/Home';
import Login from './components/Login';
import MakeTransaction from './components/MakeTransaction';
import NavbarComponent from './components/Navbar';
import NotFound from './components/NotFound';



function App(props) {
  const [check, setcheck] = useState()
  // useEffect(() => {

  //  setcheck(sessionStorage.getItem("session"))
  // })
  return (
    <>
    <Routes>
      <Route  exact path="/" element={<EmployeeLogin check={check} setcheck={setcheck} />} />
    </Routes>
{check ? 
      <Routes>
      <Route exact path="/home" element={<NavbarComponent/>}/>
      <Route exact path="/home/maketransaction" element={<MakeTransaction/>}/>
      <Route exact path="/home/alltns" element={<AllTransactions/>}/>
      <Route exact path="/home/customers" element={<CustomerDetails/>}/>
    </Routes>
 : 
 null
 }
    </>
  );
}

export default App;
