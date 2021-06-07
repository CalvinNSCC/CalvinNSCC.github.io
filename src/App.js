import Main from './components/Main'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './css/App.css';
//import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      {/* <Footer /> */}
    </div>
    
  );
}

export default App;
