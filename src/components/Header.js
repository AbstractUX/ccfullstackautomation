import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <Link href="/">
        <Image src="/logo.png" alt="CC Full Stack Automation Logo" width={150} height={60} />
      </Link>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 2rem',
  borderBottom: '1px solid #ddd',
  gap: '1rem',
};

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
  marginLeft: 'auto',
};