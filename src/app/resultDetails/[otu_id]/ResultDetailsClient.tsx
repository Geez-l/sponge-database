"use client";
import React from "react";
import Card from "react-bootstrap/Card";
import { Tabs, Tab, Table, Button } from "react-bootstrap";
import Image from "next/image";
import Footer from "../../components/footer";
import { useRouter } from "next/navigation";
import "../../css/resultDetails.css";
import {toSentenceCase} from "../../helpers/sentenceCase";

interface Sponge {
  oscule_shape: string;
  oscule_distribution: string;
  ostia: string;
  date_collected?: string;
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
  otu_img_fname: string;
  sample_img_fname: string;
}

export default function ResultDetailsClient({
  sponge,
  images,
}: {
  sponge: Sponge;
  images: ImageData[];
}) {
  const router = useRouter();

  // Function for formatting date {not working}
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not Available";
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Not Available"
      : date.toISOString().slice(0, 10);
  };
  const extractFilename = (url: string): string => {
    if (!url) return "POXXXXXX";

    const parts = url.split("/");
    return parts[parts.length - 1] || "POXXXXXX";
  }


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
                      {images.length > 0
                        ? extractFilename(
                            images[0].sample_img_fname ||
                              images[0].sampleImageUrl
                          )
                        : "POXXXXXX"}
                      {/* {ImageData.sample_img_fname || "P0XXXXX"} */}
                    </p>
                    <p className="sample-date">
                      {sponge.date_collected &&
                      !isNaN(new Date(sponge.date_collected).getTime())
                        ? new Date(sponge.date_collected)
                            .toISOString()
                            .slice(0, 10)
                        : sponge.date_collected || "Not Available"}
                    </p>
                  </div>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Site</td>
                        <td>
                          {toSentenceCase(sponge.site_name || "N/A")},{" "}
                          {toSentenceCase(sponge.location_name || "N/A")}
                        </td>
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
                            <a
                              href={sponge.barcode_sequences}
                              target="_blank"
                              rel="nooperner noreferrer"
                              className="barcode-link"
                            >
                              28S rRNA C2-D2 Domains
                            </a>
                          ) : (
                            "N/A"
                          )}
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
