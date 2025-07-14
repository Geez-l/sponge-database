import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

const Navigation = () => {
    return(
        <Nav variant='pills'>
            <Nav.Item>
                <Nav.Link as={Link} href='/'>
                Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} href='/'>
                Result
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} href='/'>
                FAQs
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} href='about'>
                    About Us
                </Nav.Link>
            </Nav.Item>
        </Nav>

        
    );
};

export default Navigation;