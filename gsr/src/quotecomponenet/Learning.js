import React from 'react';

export default function Learning() {
  const quotes = [
    "1. The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "2. Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
    "3. Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "4. The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "5. Education is not preparation for life; education is life itself. - John Dewey",
    "6. The expert in anything was once a beginner. - Helen Hayes",
    "7. Learning is not attained by chance; it must be sought for with ardor and diligence. - Abigail Adams",
    "8. The only person who is educated is the one who has learned how to learn and change. - Carl Rogers",
    "9. The more I live, the more I learn. The more I learn, the more I realize, the less I know. - Michel Legrand",
    "10. The beautiful thing about learning is that nobody can take it away from you. - B.B. King",
    "11. Education is not the filling of a pail, but the lighting of a fire. - W.B. Yeats",
    "12. The best way to predict the future is to create it. - Abraham Lincoln",
    "13. The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "14. Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
    "15. Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "16. The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "17. Education is not preparation for life; education is life itself. - John Dewey",
    "18. The expert in anything was once a beginner. - Helen Hayes",
    "19. Learning is not attained by chance; it must be sought for with ardor and diligence. - Abigail Adams",
    "20. The only person who is educated is the one who has learned how to learn and change. - Carl Rogers",
    "21. The more I live, the more I learn. The more I learn, the more I realize, the less I know. - Michel Legrand",
    "22. The beautiful thing about learning is that nobody can take it away from you. - B.B. King",
    "23. Education is not the filling of a pail, but the lighting of a fire. - W.B. Yeats",
    "24. The best way to predict the future is to create it. - Abraham Lincoln",
    "25. The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "26. Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
    "27. Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "28. The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "29. Education is not preparation for life; education is life itself. - John Dewey",
    "30. The expert in anything was once a beginner. - Helen Hayes",
    "31. Learning is not attained by chance; it must be sought for with ardor and diligence. - Abigail Adams",
    "32. The only person who is educated is the one who has learned how to learn and change. - Carl Rogers",
    "33. The more I live, the more I learn. The more I learn, the more I realize, the less I know. - Michel Legrand",
    "34. The beautiful thing about learning is that nobody can take it away from you. - B.B. King",
    "35. Education is not the filling of a pail, but the lighting of a fire. - W.B. Yeats",
    "36. The best way to predict the future is to create it. - Abraham Lincoln",
    "37. The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "38. Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
    "39. Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "40. The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "41. Education is not preparation for life; education is life itself. - John Dewey",
    "42. The expert in anything was once a beginner. - Helen Hayes",
    "43. Learning is not attained by chance; it must be sought for with ardor and diligence. - Abigail Adams",
    "44. The only person who is educated is the one who has learned how to learn and change. - Carl Rogers",
    "45. The more I live, the more I learn. The more I learn, the more I realize, the less I know. - Michel Legrand",
    "46. The beautiful thing about learning is that nobody can take it away from you. - B.B. King",
    "47. Education is not the filling of a pail, but the lighting of a fire. - W.B. Yeats",
    "48. The best way to predict the future is to create it. - Abraham Lincoln",
    "49. The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "50. Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 LEARNING QUOTES</h1>
      <div className="suc">
        <h1 className="s">LEARNING</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Learning is a lifelong journey that opens doors to new opportunities and experiences. It is the key to personal growth and development. Embrace the joy of learning and let these inspiring quotes remind you of the power of knowledge and the joy of discovery.
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
