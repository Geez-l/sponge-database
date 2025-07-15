import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import '../css/navigation.css';

import Result from '../components/result';
import Home from '../components/home';
import About from '../components/about';
import FAQ from '../components/faq';
import ResultDetails from "./resultDetails";


const Navigation = () => {
    const pathname = usePathname();
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} href="/" className="nav-brand">
                    {/* Sponge Logo & Title */}
                    <div className="nav-logo" aria-label="Sponge Logo" role="img" />
                    {/* Sponge guide in new line */}
                    <p className="nav-title">The Philippine Sponge Guide</p>
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Nav className="nav-links-right">
                        <Nav.Link as={Link} href="/" active={pathname === '/'}>Home</Nav.Link>
                        <Nav.Link as={Link} href="/result" active={pathname === '/result'} >Sample List</Nav.Link>
                        <Nav.Link as={Link} href="/faq" active={pathname === '/faq'}>FAQs</Nav.Link>
                        <Nav.Link as={Link} href="/about" active={pathname === '/about'}>About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;