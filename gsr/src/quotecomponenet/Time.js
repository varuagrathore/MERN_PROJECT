import React from 'react';

export default function Time() {
  const quotes = [
    "1. The two most powerful warriors are patience and time. - Leo Tolstoy",
    "2. The only way to control time is to set priorities and stick to them. - Brian Tracy",
    "3. The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "4. Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "5. Lost time is never found again. - Benjamin Franklin",
    "6. The common man is not concerned about the passage of time, the man of talent is driven by it. - Schopenhauer",
    "7. Time is the wisest counselor of all. - Pericles",
    "8. Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
    "9. Time is what we want most, but what we use worst. - William Penn",
    "10. The key is in not spending time, but in investing it. - Stephen R. Covey",
    "11. Time is what we want most, but what we use worst. - William Penn",
    "12. Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "13. The common man is not concerned about the passage of time, the man of talent is driven by it. - Schopenhauer",
    "14. Time is the wisest counselor of all. - Pericles",
    "15. Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
    "16. Lost time is never found again. - Benjamin Franklin",
    "17. The two most powerful warriors are patience and time. - Leo Tolstoy",
    "18. The only way to control time is to set priorities and stick to them. - Brian Tracy",
    "19. The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "20. Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "21. Time is what we want most, but what we use worst. - William Penn",
    "22. The key is in not spending time, but in investing it. - Stephen R. Covey",
    "23. Time is what we want most, but what we use worst. - William Penn",
    "24. Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "25. The common man is not concerned about the passage of time, the man of talent is driven by it. - Schopenhauer",
    "26. Time is the wisest counselor of all. - Pericles",
    "27. Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
    "28. Lost time is never found again. - Benjamin Franklin",
    "29. The two most powerful warriors are patience and time. - Leo Tolstoy",
    "30. The only way to control time is to set priorities and stick to them. - Brian Tracy",
    "31. The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "32. Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "33. Time is what we want most, but what we use worst. - William Penn",
    "34. The key is in not spending time, but in investing it. - Stephen R. Covey",
    "35. Time is what we want most, but what we use worst. - William Penn",
    "36. Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "37. The common man is not concerned about the passage of time, the man of talent is driven by it. - Schopenhauer",
    "38. Time is the wisest counselor of all. - Pericles",
    "39. Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
    "40. Lost time is never found again. - Benjamin Franklin",
    "41. The two most powerful warriors are patience and time. - Leo Tolstoy",
    "42. The only way to control time is to set priorities and stick to them. - Brian Tracy",
    "43. The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "44. Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "45. Time is what we want most, but what we use worst. - William Penn",
    "46. The key is in not spending time, but in investing it. - Stephen R. Covey",
    "47. Time is what we want most, but what we use worst. - William Penn",
    "48. Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "49. The common man is not concerned about the passage of time, the man of talent is driven by it. - Schopenhauer",
    "50. Time is the wisest counselor of all. - Pericles",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 TIME QUOTES</h1>
      <div className="suc">
        <h1 className="s">TIME</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Time is one of our most valuable resources, and how we use it can define
          the course of our lives. These quotes about time serve as a reminder to
          cherish the moments we have, make the most of our time, and use it
          wisely in pursuit of our dreams and goals.
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
