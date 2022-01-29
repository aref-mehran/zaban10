import Speech from "speak-tts";

import Highlighter from "react-highlight-words";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

import Grid from "@mui/material/Grid";

import "../styles.css";
import { useState } from "react";

const LessonSection = () => {
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

  let content_fa = `رویا و مهسا در حال ترک کتابخانه هستند.

  رویا: وقتی اومدم تو داشتی کتاب میخونی. چی بود؟.
  مهسا: داشتم کتابی درباره دانشمندان مشهور ایرانی می خواندم.
  رویا: اما چنین کتاب هایی زیاد جالب نیستند.
  
  مهسا: اولش منم همین فکرو داشتم باور کن!
  رویا: به نظرت مفید بود؟.
  مهسا: اوه بله. در واقع من چیزهای جالب زیادی در مورد زندگی دانشمندانمان یاد گرفتم.
  رویا: مثلا چی؟.
  مهسا: به عنوان مثال رازی1 زمانی که در بیمارستان ری کار می کرد به بسیاری از جوانان پزشکی آموزش می داد. یا نصیرالدین طوسی رصدخانه مراغه را زمانی که در حال مطالعه سیارات بود ساخته است.
  
  رویا: باحال! اسم کتاب چی بود؟.
  مهسا: دانشمندان مشهور ایرانی.`;

  const speech = new Speech();
  const [selected, setSelected] = useState("");
  const [selected_fa, setSelected_fa] = useState("");
  const [rate, setRate] = useState(0.5);

  const [mode, setMode] = useState(1);

  speech
    .init({
      volume: 1,
      lang: "en-GB",
      rate: rate,
      pitch: 1,
      //'voice':'Google UK English Male',
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
    s.modify("extend", "backward", "sentence");
    var b = s.toString();

    s.modify("extend", "forward", "sentence");
    var a = s.toString();
    s.modify("move", "forward", "sentence");
    let res = b + a;
    res = res.trim();
    speak(res);
    setSelected(res);

    let arr_en = content.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    let arr_fa = content_fa.replace(/([.?!])\s*(?=)/g, "$1|").split("|");

    let index = arr_en.indexOf(res);
    let selected_fa = arr_fa[index];
    setSelected_fa(selected_fa);
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

      <div style={{ overflow: "auto", height: "60vh" }}>
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[selected]}
          autoEscape={true}
          textToHighlight={content}
          onClick={clicked}
          style={{ whiteSpace: "pre-wrap" }}
        />
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

      <Grid container style={{ height: "20vh" }}>
        <Grid item xs={8}>
          <Typography variant="h6" id="rate-slider" gutterBottom>
            سرعت پخش
          </Typography>

          <Slider
            aria-label="rate-slider"
            defaultValue={rate}
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
