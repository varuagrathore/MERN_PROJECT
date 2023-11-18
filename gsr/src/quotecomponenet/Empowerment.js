import React from 'react';

export default function Empowerment() {
  const quotes = [
    "1. Empowerment comes from within, it is not given to you by others. - Howard Zinn",
    "2. The best way to predict the future is to create it. - Peter Drucker",
    "3. Empowerment is the key to unlocking human potential. - Tony Robbins",
    "4. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "5. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "6. Empowerment is not about giving power to others, but about releasing the power within them. - John C. Maxwell",
    "7. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "8. Empowerment is about taking responsibility and making things happen. - Pooja Agnihotri",
    "9. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "10. Empowerment is not a favor or a gift, it is a birthright. - Kamand Kojouri",
    "11. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "12. Empowerment comes from within, it is not given to you by others. - Howard Zinn",
    "13. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "14. Empowerment is the key to unlocking human potential. - Tony Robbins",
    "15. The best way to predict the future is to create it. - Peter Drucker",
    "16. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "17. Empowerment is not about giving power to others, but about releasing the power within them. - John C. Maxwell",
    "18. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "19. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "20. Empowerment is about taking responsibility and making things happen. - Pooja Agnihotri",
    "21. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "22. Empowerment is not a favor or a gift, it is a birthright. - Kamand Kojouri",
    "23. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "24. Empowerment comes from within, it is not given to you by others. - Howard Zinn",
    "25. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "26. Empowerment is the key to unlocking human potential. - Tony Robbins",
    "27. The best way to predict the future is to create it. - Peter Drucker",
    "28. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "29. Empowerment is not about giving power to others, but about releasing the power within them. - John C. Maxwell",
    "30. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "31. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "32. Empowerment is about taking responsibility and making things happen. - Pooja Agnihotri",
    "33. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "34. Empowerment is not a favor or a gift, it is a birthright. - Kamand Kojouri",
    "35. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "36. Empowerment comes from within, it is not given to you by others. - Howard Zinn",
    "37. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "38. Empowerment is the key to unlocking human potential. - Tony Robbins",
    "39. The best way to predict the future is to create it. - Peter Drucker",
    "40. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "41. Empowerment is not about giving power to others, but about releasing the power within them. - John C. Maxwell",
    "42. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "43. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "44. Empowerment is about taking responsibility and making things happen. - Pooja Agnihotri",
    "45. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "46. Empowerment is not a favor or a gift, it is a birthright. - Kamand Kojouri",
    "47. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "48. Empowerment comes from within, it is not given to you by others. - Howard Zinn",
    "49. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "50. Empowerment is the key to unlocking human potential. - Tony Robbins",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 EMPOWERMENT QUOTES</h1>
      <div className="suc">
        <h1 className="s">EMPOWERMENT</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Empowerment is about embracing the strength within ourselves and others. It is the realization that we have the ability to make a positive impact on our lives and the lives of those around us. Empowerment is not just about having power; it is about using that power to uplift, support, and inspire. Let these quotes ignite the flame of empowerment within you and others, and together, we can create a world of boundless possibilities.
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
