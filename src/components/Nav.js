import Link from "next/link";

const navStyle = {
  background: "#222",
  padding: "1rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  display: "inline-block",
};

export default function Nav() {
  return (
    <nav style={navStyle}>
      <Link href="/" style={linkStyle}>Home</Link>
      <Link href="/about" style={linkStyle}>About</Link>
      <Link href="/services" style={linkStyle}>Services</Link>
      <Link href="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}
