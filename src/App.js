import Speech from "speak-tts";
import "./styles.css";

export default function App() {
  const speech = new Speech();
  speech
    .init({
      volume: 1,
      lang: "en-GB",
      rate: 0.2,
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
  const speak = () => {
    speech
      .speak({
        text: "An error occured while initializing",
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

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={speak}>speak</button>
    </div>
  );
}
