import React from 'react';

export default function Motivation() {
  const quotes = [
    "1. Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "2. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "3. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "4. The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "5. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "6. It always seems impossible until it is done. - Nelson Mandela",
    "7. Challenges are what make life interesting, and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "8. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "9. Believe you can and you're halfway there. - Theodore Roosevelt",
    "10. Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "11. The past cannot be changed. The future is yet in your power. - Unknown",
    "12. The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "13. The only way to do great work is to love what you do. - Steve Jobs",
    "14. Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
    "15. Success is not in what you have, but who you are. - Bo Bennett",
    "16. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "17. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "18. The best way to predict the future is to create it. - Peter Drucker",
    "19. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "20. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "21. Your talent is God's gift to you. What you do with it is your gift back to God. - Leo Buscaglia",
    "22. Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "23. Believe you can and you're halfway there. - Theodore Roosevelt",
    "24. Success is not in what you have, but who you are. - Bo Bennett",
    "25. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "26. Your talent is God's gift to you. What you do with it is your gift back to God. - Leo Buscaglia",
    "27. Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
    "28. The only way to do great work is to love what you do. - Steve Jobs",
    "29. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "30. Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "31. The past cannot be changed. The future is yet in your power. - Unknown",
    "32. The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "33. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "34. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "35. Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "36. Challenges are what make life interesting, and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "37. It always seems impossible until it is done. - Nelson Mandela",
    "38. Believe you can and you're halfway there. - Theodore Roosevelt",
    "39. Success is not in what you have, but who you are. - Bo Bennett",
    "40. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "41. The best way to predict the future is to create it. - Peter Drucker",
    "42. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "43. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "44. Your talent is God's gift to you. What you do with it is your gift back to God. - Leo Buscaglia",
    "45. Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "46. Believe you can and you're halfway there. - Theodore Roosevelt",
    "47. Success is not in what you have, but who you are. - Bo Bennett",
    "48. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "49. Your talent is God's gift to you. What you do with it is your gift back to God. - Leo Buscaglia",
    "50. Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 MOTIVATIONAL QUOTES</h1>
      <div className="suc">
        <h1 className="s">MOTIVATION</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Motivation is the driving force that empowers us to reach our goals
          and achieve success. It is the spark that ignites our passion and
          fuels our determination. Let these motivational quotes inspire you to
          take action, overcome obstacles, and never give up on your dreams.
          Embrace the power of motivation, and you will be unstoppable.
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
