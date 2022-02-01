import { useSelector, useDispatch } from "react-redux";

import Speech from "speak-tts";

import Highlighter from "react-highlight-words";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

import Grid from "@mui/material/Grid";

import ReactPDF from "@intelllex/react-pdf";

import "../styles.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import pdfUrl from "../assets/zaban10-lesson3.pdf";

const LessonSection = () => {
  let location = useLocation();

  // const content = location.state.content;
  // const content_fa = location.state.content_fa;

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

  const click_on_sentence = () => {
    var s = window.getSelection();

    s.modify("move", "backward", "sentence");
    s.modify("extend", "forward", "sentence");
    var a = s.toString();

    let res = a;
    res = res.trim();
    speak(res);
    setSelected(res);

    // let arr_en = content.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    // let arr_fa = content_fa.replace(/([.?!])\s*(?=)/g, "$1|").split("|");

    // let index = arr_en.indexOf(res);
    // let selected_fa = arr_fa[index];
    // setSelected_fa(selected_fa);
  };

  const click_on_word = () => {
    var s = window.getSelection();
    s.modify("extend", "backward", "word");
    var b = s.toString();

    s.modify("extend", "forward", "word");
    var a = s.toString();
    s.modify("move", "forward", "character");

    let res = b + a;
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
    <div className="LessonSection">
      <br />
      <br />

      <div style={{ height: "70vh", position: "relative" }}>
        <div onClick={clicked}>
          <ReactPDF url={pdfUrl} showProgressBar />
        </div>

        <br />
      </div>

      <br />
      <div
        style={{
          color: "green",
          fontWeight: "bold"
        }}
      >
        {selected_fa}
      </div>

      <Grid container style={{ marginLeft: "10%", height: "10vh" }}>
        <Grid item xs={8}>
          <Typography variant="h6" id="rate-slider" gutterBottom>
            سرعت پخش
          </Typography>

          <Slider
            aria-label="rate-slider"
            defaultValue={rate * 100}
            valueLabelDisplay="auto"
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
          <InputLabel id="demo-simple-select-standard-label">
            حالت تلفظ
          </InputLabel>
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
    </div>
  );
};
export default LessonSection;
