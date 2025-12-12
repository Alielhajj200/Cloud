import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <img src={blog.image} alt="" style={styles.image} />

        <div style={styles.content}>
          <h2>{blog.title}</h2>
          <p>{blog.text}</p>
        </div>
      </div> 
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    width: "80%",
    margin: "30px auto",
    gap: "30px",
  },
  image: {
    width: "50%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "15px",
  },
  content: { width: "50%" },
};

export default BlogDetails;
