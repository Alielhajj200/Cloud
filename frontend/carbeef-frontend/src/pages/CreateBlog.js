import { useState } from "react";
import Navbar from "../components/Navbar";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text, image }),
    });

    if (response.ok) {
      setSuccess("Blog created successfully!");
      setTitle("");
      setText("");
      setImage("");
    }
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2>Create Blog</h2>

        {success && <p style={styles.success}>{success}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />

          <textarea
            placeholder="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ ...styles.input, height: "100px" }}
            required
          ></textarea>

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={styles.input}
          />

          <button style={styles.button}>Create Blog</button>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: { width: "500px", margin: "30px auto" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    background: "#222",
    color: "white",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
  },
  success: {
    background: "#c8ffcf",
    padding: "10px",
    borderRadius: "8px",
    color: "green",
  }
};

export default CreateBlog;
