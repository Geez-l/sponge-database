'use client';
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import './css/navigation.css'



const Navigation = () => {
    const pathname = usePathname();
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} href="/" className="nav-brand">
                    {/* Sponge Logo & Title */}
                    <div className="nav-logo" aria-label="Sponge Logo" role="img" />
                    {/* Sponge guide in new line */}
                    {/* <p className="nav-title">The Philippine Sponge Guide</p> */}
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Nav className="nav-links-right">
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link href="/result" className={pathname === '/result' ? 'active' : ''}>Sample List</Link>
                    <Link href="/faq" className={pathname === '/faq' ? 'active' : ''}>FAQ</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;