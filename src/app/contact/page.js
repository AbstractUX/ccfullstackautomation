export default function Contact() {
  return (
    <main style={mainStyle}>
      <h2>Contact Us</h2>
      <p>Have questions, ideas, or just want to connect? Fill out the form below!</p>
      <form
        action="https://formspree.io/f/xqaqnrrq"
        method="POST"
        style={formStyle}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required style={inputStyle} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required style={inputStyle} />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required style={textareaStyle} />

        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </main>
  );
}

const mainStyle = {
  padding: "2rem",
  maxWidth: "600px",
  margin: "0 auto",
  fontFamily: "sans-serif",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const inputStyle = {
  padding: "0.5rem",
  fontSize: "1rem",
};

const textareaStyle = {
  padding: "0.5rem",
  fontSize: "1rem",
  minHeight: "100px",
};

const buttonStyle = {
  padding: "0.75rem",
  backgroundColor: "#0070f3",
  color: "white",
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
};
