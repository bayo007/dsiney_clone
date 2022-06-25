import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Details from "./components/Details"
import Home from "./components/Home"

function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/detail/:id" element={<Details />} />
    </Routes> 
    </Router>
  </div>
  );
}

export default App;

/* <Router>
<Header />
<Switch>
  <Route exact path="/">
  <Home />
  </Route>
  <Route path="/detail/:id">
    <Detail />
  </Route>
</Switch>
</Router> */