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
        },
        {
          title: "reading",
          content: `Human knowledge develops with scientists’ hard work. Many great
          men and women try hard to find facts, solve problems and invent
          things.
          Some of these scientists did not have easy lives. But they tried hard
          when they were working on problems. They never felt weak when they
          were studying. They never gave up when they were doing research.
          There are great stories about scientists and their lives. One such a story
          is about Thomas Edison. As a young boy, Edison was very interested
          in science. He was very energetic and always asked questions. Sadly,
          young Edison lost his hearing at the age of 12. He did not attend
          school and learned science by reading books in the library himself.
          When he grew up he worked in different places, but he never lost his
          interest in making things. Edison was famous for doing thousands of
          experiments to find answers to problems. He said, “I never quit until
          I get what I’m after”. Edison had more than 1,000 inventions
          and was very successful at the end of his life.
          Many great names had stories like this.
          But the key to their success is
          their hard work and belief in
          themselves. If you want to get
          what you want, work hard
          and never give up.`,
          content_fa: `دانش بشری با کار سخت دانشمندان توسعه می یابد. خیلی عالیه
          مردان و زنان سخت تلاش می کنند تا حقایق را بیابند، مشکلات را حل کنند و اختراع کنند
          چیزها
          برخی از این دانشمندان زندگی آسانی نداشتند. اما خیلی تلاش کردند
          زمانی که روی مشکلات کار می کردند. آنها هرگز احساس ضعف نمی کردند
          مشغول مطالعه بودند زمانی که مشغول تحقیق بودند هرگز تسلیم نشدند.
          داستان های بزرگی در مورد دانشمندان و زندگی آنها وجود دارد. یکی از این داستانها
          درباره توماس ادیسون است. به عنوان یک پسر جوان، ادیسون بسیار علاقه مند بود
          در علم. او بسیار پرانرژی بود و همیشه سؤال می کرد. با ناراحتی،
          ادیسون جوان در سن 12 سالگی شنوایی خود را از دست داد. او شرکت نکرد
          مدرسه و خود علم را با خواندن کتاب در کتابخانه آموخت.
          وقتی بزرگ شد در جاهای مختلف کار می کرد، اما هیچ وقت کارش را از دست نداد
          علاقه به ساختن چیزها ادیسون به هزاران کار معروف بود
          آزمایش برای یافتن پاسخ برای مسائل او گفت: «من هیچ وقت دست از کار نکشیدم
          آنچه را که دنبالش هستم می‌گیرم». ادیسون بیش از 1000 اختراع داشت
          و در پایان عمر بسیار موفق بود.
          بسیاری از نام های بزرگ داستان هایی از این دست داشتند.
          اما رمز موفقیت آنها این است
          سخت کوشی و اعتقاد آنها به
          خودشان اگر می خواهید بدست آورید
          آنچه می خواهید، سخت کار کنید
          و هرگز تسلیم نشو`
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
