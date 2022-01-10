// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>  
      <Navbar title='Text Utils'/>
      <div className="container my-3">
        <Textform heading = "Enter the Text to be Analyzed below"/>
      </div>
    </>
  );
}

export default App;
