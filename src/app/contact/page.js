export default function Contact() {
  return (
    <main style={mainStyle}>
      <h2>Contact Us</h2>
      <p>
        Have questions, ideas, or just want to connect? Reach out to us anytime!
      </p>
      <p style={emailStyle}>
        📧 Email us at:{" "}
        <a href="mailto:ccfullstackautomation@gmail.com">
          ccfullstackautomation@gmail.com
        </a>
      </p>
    </main>
  );
}

const mainStyle = {
  padding: "2rem",
  maxWidth: "600px",
  margin: "0 auto",
  fontFamily: "sans-serif",
  lineHeight: 1.6,
};

const emailStyle = {
  marginTop: "1.5rem",
  fontSize: "1.1rem",
};
