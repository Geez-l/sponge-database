"use client";
// export const dynamic = "force-dynamic";
import React, { useEffect, useState, Suspense} from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "../components/footer";
import Loading from "../helpers/loading";
import "../css/result.css";

interface Sponge {
  otu_id: number;
  color: string;
  functional_form: string;
  growth_form: string;
  surface_texture: string;
  location_name?: string;
  date_collected?: string;
  putative_id: string;
}

function toSentenceCase(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get("search") || "";
  const [sponges, setSponges] = useState<Sponge[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const router = useRouter();

  const color = searchParams.get("color") || "Not Available";
  const functionalForm = searchParams.get("functional_form") || "Not available";
  const putativeID = searchParams.get("putative_id") || "Not available";
  const location = searchParams.get("location") || "Not available";

  // Fetch data based on either search or filters
  useEffect(() => {
    const fetchSponges = async () => {
      const search = searchParams.get("search");

      if (search) {
        try {
          const url = `http://localhost:5000/api/samples/search?search=${encodeURIComponent(
            search
          )}`;
          const res = await fetch(url);
          const data = await res.json();
          setSponges(data.data || []);
        } catch (err) {
          console.error("Global search error:", err);
        }
      } else {
        const params = new URLSearchParams();
        if (color !== "Not Available") params.append("color", color);
        if (functionalForm !== "Not available")
          params.append("functional_form", functionalForm);
        if (putativeID !== "Not available")
          params.append("putative_id", putativeID);
        if (location !== "Not available") params.append("location", location);

        try {
          const response = await fetch(
            `http://localhost:5000/api/samples?${params}`
          );
          const data = await response.json();
          setSponges(data.data || []);
        } catch (err) {
          console.error("Filtered fetch error:", err);
        }
      }
    };

    fetchSponges();
  }, [searchParams]);

  // Handle search input submit in results page
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    router.push(`/result?search=${encodeURIComponent(trimmed.toLowerCase())}`);
  };

  const filteredSponges = sponges.filter((sponge) =>
    Object.values(sponge).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // For button to full otu list
  const hasSearchOrFilters =
    searchParams.get("search") ||
    color !== "Not available" ||
    location !== "Not available" ||
    functionalForm !== "Not available" ||
    putativeID !== "Not available";

  const handleResetToUnfiltered = () => {
    setSearchTerm("");
    router.replace("/result");
  };

  return (
    <div>
      <main className="result-header">
        <div className="header-sample">
          <h1>OTU List</h1>
          <div className="container-fluid d-flex justify-content-end">
            <form className="search-bar-wrapper" onSubmit={handleSearchSubmit}>
              <div className="search-bar-left-icon">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Enter keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="backbtn-container">
          {hasSearchOrFilters && (
            <Button onClick={handleResetToUnfiltered} className="back-btn">
              ← View full OTU list
            </Button>
          )}
        </div>

        <div className="filters-container">
          <p className="text-sm-start">
            <strong>Selected Filters:</strong>
          </p>
          <span className="individual-filter">Color = {color}</span>
          <span className="individual-filter">
            Functional Form = {functionalForm}
          </span>
          <span className="individual-filter">
            Putative ID = {toSentenceCase(putativeID)}
          </span>
          <span className="individual-filter">
            Location = {toSentenceCase(location)}
          </span>
        
        {searchParam && (
          <div className="query-display-container">
            <p className="query-display">
              Input query: <strong>"{searchParam}"</strong>
            </p>
          </div>

        )}
        </div>
       
      </main>

      <main className="result-table">
        <div className="res-tab">
          <h5>Results</h5>
        </div>
        <div className="result-container">
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr className="table-primary">
                <th>OTU No.</th>
                <th>Color</th>
                <th>Functional Form</th>
                <th>Growth Form</th>
                <th>Surface Texture</th>
                <th>Sample Location</th>
                <th>Putative ID</th>
                <th>Date Collected</th>
              </tr>
            </thead>
            <tbody>
              {filteredSponges.length > 0 ? (
                filteredSponges.map((sponge, index) => (
                  <tr
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      router.push(`/resultDetails/${sponge.otu_id}`)
                    }
                  >
                    <td>{sponge.otu_id}</td>
                    <td>{sponge.color}</td>
                    <td>{sponge.functional_form}</td>
                    <td>{sponge.growth_form}</td>
                    <td>{sponge.surface_texture}</td>
                    <td>{toSentenceCase(sponge.location_name || "N/A")}</td>
                    <td className="italic-putative">
                      {toSentenceCase(sponge.putative_id?.trim() || "N/A")}
                    </td>
                    <td>
                      {sponge.date_collected &&
                      !isNaN(new Date(sponge.date_collected).getTime())
                        ? new Date(sponge.date_collected)
                            .toISOString()
                            .slice(0, 10)
                        : sponge.date_collected || "Not Available"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center" }}>
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </main>

      <Footer />
    </div>
  );
}
