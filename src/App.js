import './App.css';
import Navbar from './components/Navbar.js';
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
   <>
    <Navbar title="TextUtil" About="About"/>

    <div className="container my-3">
      <About/>
    {/* <TextForm heading="Enter the text to analyze"/> */}
    </div>
   </>
  );
}

export default App;


