import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>CarBeef</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Main Menu</Link>
        <Link to="/create" style={styles.link}>Create Blog</Link>
        <Link to="/blogs" style={styles.link}>View Blogs</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    padding: "15px 25px",
    alignItems: "center",
    background: "#222",
    color: "white",
    justifyContent: "space-between",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "15px" },
  link: { color: "white", textDecoration: "none", fontSize: "17px" }
};

export default Navbar;
