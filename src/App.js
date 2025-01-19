import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title= "Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below "mode={mode}/>
      </div>
    </>
  );
}

export default App;

{/* <Router> */}
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About/>}> exact is used to correctly match the path */}
      {/* </Route> */}
      {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below "mode={mode}/>}> */}
      {/* </Route> */}
    {/* </Routes> */}
{/* </Router> */}