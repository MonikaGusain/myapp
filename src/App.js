import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import PropDrilling from './components/PropDrilling';
 //import About from './components/About';
//impogit Filter from './components/filter'

function App() {

  const[mode, setMode] = useState('light')  //weather dark mode is enables or not
  

  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color="black";
      showAlert('Light mode has been enabled', 'success');
    }
    
  }
  return (
   <>
    <Navbar title="TextUtil" About="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <About/> */}
        <TextForm/>
      {/* <Filter/> */}
      <PropDrilling/>
    </div>
   </>
  );
}

export default App;


