import zaban10_en from "../assets/zaban10_en.js";
import zaban10_fa from "../assets/zaban10_fa.js";

import pdfUrl1 from "../assets/lesson1.pdf";
import pdfUrl2 from "../assets/lesson2.pdf";
import pdfUrl3 from "../assets/lesson3.pdf";
import pdfUrl4 from "../assets/lesson4.pdf";

const initilaSate = {
  lessons: [
    {
      english: zaban10_en.split("\n"),
      farsi: zaban10_fa.split("\n"),
      title: "lesson1",
      pdfUrl: pdfUrl1
    },
    {
      english: zaban10_en.split("\n"),
      farsi: zaban10_fa.split("\n"),
      title: "lesson2",
      pdfUrl: pdfUrl2
    },
    {
      english: zaban10_en.split("\n"),
      farsi: zaban10_fa.split("\n"),
      title: "lesson3",
      pdfUrl: pdfUrl3
    },
    {
      english: zaban10_en.split("\n"),
      farsi: zaban10_fa.split("\n"),
      title: "lesson4",
      pdfUrl: pdfUrl4
    }
  ]
};

export default (state = initilaSate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state;
    case "DECREMENT":
      return state;
    default:
      return state;
  }
};
