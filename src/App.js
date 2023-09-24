import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter} from 'react-router-dom'
// import Router from 'router';
import Router from './routes/route';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
