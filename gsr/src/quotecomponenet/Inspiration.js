import React from 'react';

export default function Inspiration() {
  const quotes = [
    "1. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "2. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "3. Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "4. Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "5. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "6. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "7. The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "8. You miss 100% of the shots you don't take. - Wayne Gretzky",
    "9. Believe you can and you're halfway there. - Theodore Roosevelt",
    "10. It does not matter how slowly you go as long as you do not stop. - Confucius",
    "11. The best way to predict the future is to create it. - Peter Drucker",
    "12. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "13. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "14. The only way to do great work is to love what you do. - Steve Jobs",
    "15. Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "16. The journey of a thousand miles begins with one step. - Lao Tzu",
    "17. Success is not in what you have, but who you are. - Bo Bennett",
    "18. Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "19. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "20. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "21. The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "22. You miss 100% of the shots you don't take. - Wayne Gretzky",
    "23. Believe you can and you're halfway there. - Theodore Roosevelt",
    "24. It does not matter how slowly you go as long as you do not stop. - Confucius",
    "25. The best way to predict the future is to create it. - Peter Drucker",
    "26. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "27. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "28. The only way to do great work is to love what you do. - Steve Jobs",
    "29. Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "30. The journey of a thousand miles begins with one step. - Lao Tzu",
    "31. Success is not in what you have, but who you are. - Bo Bennett",
    "32. Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "33. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "34. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "35. The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "36. You miss 100% of the shots you don't take. - Wayne Gretzky",
    "37. Believe you can and you're halfway there. - Theodore Roosevelt",
    "38. It does not matter how slowly you go as long as you do not stop. - Confucius",
    "39. The best way to predict the future is to create it. - Peter Drucker",
    "40. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "41. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "42. The only way to do great work is to love what you do. - Steve Jobs",
    "43. Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "44. The journey of a thousand miles begins with one step. - Lao Tzu",
    "45. Success is not in what you have, but who you are. - Bo Bennett",
    "46. Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "47. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "48. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "49. The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "50. You miss 100% of the shots you don't take. - Wayne Gretzky",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 INSPIRATION QUOTES</h1>
      <div className="suc">
        <h1 className="s">INSPIRATION</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Find inspiration to take that next step, overcome obstacles, and reach new heights. These inspiration quotes will motivate you to pursue your dreams, believe in yourself, and embrace the challenges that come your way. Let the words of great thinkers, leaders, and visionaries empower you to live a life of purpose and passion. Be inspired to make a difference, leave a legacy, and make the most of every moment. Your journey to greatness begins with the spark of inspiration.
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
