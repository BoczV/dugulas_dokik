
import Navbar from './components/Navbar';
import './style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        {/* <Route exact path="/" component={} /> */}
        <Route exact path="/contact" component={Contact} />
        {/*<Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} /> */}
      </Router>
    </div>
  );
}

export default App;
