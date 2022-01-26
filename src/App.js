import Speech from "speak-tts";

import Highlighter from "react-highlight-words";

import "./styles.css";
import { useState } from "react";

export default function App() {
  let content = `Roya and Mahsa are leaving the library.

  Roya: When I came in, you were reading a book. What was it?
  Mahsa: I was reading a book about famous Iranian scientists.
  Roya: But such books are not very interesting.
  
  Mahsa: At first I had the same idea, believe me!
  Roya: Did you find it useful?
  Mahsa: Oh yes. Actually I learned many interesting things about our scientists’ lives.
  Roya: Like what?
  Mahsa: For example Razi1 taught medicine to many young people while he was working in Ray Hospital. Or Nasireddin Toosi built Maragheh Observatory when he was studying the planets.
  
  Roya: Cool! What was the name of the book?
  Mahsa: Famous Iranian Scientists.`;
  const speech = new Speech();
  const [selected, setSelected] = useState("");

  speech
    .init({
      volume: 1,
      lang: "en-GB",
      rate: 0.5,
      pitch: 1,
      //'voice':'Google UK English Male',
      //'splitSentences': false,
      listeners: {
        onvoiceschanged: (voices) => {
          console.log("Voices changed", voices);
        }
      }
    })
    .then((data) => {
      console.log("Speech is ready", data);
    })
    .catch((e) => {
      console.error("An error occured while initializing : ", e);
    });
  const speak = (text) => {
    speech
      .speak({
        text: text,
        queue: false,
        listeners: {
          onstart: () => {
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: (event) => {
            console.log(
              event.name +
                " boundary reached after " +
                event.elapsedTime +
                " milliseconds."
            );
          }
        }
      })
      .then((data) => {
        console.log("Success !", data);
      })
      .catch((e) => {
        console.error("An error occurred :", e);
      });
  };

  const click_on_content = () => {
    var s = window.getSelection();
    s.modify("extend", "backward", "sentence");
    var b = s.toString();

    s.modify("extend", "forward", "sentence");
    var a = s.toString();
    s.modify("move", "forward", "sentence");
    let res = b + a;
    speak(res);
    setSelected(res);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={[selected]}
        autoEscape={true}
        textToHighlight={content}
        onClick={click_on_content}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </div>
  );
}
