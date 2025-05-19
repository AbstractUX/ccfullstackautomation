import "./globals.css";
import Header from "../components/Header";
import Nav from "../components/Nav";

export const metadata = {
  title: "CC Full Stack Automation",
  description: "Automation solutions for your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <div style={wrapperStyle}>
          <Header />
          <Nav />
          <main style={mainStyle}>{children}</main>
          <footer style={footerStyle}>
            &copy; {new Date().getFullYear()} CC Full Stack Automation LLC. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}

const bodyStyle = {
  margin: 0,
  padding: 0,
  minHeight: "100vh",
};

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainStyle = {
  flex: 1,
  padding: "1rem",
  maxWidth: "800px",
  margin: "0 auto",
};

const footerStyle = {
  backgroundColor: "#f0f0f0",
  padding: "1rem",
  textAlign: "center",
};
