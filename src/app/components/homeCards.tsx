import React from 'react';
import Card from 'react-bootstrap/Card';

const HomeCards = () => (
  <div className='home-text-content'>
    {/* <Card className='search-db-card'>
      <Card.Body>
        <div className='search-db-text'>
          <h1>How to Search Our Database</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </Card.Body>
    </Card> */}
    
    {/*How to Use Our Database Card*/}
    <Card className='how-to-use'>
      <Card.Body>
        <Card.Title className='card-heading'><span className='title-bar'>|</span> How to Search Our Database</Card.Title>
        <Card.Text className='card-body-text'>
          Images in the Philippine Sponge Database may be searched using the attributes below:
          <br />
          <br />
          • Operational Taxonomic Unit Identification (OTU ID)
          <br />
          • Location
          <br />
          • Functional Form (Schonberg, 2021)
          <br />
          • Putative Identification
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
    {/*About PH Sponges Card*/}
    <Card className='about-sponges'>
      <Card.Body>
        <Card.Title className='card-heading'><span className='title-bar'>|</span> About Philippine Marine Sponges</Card.Title>
        <div className='card-subpart'>
          <Card.Subtitle className='card-subheading'>Subheading 1</Card.Subtitle>
          <Card.Text className='card-body-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Card.Text>
        </div>
        
        <div className='card-subpart'>
          <Card.Subtitle className='card-subheading'>Subheading 2</Card.Subtitle>
          <Card.Text className='card-body-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Card.Text>
        </div>

        <div className='card-subpart'>
          <Card.Subtitle className='card-subheading'>Subheading 3</Card.Subtitle>
          <Card.Text className='card-body-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Card.Text>
        </div>
      </Card.Body>
    </Card>

    {/*References Card*/}
    <Card className='refs'>
      <Card.Body>
        <Card.Title className='card-heading'><span className='title-bar'>|</span> References</Card.Title>
        <Card.Text className='card-body-text'>
          de Voogd, N.J.; Alvarez, B.; Boury-Esnault, N.; Cárdenas, P.; Díaz, M.-C.; Dohrmann, M.; Downey, R.; Goodwin, C.; Hajdu, E.; Hooper, J.N.A.; Kelly, M.; Klautau, M.; Lim, S.C.; Manconi, R.; Morrow, C.; Pinheiro, U.; Pisera, A.B.; Ríos, P.; Rützler, K.; Schönberg, C.; Turner, T.; Vacelet, J.; van Soest, R.W.M.; Xavier, J. (2025). World Porifera Database. Accessed at https://www.marinespecies.org/porifera on 2025-07-24. doi:10.14284/359
          <br />
          <br />
          Hooper, J. and Van Soest, R. (2002) Systema Porifera. A Guide to the Classification of Sponges. Springer, New York. http://dx.doi.org/10.1007/978-1-4615-0747-5_1
          <br />
          <br />
          Schonberg, C. 2021. No taxonomy needed: Sponge functional morphologies inform about environmental conditions. Ecological Indicators. 129. 107806. 10.1016/j.ecolind.2021.107806.
        </Card.Text>
      </Card.Body>
    </Card>

    {/* New Card with Title and Subtitle 
    <Card style={{ width: '18rem', marginTop: '1rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>*/}
  </div>
);

export default HomeCards;
