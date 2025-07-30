'use client';
import React from 'react';
import Card from 'react-bootstrap/Card';

/*Information about how to search the database and information about Philippine Marine Sponges*/

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
          Our database contains information on Philippine sponges collected by the UP Marine Science Institute. 
          You can search for sponge attributes by typing your query in the search bar above or using the dropdown buttons in any combination:
          <br />
          <br />
          • Color
          <br />
          • Location
          <br />
          • Functional Form (Schonberg, 2021)
          <br />
          • Putative Identification
          <br />
          <br />
          To browse our full list of Operational Taxonomic Units (OTUs), navigate to the full OTU List page or submit a blank query. 
          For more information, visit our Frequently Asked Questions (FAQs) page and About Us page.
        </Card.Text>
      </Card.Body>
    </Card>
    {/*About PH Sponges Card*/}
    <Card className='about-sponges'>
      <Card.Body>
        <Card.Title className='card-heading'><span className='title-bar'>|</span> About Philippine Marine Sponges</Card.Title>
        <div className='card-subpart'>
          <Card.Subtitle className='card-subheading'>What are marine sponges?</Card.Subtitle>
          <Card.Text className='card-body-text'>
            Sponges are known to be simple invertebrate animals that reside in aquatic environments. 
            They are categorized as simple yet remarkable organisms that play an important role in the marine ecosystem. 
            Sponges belong to the phylum Porifera, which includes some of the most primitive multicellular animals on Earth. 
            Unlike other marine species, sponges lack true tissues and organs as their bodies are specialized cells for life functions 
            such as filter feeding, respiration, and reproduction (University of Hawaiʻi at Mānoa, n.d.). 
          </Card.Text>
        </div>
        
        <div className='card-subpart'>
          <Card.Subtitle className='card-subheading'>Why sponges matter</Card.Subtitle>
          <Card.Text className='card-body-text'>
            Sponges are known for filter feeding, which pumps water through their bodies, 
            removing bacteria and pollutants from their environment. This function supports the health of coral reefs 
            and other marine habitats (NOAA, 2024). Additionally, sponges provide shelter for various marine creatures, 
            from algae to small invertebrates. By doing all this, sponges help keep the reef ecosystem balanced.

          </Card.Text>
        </div>

        <div className='card-subpart'>
          <Card.Subtitle className='card-subheading'>Why is this database important?</Card.Subtitle>
          <Card.Text className='card-body-text'>
            This database is more than just a collection of sponge records, 
            but a step towards biodiversity conservation and citizen science. 
            This database hopes to make marine biodiversity records more accessible and empower researchers, students, 
            and local communities to take part in protecting the Philippine marine life. 
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
          NOAA. (2024). What is a sponge? National Ocean Service. https://oceanservice.noaa.gov/facts/sponge.html
          <br />
          <br />
          Schonberg, C. 2021. No taxonomy needed: Sponge functional morphologies inform about environmental conditions. Ecological Indicators. 129. 107806. 10.1016/j.ecolind.2021.107806.
          <br />
          <br />
          University of Hawaiʻi at Mānoa. (n.d.). Phylum Porifera. Exploring Our Fluid Earth. https://manoa.hawaii.edu/exploringourfluidearth/biological/invertebrates/phylum-porifera

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
