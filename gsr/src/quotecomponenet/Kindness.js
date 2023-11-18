import React from 'react';

export default function Kindness() {
  const quotes = [
    "1. Kindness is a language which the deaf can hear and the blind can see. - Mark Twain",
    "2. No act of kindness, no matter how small, is ever wasted. - Aesop",
    "3. Be kind whenever possible. It is always possible. - Dalai Lama",
    "4. A single act of kindness throws out roots in all directions, and the roots spring up and make new trees. - Amelia Earhart",
    "5. Kindness is the sunshine in which virtue grows. - Robert G. Ingersoll",
    "6. Kindness is a gift everyone can afford to give. - Unknown",
    "7. Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end. - Scott Adams",
    "8. Kindness is like snow; it beautifies everything it covers. - Kahlil Gibran",
    "9. Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you. - Princess Diana",
    "10. The smallest act of kindness is worth more than the grandest intention. - Oscar Wilde",
    "11. Be kind, for everyone you meet is fighting a harder battle. - Plato",
    "12. You can accomplish by kindness what you cannot by force. - Publilius Syrus",
    "13. Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love. - Lao Tzu",
    "14. A warm smile is the universal language of kindness. - William Arthur Ward",
    "15. Kindness is a passport that opens doors and fashions friends. It softens hearts and molds relationships that can last lifetimes. - Joseph B. Wirthlin",
    "16. Kindness is the ability to know what the right thing to do is and having the courage to do it!! - RAKtivist",
    "17. Be the reason someone believes in the goodness of people. - Karen Salmansohn",
    "18. In a world where you can be anything, be kind. - Jennifer Dukes Lee",
    "19. A little thought and a little kindness are often worth more than a great deal of money. - John Ruskin",
    "20. If you have the power to make someone happy, do it. The world needs more of that. - Unknown",
    "21. The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer. - Mahatma Gandhi",
    "22. Kindness is choosing love over hate, light over darkness, compassion over judgement. - RAKtivist",
    "23. The level of our success is limited only by our imagination and no act of kindness, however small, is ever wasted. - Aesop",
    "24. The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "25. Kindness is the sunshine in which virtue grows. - Robert G. Ingersoll",
    "26. The smallest act of kindness is worth more than the grandest intention. - Oscar Wilde",
    "27. The true meaning of life is to plant trees, under whose shade you do not expect to sit. - Nelson Henderson",
    "28. Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "29. Be kind to unkind people. They need it the most. - Ashleigh Brilliant",
    "30. The world is filled with nice people. If you can't find one, be one. - Nishan Panwar",
    "31. The best portion of a good man's life is his little, nameless, unremembered acts of kindness and of love. - William Wordsworth",
    "32. Kindness is the greatest wisdom. - Unknown",
    "33. Kind words can be short and easy to speak, but their echoes are truly endless. - Mother Teresa",
    "34. You can accomplish by kindness what you cannot by force. - Publilius Syrus",
    "35. Kindness is the ability to know what the right thing to do is and having the courage to do it!! - RAKtivist",
    "36. Kindness is the sunshine in which virtue grows. - Robert G. Ingersoll",
    "37. The smallest act of kindness is worth more than the grandest intention. - Oscar Wilde",
    "38. Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you. - Princess Diana",
    "39. Kindness is a gift everyone can afford to give. - Unknown",
    "40. Kindness is like snow; it beautifies everything it covers. - Kahlil Gibran",
    "41. Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end. - Scott Adams",
    "42. A warm smile is the universal language of kindness. - William Arthur Ward",
    "43. Kindness is a passport that opens doors and fashions friends. It softens hearts and molds relationships that can last lifetimes. - Joseph B. Wirthlin",
    "44. Kindness is the ability to know what the right thing to do is and having the courage to do it!! - RAKtivist",
    "45. Be the reason someone believes in the goodness of people. - Karen Salmansohn",
    "46. In a world where you can be anything, be kind. - Jennifer Dukes Lee",
    "47. A little thought and a little kindness are often worth more than a great deal of money. - John Ruskin",
    "48. If you have the power to make someone happy, do it. The world needs more of that. - Unknown",
    "49. The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer. - Mahatma Gandhi",
    "50. Kindness is choosing love over hate, light over darkness, compassion over judgement. - RAKtivist",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 KINDNESS QUOTES</h1>
      <div className="suc">
        <h1 className="s">KINDNESS</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Kindness is a language that transcends barriers. It has the power to touch hearts, heal wounds, and bring people together. A simple act of kindness can brighten someone's day and leave a lasting impact on their life. Let us embrace kindness in all its forms and spread compassion and love to make the world a better place for everyone.
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
