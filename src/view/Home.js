import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = UseFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>Error: {error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
