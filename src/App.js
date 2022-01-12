// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const ShowAlert = (message,type) =>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(
        ()=>{
          setAlert(null);
        },1000
      )
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      ShowAlert('Dark mode enabled',"success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      ShowAlert('Light mode enabled',"success") // {msg: "Light mode enabled", type: "success"}
    }
  }
  return (
    <Router>
      <Navbar title='Text Utils' modes={mode} toggleSwitch={toggleMode}/>
      <Alert alertObj = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Textform heading = "Enter the Text to be Analyzed below" AlertMessage={ShowAlert} modes={mode}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
