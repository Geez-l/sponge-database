import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    const handleSelect = (eventKey)
    return(
        <Nav variant='pills' activeKey='1' onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link eventKey='1' href='#/home'>
                Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='2' href='#/list'>
                Sample List
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='3' href='#/faq'>
                FAQs
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='4' href='about'>
                    About Us
                </Nav.Link>
            </Nav.Item>
        </Nav>

        
    )
}