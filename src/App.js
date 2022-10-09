import logo from './Us.png';
import './App.css';
import Timer from './timer'



function App() {



  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="timer">
        <Timer/> 
        </div>

    </div>
  );
}

export default App;
