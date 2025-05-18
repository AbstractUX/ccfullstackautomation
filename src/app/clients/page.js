export default function Clients() {
  return (
    <main style={mainStyle}>
      <h1 style={headerStyle}>Our Clients</h1>
      <p>We&apos;re proud to have worked with these amazing organizations:</p>
      <ul style={listStyle}>
        <li>SRT</li>
        <li>Walt Disney</li>
        <li>Globant</li>
        <li>Medicasoft</li>
        <li>Harvest</li>
        <li>... and many more!</li>
      </ul>
    </main>
  );
}

const mainStyle = {
  padding: '2rem',
  maxWidth: '700px',
  margin: '0 auto',
  fontFamily: 'sans-serif',
  lineHeight: 1.6,
};

const headerStyle = {
  color: '#0070f3',
  marginBottom: '1rem',
};

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '1.5rem',
};
