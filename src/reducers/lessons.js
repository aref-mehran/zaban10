const initilaSate = {
  lessons: [
    {
      title: "lesson3",
      sections: [
        {
          title: "conversation",
          content: `Roya and Mahsa are leaving the library.

        Roya: When I came in, you were reading a book. What was it?
        Mahsa: I was reading a book about famous Iranian scientists.
        Roya: But such books are not very interesting.
        
        Mahsa: At first I had the same idea, believe me!
        Roya: Did you find it useful?
        Mahsa: Oh yes. Actually I learned many interesting things about our scientists’ lives.
        Roya: Like what?
        Mahsa: For example Razi1 taught medicine to many young people while he was working in Ray Hospital. Or Nasireddin Toosi built Maragheh Observatory when he was studying the planets.
        
        Roya: Cool! What was the name of the book?
        Mahsa: Famous Iranian Scientists.`,
          content_fa: `رویا و مهسا در حال ترک کتابخانه هستند.

  رویا: وقتی اومدم تو داشتی کتاب میخونی. چی بود؟.
  مهسا: داشتم کتابی درباره دانشمندان مشهور ایرانی می خواندم.
  رویا: اما چنین کتاب هایی زیاد جالب نیستند.
  
  مهسا: اولش منم همین فکرو داشتم باور کن!
  رویا: به نظرت مفید بود؟.
  مهسا: اوه بله. در واقع من چیزهای جالب زیادی در مورد زندگی دانشمندانمان یاد گرفتم.
  رویا: مثلا چی؟.
  مهسا: به عنوان مثال رازی1 زمانی که در بیمارستان ری کار می کرد به بسیاری از جوانان پزشکی آموزش می داد. یا نصیرالدین طوسی رصدخانه مراغه را زمانی که در حال مطالعه سیارات بود ساخته است.
  
  رویا: باحال! اسم کتاب چی بود؟.
  مهسا: دانشمندان مشهور ایرانی.`
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
