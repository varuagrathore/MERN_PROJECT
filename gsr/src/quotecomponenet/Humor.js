import React from 'react';

export default function Humor() {
  const quotes = [
    "1. I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "2. My bed is a magical place where I suddenly remember everything I forgot to do. - Unknown",
    "3. I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness. - Emo Philips",
    "4. I always wanted to be somebody, but now I realize I should have been more specific. - Lily Tomlin",
    "5. Some cause happiness wherever they go; others whenever they go. - Oscar Wilde",
    "6. The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it. - Terry Pratchett",
    "7. I intend to live forever. So far, so good. - Steven Wright",
    "8. A day without sunshine is like, you know, night. - Steve Martin",
    "9. The first time I see a jogger smiling, I’ll consider it. - Joan Rivers",
    "10. If at first, you don’t succeed, then skydiving definitely isn’t for you. - Steven Wright",
    "11. I like work; it fascinates me. I can sit and look at it for hours. - Jerome K. Jerome",
    "12. The best way to appreciate your job is to imagine yourself without one. - Oscar Wilde",
    "13. Why do they call it rush hour when nothing moves? - Robin Williams",
    "14. I’m on a whiskey diet. I’ve lost three days already. - Tommy Cooper",
    "15. I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "16. My bed is a magical place where I suddenly remember everything I forgot to do. - Unknown",
    "17. I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness. - Emo Philips",
    "18. I always wanted to be somebody, but now I realize I should have been more specific. - Lily Tomlin",
    "19. Some cause happiness wherever they go; others whenever they go. - Oscar Wilde",
    "20. The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it. - Terry Pratchett",
    "21. I intend to live forever. So far, so good. - Steven Wright",
    "22. A day without sunshine is like, you know, night. - Steve Martin",
    "23. The first time I see a jogger smiling, I’ll consider it. - Joan Rivers",
    "24. If at first, you don’t succeed, then skydiving definitely isn’t for you. - Steven Wright",
    "25. I like work; it fascinates me. I can sit and look at it for hours. - Jerome K. Jerome",
    "26. The best way to appreciate your job is to imagine yourself without one. - Oscar Wilde",
    "27. Why do they call it rush hour when nothing moves? - Robin Williams",
    "28. I’m on a whiskey diet. I’ve lost three days already. - Tommy Cooper",
    "29. I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "30. My bed is a magical place where I suddenly remember everything I forgot to do. - Unknown",
    "31. I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness. - Emo Philips",
    "32. I always wanted to be somebody, but now I realize I should have been more specific. - Lily Tomlin",
    "33. Some cause happiness wherever they go; others whenever they go. - Oscar Wilde",
    "34. The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it. - Terry Pratchett",
    "35. I intend to live forever. So far, so good. - Steven Wright",
    "36. A day without sunshine is like, you know, night. - Steve Martin",
    "37. The first time I see a jogger smiling, I’ll consider it. - Joan Rivers",
    "38. If at first, you don’t succeed, then skydiving definitely isn’t for you. - Steven Wright",
    "39. I like work; it fascinates me. I can sit and look at it for hours. - Jerome K. Jerome",
    "40. The best way to appreciate your job is to imagine yourself without one. - Oscar Wilde",
    "41. Why do they call it rush hour when nothing moves? - Robin Williams",
    "42. I’m on a whiskey diet. I’ve lost three days already. - Tommy Cooper",
    "43. I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "44. My bed is a magical place where I suddenly remember everything I forgot to do. - Unknown",
    "45. I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness. - Emo Philips",
    "46. I always wanted to be somebody, but now I realize I should have been more specific. - Lily Tomlin",
    "47. Some cause happiness wherever they go; others whenever they go. - Oscar Wilde",
    "48. The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it. - Terry Pratchett",
    "49. I intend to live forever. So far, so good. - Steven Wright",
    "50. A day without sunshine is like, you know, night. - Steve Martin",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 HUMOR QUOTES</h1>
      <div className="suc">
        <h1 className="s">HUMOR</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Laughter is the best medicine, and a good sense of humor can brighten anyone's day. These humor quotes are sure to bring a smile to your face and lift your spirits. Whether you need a quick pick-me-up or a good laugh, let these funny and witty quotes remind you not to take life too seriously. Embrace the joy of laughter and share a good joke with those around you. After all, life is better when you're laughing.
        </p>
      </div>
      <div className="quote-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <span className="quote">{quote}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
