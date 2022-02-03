import { useSelector, useDispatch } from "react-redux";

import Speech from "speak-tts";

import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

import Grid from "@mui/material/Grid";

import "../styles.css";

import PdfScroll from "./PdfScroll";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import pdfUrl from "../assets/lesson3.pdf";

const Lesson = () => {
  let location = useLocation();
  const pdfUrl = location.state.pdfUrl;

  // const content = location.state.content;
  // const content_fa = location.state.content_fa;

  const speech = new Speech();
  const [selected, setSelected] = useState("");
  const [selected_fa, setSelected_fa] = useState("");
  const [rate, setRate] = useState(0.5);

  const [mode, setMode] = useState(1);

  const gState = useSelector((state) => state);

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

  const click_on_sentence = () => {
    var s = window.getSelection();

    s.modify("move", "backward", "lineboundary");
    s.modify("extend", "forward", "lineboundary");
    var a = s.toString();

    let res = a;
    res = res.trim();
    speak(res);
    setSelected(res);
    setSelected_fa("");
    var index = 0;
    for (el of gState.lessons[0].english) {
      if (el.indexOf(res) != -1 && res.length / el.length > 0.7) {
        var farsi = gState.lessons[0].farsi[index];
        setSelected_fa(farsi);
        break;
      }
      index++;
    }
  };

  const click_on_word = () => {
    var s = window.getSelection();
    s.modify("move", "backward", "word");
    s.modify("extend", "forward", "word");
    var a = s.toString();

    let res = a;
    speak(res);
    setSelected(res);
  };

  const clicked = () => {
    if (mode === 1) {
      click_on_sentence();
    } else {
      click_on_word();
    }
  };
  return (
    <div className="LessonSection" style={{ overflowY: "hidden" }}>
      <div
        style={{
          color: "green",
          fontWeight: "bold",
          textAlign: "center",
          direction: "rtl"
        }}
      >
        {selected_fa}
      </div>

      <Grid container style={{ marginLeft: "10%", height: "10vh" }}>
        <Grid item xs={4}>
          {/* <Typography variant="h6" id="rate-slider" gutterBottom>
            سرعت پخش
          </Typography> */}

          <Slider
            aria-label="rate-slider"
            defaultValue={rate * 100}
            valueLabelDisplay="auto"
            valueLabelFormat={() => {
              return rate * 100 + " سرعت پخش";
            }}
            step={10}
            marks
            min={10}
            max={100}
            onChange={(e, newValue) => {
              setRate(newValue / 100);
            }}
            style={{ width: "80%" }}
          />
        </Grid>

        <Grid item xs={4}>
          <NativeSelect
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={mode}
            onChange={(e) => {
              setMode(Number(e.target.value));
            }}
          >
            <option value={1}>تلفظ جمله</option>
            <option value={2}>تلفظ کلمه</option>
          </NativeSelect>
        </Grid>
      </Grid>

      <div style={{ height: "70vh", position: "relative" }}>
        <div onClick={clicked}>
          <PdfScroll
            style={{ height: "70vh" }}
            url={pdfUrl}
            maxHeightPercent={70}
          />
          {/* <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document> */}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
