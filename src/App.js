import NavBar from "./view/Navbar";
import Home from "./view/Home";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
