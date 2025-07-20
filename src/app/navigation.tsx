'use client';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './css/navigation.css';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Navbar expand="lg" className="px-3">
        <Container fluid>
          {/* Brand Section */}
          <Navbar.Brand as={Link} href="/" className="nav-brand d-flex align-items-center">
            <div className="nav-logo" aria-label="Sponge Logo" role="img" />
            {/* <div className="nav-title">The Philippine Sponge Guide</div> */}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="nav-links-right">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
              <Link href="/result" className={`nav-link ${pathname === '/result' ? 'active' : ''}`}>
                OTU List
              </Link>
              <Link href="/faq" className={`nav-link ${pathname === '/faq' ? 'active' : ''}`}>
                FAQ
              </Link>
              <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
