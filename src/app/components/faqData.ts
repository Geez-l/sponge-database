/*Question and answers for the FAQ page */

export const faqData = [
  {
    q: "What are OTU IDs? How were they determined for each sponge?",
    a: [
      `Every photographed sponge was assigned a specific Operational Taxonomic Unit (OTU) identification by the UP Marine Science Institute based on distinct morphological characteristics, including functional form, growth form, color, and surface texture.`,
      `Putative identifications were based entirely on morphological features observed in the field and laboratory. For some collected specimens, molecular analysis and microscopic skeletal examination were also conducted. This included analyzing the arrangement of organic fibers and spicules; microscopic skeletal elements composed of silica or calcium carbonate. To confirm the identity of each species, spicules and fibers were directly examined for in which spicules and tissue sections were measured and photographed using a microscope equipped with a mounted camera.`,
      `Please note that multiple OTU IDs may correspond to the same putative species name, as variations in morphology may exist within a species. All morphological characteristics, along with the associated photographs, are shown on the corresponding OTU information page.`,
    ],
  },
  {
    q: "How can I search for an image of a sponge?",
    a: [
      `Images in the Philippine Sponge Database may be searched using the attributes below:`,
    ],
    list: [
      "Operational taxonomic unit identification (OTU ID)",
      "Location",
      "Color",
      "Functional form (Schonberg, 2021)",
      "Putative identification",
    ],
  },
  {
    q: "What other types of information are in the database?",
    a: [
      `In addition to identifying Operational Taxonomic Units (OTUs) based on the morphological characteristics of sponges, we have documented the following information for each observation:`,
    ],
    list: [
      "Location where the sponge was observed or collected",
      "Date the sponge was observed and/or collected",
      "Depth at which the sponge was observed or collected",
      "Sample code, if a physical specimen was collected",
      "Functional form, classified according to Schönberg (2021)",
      "Color of the sponge as observed in situ",
      "Detailed morphological descriptions, including growth form, surface texture, oscula shape and distribution, and ostia characteristics",
      "Microscopic imagery, such as images of spicules and tissue sections, if available",
      "DNA barcode sequences, if molecular data were obtained",
      `Putative identification for certain specimens, when possible, according to <a href="https://link.springer.com/book/10.1007/978-1-4615-0747-5" target="_blank" rel="noopener noreferrer">Systema Porifera (Hooper and van Soest, 2002)</a> and the <a href="https://www.marinespecies.org/porifera/" target="_blank" rel="noopener noreferrer">World Register of Marine Species</a>`,
    ],
  },
  {
    q: "What is the difference between the functional form and growth form?",
    a: [
      `The functional form was assigned based on the classification system by <a href="https://www.sciencedirect.com/science/article/pii/S1470160X21004714" target="_blank" rel="noopener noreferrer">Schönberg (2021)</a>. The growth form is based on the descriptions of the researchers at UP MSI based on the observed morphology.`,
    ],
  },
  {
    q: "Where were the images taken?",
    a: [
      `The images were taken from various locations across the Philippines. These include the municipalities of San Esteban in Ilocos Sur, Badoc and Currimao in Ilocos Norte, Bolinao in Pangasinan, Bauan in Batangas, Anda in Bohol, and Apo Reef Natural Park in Occidental Mindoro. Each image includes the site name for reference.`,
    ],
  },
];


export const references = [
  {
    authors: "de Voogd, N.J. et al.",
    title: "World Porifera Database",
    url: "https://www.marinespecies.org/porifera",
    accessed: "2025-07-24",
    doi: "10.14284/359",
  },
  {
    authors: "Hooper, J. and Van Soest, R.",
    title: "Systema Porifera. A Guide to the Classification of Sponges.",
    url: "http://dx.doi.org/10.1007/978-1-4615-0747-5_1",
  },
  {
    authors: "Schonberg, C.",
    title:
      "No taxonomy needed: Sponge functional morphologies inform about environmental conditions.",
    journal: "Ecological Indicators, 129",
    doi: "10.1016/j.ecolind.2021.107806",
  },
];
