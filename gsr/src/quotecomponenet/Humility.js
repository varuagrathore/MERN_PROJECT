import React from 'react';

export default function Humility() {
  const quotes = [
    "1. Humility is not thinking less of yourself, it's thinking of yourself less. - C.S. Lewis",
    "2. True humility is staying teachable, regardless of how much you already know. - Unknown",
    "3. Humility is the foundation of all the other virtues hence, in the soul in which this virtue does not exist, there cannot be any other virtue except in mere appearance. - Augustine of Hippo",
    "4. Humility is not weakness; it is the wise recognition of our own limitations. - Unknown",
    "5. Humility is the solid foundation of all virtues. - Confucius",
    "6. Humility is the key to success. The more humble you are, the closer you will get to your goals. - John C. Maxwell",
    "7. Humility is not thinking less of yourself, but thinking of yourself less. - Rick Warren",
    "8. The greatest friend of truth is Time, her greatest enemy is Prejudice, and her constant companion is Humility. - Charles Caleb Colton",
    "9. Humility is the ability to give up your pride and still retain your dignity. - Vanna Bonta",
    "10. Humility is not thinking less of yourself, but thinking of yourself less. - C.S. Lewis",
    "11. True humility is staying teachable, regardless of how much you already know. - Unknown",
    "12. Humility is the foundation of all the other virtues hence, in the soul in which this virtue does not exist, there cannot be any other virtue except in mere appearance. - Augustine of Hippo",
    "13. Humility is not weakness; it is the wise recognition of our own limitations. - Unknown",
    "14. Humility is the solid foundation of all virtues. - Confucius",
    "15. Humility is the key to success. The more humble you are, the closer you will get to your goals. - John C. Maxwell",
    "16. Humility is not thinking less of yourself, but thinking of yourself less. - Rick Warren",
    "17. The greatest friend of truth is Time, her greatest enemy is Prejudice, and her constant companion is Humility. - Charles Caleb Colton",
    "18. Humility is the ability to give up your pride and still retain your dignity. - Vanna Bonta",
    "19. Humility is not thinking less of yourself, but thinking of yourself less. - C.S. Lewis",
    "20. True humility is staying teachable, regardless of how much you already know. - Unknown",
    "21. Humility is the foundation of all the other virtues hence, in the soul in which this virtue does not exist, there cannot be any other virtue except in mere appearance. - Augustine of Hippo",
    "22. Humility is not weakness; it is the wise recognition of our own limitations. - Unknown",
    "23. Humility is the solid foundation of all virtues. - Confucius",
    "24. Humility is the key to success. The more humble you are, the closer you will get to your goals. - John C. Maxwell",
    "25. Humility is not thinking less of yourself, but thinking of yourself less. - Rick Warren",
    "26. The greatest friend of truth is Time, her greatest enemy is Prejudice, and her constant companion is Humility. - Charles Caleb Colton",
    "27. Humility is the ability to give up your pride and still retain your dignity. - Vanna Bonta",
    "28. Humility is not thinking less of yourself, but thinking of yourself less. - C.S. Lewis",
    "29. True humility is staying teachable, regardless of how much you already know. - Unknown",
    "30. Humility is the foundation of all the other virtues hence, in the soul in which this virtue does not exist, there cannot be any other virtue except in mere appearance. - Augustine of Hippo",
    "31. Humility is not weakness; it is the wise recognition of our own limitations. - Unknown",
    "32. Humility is the solid foundation of all virtues. - Confucius",
    "33. Humility is the key to success. The more humble you are, the closer you will get to your goals. - John C. Maxwell",
    "34. Humility is not thinking less of yourself, but thinking of yourself less. - Rick Warren",
    "35. The greatest friend of truth is Time, her greatest enemy is Prejudice, and her constant companion is Humility. - Charles Caleb Colton",
    "36. Humility is the ability to give up your pride and still retain your dignity. - Vanna Bonta",
    "37. Humility is not thinking less of yourself, but thinking of yourself less. - C.S. Lewis",
    "38. True humility is staying teachable, regardless of how much you already know. - Unknown",
    "39. Humility is the foundation of all the other virtues hence, in the soul in which this virtue does not exist, there cannot be any other virtue except in mere appearance. - Augustine of Hippo",
    "40. Humility is not weakness; it is the wise recognition of our own limitations. - Unknown",
    "41. Humility is the solid foundation of all virtues. - Confucius",
    "42. Humility is the key to success. The more humble you are, the closer you will get to your goals. - John C. Maxwell",
    "43. Humility is not thinking less of yourself, but thinking of yourself less. - Rick Warren",
    "44. The greatest friend of truth is Time, her greatest enemy is Prejudice, and her constant companion is Humility. - Charles Caleb Colton",
    "45. Humility is the ability to give up your pride and still retain your dignity. - Vanna Bonta",
    "46. Humility is not thinking less of yourself, but thinking of yourself less. - C.S. Lewis",
    "47. True humility is staying teachable, regardless of how much you already know. - Unknown",
    "48. Humility is the foundation of all the other virtues hence, in the soul in which this virtue does not exist, there cannot be any other virtue except in mere appearance. - Augustine of Hippo",
    "49. Humility is not weakness; it is the wise recognition of our own limitations. - Unknown",
    "50. Humility is the solid foundation of all virtues. - Confucius",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 HUMILITY QUOTES</h1>
      <div className="suc">
        <h1 className="s">HUMILITY</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Humility is the art of recognizing our own limitations, acknowledging the contributions of others, and embracing the value of every individual. It is the key to personal growth, compassion, and understanding. These humility quotes remind us that true strength lies in humility and that we can achieve great things when we remain humble and open-minded. Let these quotes inspire you to practice humility in your daily life and embrace the power of humility to make a positive difference in the world.
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
