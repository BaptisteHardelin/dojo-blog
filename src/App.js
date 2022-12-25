import NavBar from "./view/Navbar";
import Home from "./view/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
