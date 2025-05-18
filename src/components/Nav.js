import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li><Link href="/" style={linkStyle}>Home</Link></li>
          <li><Link href="/about" style={linkStyle}>About</Link></li>
          <li><Link href="/services" style={linkStyle}>Services</Link></li>
          <li><Link href="/contact" style={linkStyle}>Contact</Link></li>
          <li><Link href="/clients" style={linkStyle}>Clients</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  padding: '1rem 2rem',
  borderBottom: '1px solid #ddd',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1.5rem',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: '#0070f3',
  textDecoration: 'none',
  fontWeight: '500',
};
