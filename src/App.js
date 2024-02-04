import './App.css';
import Navbar from './components/Navbar.js';
// import TextForm from './components/TextForm';
// import About from './components/About';
import Filter from './components/filter'

function App() {
  return (
   <>
    <Navbar title="TextUtil" About="About"/>

    <div className="container my-3">
      {/* <About/>
      <TextForm/>
    <TextForm heading="Enter the text to analyze"/> */}
    <Filter/>
    </div>
   </>
  );
}

export default App;


