import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; //CDN
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PdfScroll = (props) => {
  /** 1. Set a state variable at the top-level of your application: */

  const [allPageNumbers, setAllPageNumbers] = React.useState<number[]>(); // default value is undefined.
  const PAGE_MAX_HEIGHT = 600; // maxHeight for scroll

  // These are just for fun ;)
  const [outerWidth, setOuterWidth] = React.useState<number>();
  const CONTAINER_PADDING = 50;

  /** 2. Then, write the function: */

  // Document's onLoadSuccess function returns a PDFDocumentProxy type
  function onDocumentLoadSuccess(pdf: PDFDocumentProxy) {
    const allPageNumbers: number[] = []; // array of numbers
    for (let p = 1; p < pdf.numPages + 1; p++) {
      allPageNumbers.push(p);
    }
    setAllPageNumbers(allPageNumbers);

    // just for fun
    setOuterWidth(document.getElementById("pdf-container").offsetWidth);
  }

  /** Finally, since you have all the page numbers in state,
   *  you can just loop through the map and render each page
   *  by their page number (`pn`): */

  return (
    <div
      id="pdf-container"
      // The styling here is just for fun.
      style={{
        border: "none",
        display: "flex",
        width: "100%",
        borderRadius: "3px",
        backgroundColor: "gray",
        padding: `${CONTAINER_PADDING}px`
      }}
    >
      <Document
        file={props.url} // example PDF file located in '/public/assets/docs/*'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <div
          style={{
            maxHeight: `${PAGE_MAX_HEIGHT}px`, // needed for scroll
            overflowY: "scroll", // yes vertical scroll
            overflowX: "hidden", // no horizontal scroll

            // just for fun
            border: "2px solid lightgray", // matches the scroll color
            borderRadius: "5px"
          }}
        >
          {allPageNumbers
            ? allPageNumbers.map((pn) => (
                <Page
                  key={`page-${pn}`}
                  width={outerWidth - CONTAINER_PADDING * 2}
                  pageNumber={pn}
                /> // 'width' is just for fun.
              ))
            : undefined}
        </div>
      </Document>
    </div>
  );
};

// ¯\_(ツ)_/¯

export default PdfScroll;
