import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CarBeef</h1>

      <div style={styles.card}>
        <Link to="/create" style={styles.button}>Create Blog</Link>
        <Link to="/blogs" style={styles.button}>View Blogs</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
  },
  title: {
    fontSize: "50px",
    marginBottom: "40px",
    color: "#222",
  },
  card: {
    width: "350px",
    margin: "auto",
    padding: "40px",
    background: "#f4f4f4",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
  },
  button: {
    padding: "12px",
    background: "#222",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  }
};

export default Home;
