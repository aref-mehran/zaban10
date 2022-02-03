import zaban10_en from "../assets/zaban10_en.js";
import zaban10_fa from "../assets/zaban10_fa.js";

const initilaSate = {
  lessons: [
    {
      english: zaban10_en.split("\n"),
      farsi: zaban10_fa.split("\n"),
      title: "lesson3",
      sections: [
        {
          title: "conversation"
        },
        {
          title: "reading"
        }
      ]
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
