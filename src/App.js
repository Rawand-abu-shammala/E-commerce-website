import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter} from 'react-router-dom'
// import Router from 'router';
import Router from './routes/route';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Router/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
