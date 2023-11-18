import React from 'react';

export default function Life() {
  const quotes = [
    "1. In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "2. Life is what happens when you're busy making other plans. - John Lennon",
    "3. The purpose of our lives is to be happy. - Dalai Lama",
    "4. Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "5. You only live once, but if you do it right, once is enough. - Mae West",
    "6. The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "7. Life is really simple, but we insist on making it complicated. - Confucius",
    "8. The way to get started is to quit talking and begin doing. - Walt Disney",
    "9. Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "10. Life is not a problem to be solved, but a reality to be experienced. - Soren Kierkegaard",
    "11. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "12. Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "13. You only live once, but if you do it right, once is enough. - Mae West",
    "14. The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "15. Life is really simple, but we insist on making it complicated. - Confucius",
    "16. The way to get started is to quit talking and begin doing. - Walt Disney",
    "17. Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "18. Life is not a problem to be solved, but a reality to be experienced. - Soren Kierkegaard",
    "19. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "20. In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "21. Life is what happens when you're busy making other plans. - John Lennon",
    "22. The purpose of our lives is to be happy. - Dalai Lama",
    "23. Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "24. You only live once, but if you do it right, once is enough. - Mae West",
    "25. The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "26. Life is really simple, but we insist on making it complicated. - Confucius",
    "27. The way to get started is to quit talking and begin doing. - Walt Disney",
    "28. Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "29. Life is not a problem to be solved, but a reality to be experienced. - Soren Kierkegaard",
    "30. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "31. Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "32. You only live once, but if you do it right, once is enough. - Mae West",
    "33. The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "34. Life is really simple, but we insist on making it complicated. - Confucius",
    "35. The way to get started is to quit talking and begin doing. - Walt Disney",
    "36. Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "37. Life is not a problem to be solved, but a reality to be experienced. - Soren Kierkegaard",
    "38. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "39. In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "40. Life is what happens when you're busy making other plans. - John Lennon",
    "41. The purpose of our lives is to be happy. - Dalai Lama",
    "42. Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "43. You only live once, but if you do it right, once is enough. - Mae West",
    "44. The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "45. Life is really simple, but we insist on making it complicated. - Confucius",
    "46. The way to get started is to quit talking and begin doing. - Walt Disney",
    "47. Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "48. Life is not a problem to be solved, but a reality to be experienced. - Soren Kierkegaard",
    "49. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "50. In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 LIFE QUOTES</h1>
      <div className="suc">
        <h1 className="s">LIFE</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Life is a journey filled with moments of joy, challenges, and growth. It is a precious gift that should be embraced with gratitude and lived to the fullest. Let these inspiring quotes remind you to make the most of every day and cherish the beauty of life.
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
