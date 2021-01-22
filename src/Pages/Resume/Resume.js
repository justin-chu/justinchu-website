import React from "react";
import "./Resume.css";
// import { Document, Page, pdfjs } from "react-pdf";
// import resume from "./resume.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
  // function removeTextLayerOffset() {
  //   const textLayers = document.querySelectorAll(
  //     ".react-pdf__Page__textContent"
  //   );
  //   textLayers.forEach((layer) => {
  //     const { style } = layer;
  //     style.top = "0";
  //     style.left = "0";
  //     style.transform = "";
  //   });
  // }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="resume-container">
        <h1 className="sub-header" style={{ marginTop: 0, marginBottom: 20 }}>
          Resume
        </h1>
        <a
          style={{ textDecoration: "none" }}
          href="https://drive.google.com/file/d/1r3gJgt1mFUHEEGLmqVqC1CORPbf5Hm5-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{ margin: 0 }}
            className="button resume-button"
            onClick={() => {}}
          >
            View resume
          </button>
        </a>
        {/* <div
          style={{
            border: "1px solid grey",
          }}
        >
          <Document
            width={100}
            file={resume}
            onLoadSuccess={removeTextLayerOffset}
          >
            <Page pageNumber={1} />
          </Document>
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
