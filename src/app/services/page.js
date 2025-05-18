export default function Services() {
  return (
    <main style={mainStyle}>
      <h1 style={headingStyle}>Our Services</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>Full-stack web application development using modern frameworks</li>
        <li style={listItemStyle}>Automation of repetitive tasks and business workflows</li>
        <li style={listItemStyle}>API design and integration for seamless data flow</li>
        <li style={listItemStyle}>Cloud infrastructure setup, deployment, and monitoring</li>
        <li style={listItemStyle}>Consulting and support for scaling your software solutions</li>
      </ul>
    </main>
  );
}

const mainStyle = {
  padding: '2rem',
  maxWidth: '700px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif',
  lineHeight: 1.6,
};

const headingStyle = {
  color: '#0070f3',
  marginBottom: '1.5rem',
  fontWeight: 'bold',
  fontSize: '2rem',
};

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '1.5rem',
};

const listItemStyle = {
  marginBottom: '1rem',
  padding: '0.3rem 0.5rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  cursor: 'default',
};

