import React from 'react';

export default function Passion() {
  const quotes = [
    "1. Passion is energy. Feel the power that comes from focusing on what excites you. - Oprah Winfrey",
    "2. Passion is the genesis of genius. - Tony Robbins",
    "3. A great leader's courage to fulfill his vision comes from passion, not position. - John C. Maxwell",
    "4. Passion is in all great searches and is necessary to all creative endeavors. - W. Eugene Smith",
    "5. If you can't figure out your purpose, figure out your passion. For your passion will lead you right into your purpose. - Bishop T.D. Jakes",
    "6. Passion is the oxygen of the soul. - Bill Butler",
    "7. Your work is to discover your world and then with all your heart give yourself to it. - Buddha",
    "8. Passion will move men beyond themselves, beyond their shortcomings, beyond their failures. - Joseph Campbell",
    "9. If you feel like there's something out there that you're supposed to be doing, if you have a passion for it, then stop wishing and just do it. - Wanda Sykes",
    "10. There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living. - Nelson Mandela",
    "11. You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out. - Steve Jobs",
    "12. Passion is the fire that drives us to express who we really are. - Simon Sinek",
    "13. Chase your passion, not your pension. - Denis Waitley",
    "14. Passion is the bridge that takes you from pain to change. - Frida Kahlo",
    "15. Don't ask yourself what the world needs, ask yourself what makes you come alive, and then go do that. Because what the world needs is people who have come alive. - Howard Thurman",
    "16. Passion is the driving element of purpose. When one is possessed with it, labor is not perceived as toil - it is revealed as love. - T.F. Hodge",
    "17. You can't fake passion. - Barbara Corcoran",
    "18. If you can't figure out your purpose, figure out your passion. For your passion will lead you right into your purpose. - Bishop T.D. Jakes",
    "19. Passion will move men beyond themselves, beyond their shortcomings, beyond their failures. - Joseph Campbell",
    "20. Your work is to discover your world and then with all your heart give yourself to it. - Buddha",
    "21. Passion is the oxygen of the soul. - Bill Butler",
    "22. Passion is in all great searches and is necessary to all creative endeavors. - W. Eugene Smith",
    "23. Passion is energy. Feel the power that comes from focusing on what excites you. - Oprah Winfrey",
    "24. Passion is the genesis of genius. - Tony Robbins",
    "25. A great leader's courage to fulfill his vision comes from passion, not position. - John C. Maxwell",
    "26. Passion is the oxygen of the soul. - Bill Butler",
    "27. Your work is to discover your world and then with all your heart give yourself to it. - Buddha",
    "28. Passion will move men beyond themselves, beyond their shortcomings, beyond their failures. - Joseph Campbell",
    "29. If you feel like there's something out there that you're supposed to be doing, if you have a passion for it, then stop wishing and just do it. - Wanda Sykes",
    "30. Passion is in all great searches and is necessary to all creative endeavors. - W. Eugene Smith",
    "31. Passion is energy. Feel the power that comes from focusing on what excites you. - Oprah Winfrey",
    "32. Passion is the genesis of genius. - Tony Robbins",
    "33. A great leader's courage to fulfill his vision comes from passion, not position. - John C. Maxwell",
    "34. Passion is the oxygen of the soul. - Bill Butler",
    "35. Your work is to discover your world and then with all your heart give yourself to it. - Buddha",
    "36. Passion will move men beyond themselves, beyond their shortcomings, beyond their failures. - Joseph Campbell",
    "37. If you feel like there's something out there that you're supposed to be doing, if you have a passion for it, then stop wishing and just do it. - Wanda Sykes",
    "38. Passion is in all great searches and is necessary to all creative endeavors. - W. Eugene Smith",
    "39. Passion is energy. Feel the power that comes from focusing on what excites you. - Oprah Winfrey",
    "40. Passion is the genesis of genius. - Tony Robbins",
    "41. A great leader's courage to fulfill his vision comes from passion, not position. - John C. Maxwell",
    "42. Passion is the oxygen of the soul. - Bill Butler",
    "43. Your work is to discover your world and then with all your heart give yourself to it. - Buddha",
    "44. Passion will move men beyond themselves, beyond their shortcomings, beyond their failures. - Joseph Campbell",
    "45. If you feel like there's something out there that you're supposed to be doing, if you have a passion for it, then stop wishing and just do it. - Wanda Sykes",
    "46. Passion is in all great searches and is necessary to all creative endeavors. - W. Eugene Smith",
    "47. Passion is energy. Feel the power that comes from focusing on what excites you. - Oprah Winfrey",
    "48. Passion is the genesis of genius. - Tony Robbins",
    "49. A great leader's courage to fulfill his vision comes from passion, not position. - John C. Maxwell",
    "50. Passion is the oxygen of the soul. - Bill Butler",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 PASSION QUOTES</h1>
      <div className="suc">
        <h1 className="s">PASSION</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Passion is the fuel that drives us to pursue our dreams and reach new
          heights. It is the enthusiasm, excitement, and dedication that keep us
          going even when faced with challenges. Embrace your passions and let
          them guide you on your journey to success and fulfillment. Let these
          passion quotes ignite the fire within you and inspire you to live a
          life filled with purpose and meaning.
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
