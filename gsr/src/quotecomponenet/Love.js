import React from 'react';

export default function Love() {
  const quotes = [
    "1. The best thing to hold onto in life is each other. - Audrey Hepburn",
    "2. Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "3. The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "4. The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. - Helen Keller",
    "5. Love is not only something you feel, it is something you do. - David Wilkerson",
    "6. Love is a friendship set to music. - Joseph Campbell",
    "7. Love is of all passions the strongest, for it attacks simultaneously the head, the heart, and the senses. - Lao Tzu",
    "8. Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
    "9. You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
    "10. Love is a canvas furnished by nature and embroidered by imagination. - Voltaire",
    "11. The best thing to hold onto in life is each other. - Audrey Hepburn",
    "12. Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "13. The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "14. The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. - Helen Keller",
    "15. Love is not only something you feel, it is something you do. - David Wilkerson",
    "16. Love is a friendship set to music. - Joseph Campbell",
    "17. Love is of all passions the strongest, for it attacks simultaneously the head, the heart, and the senses. - Lao Tzu",
    "18. Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
    "19. You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
    "20. Love is a canvas furnished by nature and embroidered by imagination. - Voltaire",
    "21. The best thing to hold onto in life is each other. - Audrey Hepburn",
    "22. Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "23. The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "24. The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. - Helen Keller",
    "25. Love is not only something you feel, it is something you do. - David Wilkerson",
    "26. Love is a friendship set to music. - Joseph Campbell",
    "27. Love is of all passions the strongest, for it attacks simultaneously the head, the heart, and the senses. - Lao Tzu",
    "28. Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
    "29. You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
    "30. Love is a canvas furnished by nature and embroidered by imagination. - Voltaire",
    "31. The best thing to hold onto in life is each other. - Audrey Hepburn",
    "32. Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "33. The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "34. The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. - Helen Keller",
    "35. Love is not only something you feel, it is something you do. - David Wilkerson",
    "36. Love is a friendship set to music. - Joseph Campbell",
    "37. Love is of all passions the strongest, for it attacks simultaneously the head, the heart, and the senses. - Lao Tzu",
    "38. Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
    "39. You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
    "40. Love is a canvas furnished by nature and embroidered by imagination. - Voltaire",
    "41. The best thing to hold onto in life is each other. - Audrey Hepburn",
    "42. Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "43. The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "44. The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. - Helen Keller",
    "45. Love is not only something you feel, it is something you do. - David Wilkerson",
    "46. Love is a friendship set to music. - Joseph Campbell",
    "47. Love is of all passions the strongest, for it attacks simultaneously the head, the heart, and the senses. - Lao Tzu",
    "48. Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
    "49. You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
    "50. Love is a canvas furnished by nature and embroidered by imagination. - Voltaire",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 LOVE QUOTES</h1>
      <div className="suc">
        <h1 className="s">LOVE</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Love is a beautiful and powerful emotion that connects us all. It brings joy, comfort, and meaning to our lives. Let these inspiring quotes about love remind you of its importance and the magic it brings into the world.
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
