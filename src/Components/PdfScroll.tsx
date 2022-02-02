import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; //CDN
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import Speech from "speak-tts";

const PdfScroll = (props) => {
  /** 1. Set a state variable at the top-level of your application: */

  const speech = new Speech();
  const [selected, setSelected] = useState("");
  const [selected_fa, setSelected_fa] = useState("");
  const [rate, setRate] = useState(0.5);

  const [mode, setMode] = useState(1);

  const firstOfflineVoice = speechSynthesis.getVoices().filter((el) => {
    return el.localService == true;
  })[0]?.name;

  speech
    .init({
      volume: 1,
      lang: "en-GB",
      rate: rate,
      pitch: 1,
      voice: firstOfflineVoice,
      //'splitSentences': false,
      listeners: {
        onvoiceschanged: (voices) => {
          // console.log("Voices changed", voices);
        }
      }
    })
    .then((data) => {
      // console.log("Speech is ready", data);
    })
    .catch((e) => {
      // console.error("An error occured while initializing : ", e);
    });
  const speak = (text) => {
    speech
      .speak({
        text: text,
        queue: false,
        listeners: {
          onstart: () => {
            // console.log("Start utterance");
          },
          onend: () => {
            // console.log("End utterance");
          },
          onresume: () => {
            // console.log("Resume utterance");
          },
          onboundary: (event) => {
            // console.log(
            //   event.name +
            //     " boundary reached after " +
            //     event.elapsedTime +
            //     " milliseconds."
            // );
          }
        }
      })
      .then((data) => {
        // console.log("Success !", data);
      })
      .catch((e) => {
        // console.error("An error occurred :", e);
      });
  };

  function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }
  useEffect(() => {
    var spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      let html = `
      <svg
   id="play-icon"
   version="1.1"
   height="5%"
   width="5%"
   viewBox="0 0 1200 1200">
  <path
     d="M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65 268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,600 z M 450,300.45 450,899.55 900,600 450,300.45 z"
     id="path16995" />
</svg>
`;
      const node = document.createElement("button");
      node.innerText = "بخوان";

      // Append the "li" node to the list:
      if (spans[i].children.length === 0 && spans[i].innerText.length > 3) {
        spans[i].appendChild(node);
        node.onclick = function () {
          speak(spans[i].innerText);
        };
      }
    }
  }, []);

  const [allPageNumbers, setAllPageNumbers] = React.useState<number[]>(); // default value is undefined.
  const PAGE_MAX_HEIGHT = 600; // maxHeight for scroll

  // These are just for fun ;)
  const [outerWidth, setOuterWidth] = React.useState<number>();
  const CONTAINER_PADDING = 0;

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
                  width={window.outerWidth}
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
