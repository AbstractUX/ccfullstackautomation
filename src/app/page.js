export default function Home() {
  return (
    <main style={mainStyle}>
      <h2>Welcome to CC Full Stack Automation</h2>
      <p>
        We help businesses automate repetitive tasks and build reliable, full stack solutions — fast.
      </p>
      <p>
        Whether it's backend APIs, frontend interfaces, or full system integrations, we offer scalable development tailored to your goals.
      </p>
      <p>
        Ready to build something together?
        <br />
        <a href="mailto:ccfullstackautomation@gmail.com" style={linkStyle}>
          Contact us to get started &rarr;
        </a>
      </p>
    </main>
  );
}

const mainStyle = {
  padding: '2rem',
  maxWidth: '800px',
  margin: '0 auto'
};

const linkStyle = {
  color: '#0070f3',
  textDecoration: 'underline'
};
