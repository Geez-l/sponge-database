"use client";
import React from "react";
import Card from "react-bootstrap/Card";
import { Tabs, Tab, Table, Button } from "react-bootstrap";
import Image from "next/image";
import Footer from "../../components/footer";
import { useRouter } from "next/navigation";
import "../../css/resultDetails.css";

interface Sponge {
  oscule_shape: string;
  oscule_distribution: string;
  ostia: string;
  date_collected: string | null;
  depth: string;
  dive_no: string;
  researcher_name: string;
  sample_code: string;
  barcode_sequences: string;
  otu_id: number;
  color: string;
  functional_form: string;
  growth_form: string;
  surface_texture: string;
  putative_id: string;
  location_name: string;
  site_name: string;
}

interface ImageData {
  otu_id: number;
  otuImageUrl: string;
  sampleImageUrl: string;
}

export default function ResultDetailsClient({
  sponge,
  images,
}: {
  sponge: Sponge;
  images: ImageData[];
}) {
  const router = useRouter();

  const toSentenceCase = (text: string): string =>
    text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not Available";
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Not Available"
      : date.toISOString().slice(0, 10);
  };

  return (
    <div>
      <main className="resultDetails-content">
        <div className="header-bg">
          <Card className="header-card">
            <h1>OTU {sponge.otu_id}</h1>
            <h5>1 sample count</h5>
            <h5 className="loc-element">
              {toSentenceCase(sponge.location_name || "Location not available")}
            </h5>
          </Card>
        </div>

        <div className="body">
          <Tabs defaultActiveKey="details" id="details-tab" className="det-tab">
            <Tab eventKey="details" title="Details">
              <div className="description-wrapper">
                <div className="desc-image">
                  {images.length > 0 ? (
                    <div className="image-grid">
                      {images.map((img, i) => (
                        <Image
                          key={`otu-image-${i}`}
                          src={
                            img.otuImageUrl || "/assets/resultDetails/logo.png"
                          }
                          alt={`OTU Image ${i + 1}`}
                          className="otu-img"
                          width={300}
                          height={200}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>No images found</p>
                  )}
                </div>

                <div className="details-wrapper">
                  <Table>
                    <thead>
                      <tr>
                        <th>Features</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Functional Form</td>
                        <td>{sponge.functional_form || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Growth Form</td>
                        <td>{sponge.growth_form || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>{sponge.color || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Surface Texture</td>
                        <td>{sponge.surface_texture || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Oscule Shape</td>
                        <td>{sponge.oscule_shape || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Oscule Distribution</td>
                        <td>{sponge.oscule_distribution || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Ostia</td>
                        <td>{sponge.ostia || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Putative ID</td>
                        <td>{toSentenceCase(sponge.putative_id || "N/A")}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Tab>

            <Tab eventKey="images" title="Samples">
              <div className="samples-wrapper">
                <div className="sample-image">
                  {images.length > 0 ? (
                    <div className="image-grid">
                      {images.map((img, i) => (
                        <Image
                          key={`sample-image-${i}`}
                          src={
                            img.sampleImageUrl ||
                            "/assets/resultDetails/logo.png"
                          }
                          alt={`Sample Image ${i + 1}`}
                          className="sample-img"
                          width={300}
                          height={200}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>No images found</p>
                  )}
                </div>

                <div className="s-details-wrapper">
                  <div className="sample-details-heading">
                    <p className="sample-id">
                      {sponge.sample_code || "P0XXXXX"}
                    </p>
                    <p className="sample-date">
                      {formatDate(sponge.date_collected)}
                    </p>
                  </div>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Site</td>
                        <td>{toSentenceCase(sponge.site_name || "N/A")}, {toSentenceCase(sponge.location_name || "N/A")}</td>
                      </tr>
                      <tr>
                        <td>Actual Depth</td>
                        <td>{sponge.depth || "N/A"} m</td>
                      </tr>
                      <tr>
                        <td>Dive Number</td>
                        <td>{sponge.dive_no || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Diver</td>
                        <td>{sponge.researcher_name || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Sample Code</td>
                        <td>{sponge.sample_code || "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Barcode Sequence</td>
                        <td>
                          {sponge.otu_id === 66 && sponge.barcode_sequences ? (
                            <a href={sponge.barcode_sequences}
                            target="_blank"
                            rel="nooperner noreferrer"
                            className="barcode-link"
                            >
                              28S rRNA C2-D2 Domains
                            </a>
                          ) : ("N/A")
                          }

                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Tab>
          </Tabs>

          <div className="backbtn-container">
            <Button className="custom-backbtn" onClick={() => router.back()}>
              ← Back to search results
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
