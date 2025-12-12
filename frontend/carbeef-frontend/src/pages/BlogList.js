import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2>All Blogs</h2>

        <div style={styles.list}> 
          {blogs.map((blog) => (
            <Link
              to={`/blogs/${blog._id}`}
              key={blog._id}
              style={styles.card}
            >
              <img src={blog.image} alt="" style={styles.image} />
              <h3>{blog.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: { width: "80%", margin: "20px auto" },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#222",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default BlogList;
