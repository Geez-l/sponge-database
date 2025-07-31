'use client';
import React from "react";
import "../css/faq.css";
import Footer from "../components/footer";
import "../css/variable.css";
import { faqData, references } from "../components/faqData";
import { Card } from "react-bootstrap";

/*Frequently asked questions */
const FAQ = () => {
  return (
    <div className="faq-div">
      <section className="faq-title">
        <h1>Frequently Asked Questions</h1>
      </section>

      <main className="faq-content">
        {faqData.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <Card className="faq-card">
              <Card.Header className="faq-header">
                <span className="title-bar">|</span> {item.q}
              </Card.Header>
              <Card.Body className="faq-body">
                {item.a &&
                  (Array.isArray(item.a)
                    ? item.a.map((para: string, index: number) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                      ))
                    : <p dangerouslySetInnerHTML={{ __html: item.a }} />)}
                {item.list && (
                  <ul>
                    {item.list.map((li: string, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: li }} />
                    ))}
                  </ul>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}

        <section className="references">
          <h4>
            <span className="title-bar">|</span> References
          </h4>
          <ul>
            {references.map((ref, index) => {
              const htmlString = `
                ${ref.authors}. <i>${ref.title}</i>${
                ref.journal ? `, ${ref.journal}` : ""
              }. ${
                ref.url
                  ? `<a class="source-link" href="${ref.url}" target="_blank" rel="noopener noreferrer">${ref.url}</a>`
                  : ""
              }${ref.doi ? `, DOI: ${ref.doi}` : ""}${
                ref.accessed ? ` (accessed ${ref.accessed})` : ""
              }.
              `;
              return (
                <li key={index} dangerouslySetInnerHTML={{ __html: htmlString }} />
              );
            })}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
