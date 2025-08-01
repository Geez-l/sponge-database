"use client";
import React from "react";
import "../css/about.css";
import Footer from "../components/footer";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/variable.css";
import { heads, divers, mentors, interns } from "../components/team";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <div className="faq-div">
        <div className="about-bg">
          <section className="faq-title">
            <h1 className="about-us">About Us</h1>
          </section>
        </div>

        <div className="about-title">
          <h1 className="text-center">THE PHILIPPINE SPONGE GUIDE</h1>
          <div className="about-divider"></div>
        </div>

        <div className="about-content-wrapper">
          <div className="about-intro-block">
            <div className="container-img"></div>
            <div className="intro-text">
              <p>
                The Philippine Sponge Guide represents ongoing and continuing
                efforts to document sponge biodiversity in the archipelago. It
                is a collaborative effort among dedicated researchers and
                supporting institutions. This initiative is made possible
                through the Marine Science Institute of the University of the
                Philippines Diliman with support from the Department of Science
                and Technology-Philippine Council for Agriculture, Aquatic, and
                Natural Resources Research and Development (DOST-PCAARRD)
                through the Coastal Acidification and Mesophotic Coral
                Ecosystems Programs.
              </p>
              <p>
                The Philippine sponge guide is a database design and
                implementation by the Philippine Genome Center Diliman Core
                Facility for Bioinformatics and the Marine Molecular Laboratory
                of the Marine Science Institute, University of the Philippines
                Diliman.
              </p>
            </div>
          </div>
        </div>

        <section className="people-involved">
          <h1>People Involved</h1>

          {/* UP MSI Project Leaders */}
          <h3 className="team-section-title">UP MSI Project Leaders</h3>
          <div className="msi-people">
            <div className="project-leads">
              {heads.map((person, i) => (
                <div className="org-card" key={i}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={200}
                    height={200}
                    className="org-img"
                  />
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divers */}
          <h3 className="team-section-title">
            Photographers and Field Collectors
          </h3>
          <div className="divers">
            <div className="team-list">
              {divers.map((diver, i) => (
                <div className="org-card" key={i}>
                  <Image
                    src={diver.image}
                    alt={diver.name}
                    width={200}
                    height={200}
                    className="org-img"
                  />
                  <h3>{diver.name}</h3>
                  <p>{diver.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mentors */}
          <h3 className="team-section-title">PGC-CFB Mentors</h3>
          <div className="pgc-people">
            <div className="team-list">
              {mentors.map((mentor, i) => (
                <div className="org-card" key={i}>
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={200}
                    height={200}
                    className="org-img"
                  />
                  <h3>{mentor.name}</h3>
                  <p>{mentor.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interns */}
          <h3 className="team-section-title">PGC-CFB BITP 2025 Interns</h3>
          <div className="pgc-interns">
            <div className="team-list">
              {interns.map((intern, i) => (
                <div className="org-card" key={i}>
                  <Image
                    src={intern.image}
                    alt={intern.name}
                    width={200}
                    height={200}
                    className="org-img"
                  />
                  <h3>{intern.name}</h3>
                  <p>{intern.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
