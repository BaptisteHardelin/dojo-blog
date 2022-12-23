const Home = () => {
  const handleClick = () => {
    console.log("Hello ninjas");
  };

  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>

      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("mario")}>Click me again</button>
    </div>
  );
};

export default Home;
