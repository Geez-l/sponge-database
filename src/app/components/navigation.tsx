import Nav from 'react-bootstrap/Nav';

/* Navigation: https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating 
*/
interface NavigationProps {
  onPageChange: (page: string) => void;
}

const Navigation = ({ onPageChange }: NavigationProps) => {
    return(
        <Nav variant='pills'>
            <Nav.Item>
                <Nav.Link onClick={() => onPageChange('home')}>
                Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => onPageChange('result')}>
                Result
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => onPageChange('faq')}>
                FAQs
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => onPageChange('about')}>
                    About Us
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;