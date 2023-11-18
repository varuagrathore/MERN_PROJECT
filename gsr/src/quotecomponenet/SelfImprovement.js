import React from 'react';

export default function SelfImprovement() {
  const quotes = [
    "1. The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "2. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "3. With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "4. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "5. Believe you can and you're halfway there. - Theodore Roosevelt",
    "6. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "7. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "8. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "9. Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "10. Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "11. The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "12. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "13. With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "14. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "15. Believe you can and you're halfway there. - Theodore Roosevelt",
    "16. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "17. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "18. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "19. Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "20. Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "21. The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "22. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "23. With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "24. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "25. Believe you can and you're halfway there. - Theodore Roosevelt",
    "26. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "27. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "28. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "29. Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "30. Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "31. The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "32. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "33. With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "34. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "35. Believe you can and you're halfway there. - Theodore Roosevelt",
    "36. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "37. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "38. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "39. Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "40. Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "41. The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "42. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "43. With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "44. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "45. Believe you can and you're halfway there. - Theodore Roosevelt",
    "46. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "47. What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "48. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "49. Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "50. Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 SELF-IMPROVEMENT QUOTES</h1>
      <div className="suc">
        <h1 className="s">SELF-IMPROVEMENT</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Self-improvement is a journey of growth, learning, and becoming the best
          version of yourself. It's about setting goals, embracing change,
          cultivating positive habits, and continuously striving for personal
          development. Let these quotes inspire you to embark on a path of
          self-improvement and discover your true potential.
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
