import NavBar from "./view/Navbar";
import Home from "./view/Home";
import Create from "./view/Create";
import BlogDetails from "./view/BlogDetails";
import NotFound from "./view/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />

            {/* {Always in the bottom !!! for the not found page (404)} */}
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
