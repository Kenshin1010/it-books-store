import lightLogo from './assets/lightLogo.png';
import darkLogo from './assets/darkLogo.png'
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="#">
          <img src={lightLogo} className="logo" alt="IT Books Store logo" />
        </a>
        <a href="#">
          <img src={darkLogo} className="logo dark" alt="IT Books Store dark logo" />
        </a>
      </div>
    </>
  );
}

export default App;
