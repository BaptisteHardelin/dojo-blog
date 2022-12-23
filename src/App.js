import NavBar from "./components/Navbar";
import Home from "./components/Home";

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
