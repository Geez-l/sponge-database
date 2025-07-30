"use client";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab, Table } from "react-bootstrap";
import { useParams } from "next/navigation";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Footer from "../../components/footer";

import "../../css/resultDetails.css";

// sample details
interface Sponge {
  otu_id: number;
  color: string;
  functional_form: string;
  growth_form: string;
  surface_texture: string;
  location_name?: string;
  site_name?: string;
  date_collected?: string;
  putative_id: string;
  oscule_shape?: string;
  oscule_distribution?: string;
  ostia?: string;
  dive_no?: number;
  depth?: number;
  barcode_sequences?: string;
  sample_code?: string;
  researcher_name?: string;
}

//image details
interface spongeImage {
  otu_id: number;
  otuImageUrl: string;
  sampleImageUrl: string;
}

// Make values sentence case
function toSentenceCase(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const ResultDetails = () => {
  const params = useParams();
  const [hasMounted, setHasMounted] = useState(false);

  const [sponge, setSponge] = useState<Sponge | null>(null);
  const [images, setImages] = useState<spongeImage[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const otu_id = params.otu_id || "Not Available";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || otu_id === "Not Available") return;
    setLoading(true);
  }, [hasMounted, otu_id]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/images?otu_id=${otu_id}`
        );
        const data = await res.json();
        setImages(data.data || []);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    }

    if (otu_id !== "Not Available") {
      fetchImages();
    }
  }, [otu_id]);

  useEffect(() => {
    if (!hasMounted || otu_id === "Not Available") return;

    const fetchSpongeDetails = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/samples/${otu_id}`);
        const data = await res.json();
        const spongeData = data.data;
        setSponge(spongeData || null);
      } catch (err) {
        console.error("Error fetching sponge details:", err);
      }
    };

    if (otu_id !== "Not Available") {
      fetchSpongeDetails();
    }
  }, [hasMounted, otu_id]);

  if (!hasMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main className="resultDetails-content">
        <div className="header-bg">
          <Card className="header-card">
            {sponge ? (
              <>
                <h1>OTU {sponge.otu_id}</h1>
                <h5>1 sample count</h5>
                <h5 className="loc-element">
                  {toSentenceCase(
                    sponge.location_name || "Location not available"
                  )}
                </h5>
              </>
            ) : (
              <div className="OTU-NA">
                <h1>OTU Not Available</h1>
                <h5>X sample count</h5>
                <h5 className="loc-element">Location</h5>
              </div>
            )}
          </Card>
        </div>

        <div className="body">
          <Tabs defaultActiveKey="details" id="details-tab" className="det-tab">
            <Tab eventKey="details" title="Details">
              <div className="description-wrapper">
                <div className="desc-image">
                  {loading ? (
                    <p>Loading images...</p>
                  ) : images.length > 0 ? (
                    <div className="image-grid">
                      {images.map((img, index) => (
                        <img
                          key={img.otu_id || index}
                          src={
                            img.otuImageUrl || "/assets/resultDetails/logo.png"
                          }
                          alt={"OTU Image"}
                          className="otu-img"
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
                        <td className="table-label">Functional Form</td>
                        <td>{sponge?.functional_form || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Growth Form</td>
                        <td>{sponge?.growth_form || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Color</td>
                        <td>{sponge?.color || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Surface Texture</td>
                        <td>{sponge?.surface_texture || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Oscule Shape</td>
                        <td>{sponge?.oscule_shape || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Oscule Distribution</td>
                        <td>{sponge?.oscule_distribution || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Ostia</td>
                        <td>{sponge?.ostia || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Putative ID</td>
                        <td className="italic-putative">
                          {toSentenceCase(sponge?.putative_id || "N/A")}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Tab>

            <Tab eventKey="images" title="Samples">
              <div className="samples-wrapper">
                <div className="sample-image">
                  {loading ? (
                    <p>Loading images...</p>
                  ) : images.length > 0 ? (
                    <div className="image-grid">
                      {images.map((img, index) => (
                        <img
                          key={img.otu_id || index}
                          src={
                            img.sampleImageUrl ||
                            "/assets/resultDetails/logo.png"
                          }
                          alt={"Sample Image"}
                          className="sample-img"
                        />
                      ))}
                    </div>
                  ) : (
                    <p>No images found</p>
                  )}
                </div>

                <div className="s-details-wrapper">
                  <div className="sample-details-heading">
                    <p className="sample-id">P0XXXXX\</p>
                    <p className="sample-date">
                      {sponge?.date_collected &&
                      !isNaN(new Date(sponge?.date_collected).getTime())
                        ? new Date(sponge.date_collected)
                            .toISOString()
                            .slice(0, 10)
                        : sponge?.date_collected || "Not Available"}
                    </p>
                  </div>
                  <Table>
                    <tbody className="sample-table">
                      <tr>
                        <td className="table-label">Site</td>
                        <td>{toSentenceCase(sponge?.site_name || "N/A")}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Actual Depth</td>
                        <td>{sponge?.depth || "N/A"} m</td>
                      </tr>
                      <tr>
                        <td className="table-label">Dive Number</td>
                        <td>{sponge?.dive_no || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="table-label">Diver</td>
                        <td>{sponge?.researcher_name || "N/A"}</td>
                      </tr>

                      <tr>
                        <td className="table-label">Sample Code</td>
                        <td>{sponge?.sample_code || "N/A"}</td>
                      </tr>

                      <tr>
                        <td className="table-label">Barcode Sequence</td>
                        <td>{sponge?.barcode_sequences || "N/A"}</td>
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
};

export default ResultDetails;
