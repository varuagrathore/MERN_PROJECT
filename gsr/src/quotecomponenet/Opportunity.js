import React from 'react';

export default function Opportunity() {
  const quotes = [
    "1. In the middle of difficulty lies opportunity. - Albert Einstein",
    "2. Success is where preparation and opportunity meet. - Bobby Unser",
    "3. Don't wait for extraordinary opportunities. Seize common occasions and make them great. - Orison Swett Marden",
    "4. A wise man will make more opportunities than he finds. - Francis Bacon",
    "5. The secret to success in life is to be ready for the opportunity when it comes. - Benjamin Disraeli",
    "6. Opportunity does not knock, it presents itself when you beat down the door. - Kyle Chandler",
    "7. The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
    "8. Opportunities are like sunrises. If you wait too long, you miss them. - William Arthur Ward",
    "9. If opportunity doesn't knock, build a door. - Milton Berle",
    "10. The future depends on what you do today. - Mahatma Gandhi",
    "11. Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. - Bob Feller",
    "12. When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "13. Great opportunities to help others seldom come, but small ones surround us every day. - Sally Koch",
    "14. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "15. The best way to predict the future is to create it. - Peter Drucker",
    "16. Success is where preparation and opportunity meet. - Bobby Unser",
    "17. Opportunities are like sunrises. If you wait too long, you miss them. - William Arthur Ward",
    "18. A wise man will make more opportunities than he finds. - Francis Bacon",
    "19. Don't wait for extraordinary opportunities. Seize common occasions and make them great. - Orison Swett Marden",
    "20. Opportunity does not knock, it presents itself when you beat down the door. - Kyle Chandler",
    "21. The secret to success in life is to be ready for the opportunity when it comes. - Benjamin Disraeli",
    "22. In the middle of difficulty lies opportunity. - Albert Einstein",
    "23. The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
    "24. If opportunity doesn't knock, build a door. - Milton Berle",
    "25. The future depends on what you do today. - Mahatma Gandhi",
    "26. Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. - Bob Feller",
    "27. When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "28. Great opportunities to help others seldom come, but small ones surround us every day. - Sally Koch",
    "29. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "30. The best way to predict the future is to create it. - Peter Drucker",
    "31. Success is where preparation and opportunity meet. - Bobby Unser",
    "32. Opportunities are like sunrises. If you wait too long, you miss them. - William Arthur Ward",
    "33. A wise man will make more opportunities than he finds. - Francis Bacon",
    "34. Don't wait for extraordinary opportunities. Seize common occasions and make them great. - Orison Swett Marden",
    "35. Opportunity does not knock, it presents itself when you beat down the door. - Kyle Chandler",
    "36. The secret to success in life is to be ready for the opportunity when it comes. - Benjamin Disraeli",
    "37. In the middle of difficulty lies opportunity. - Albert Einstein",
    "38. The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
    "39. If opportunity doesn't knock, build a door. - Milton Berle",
    "40. The future depends on what you do today. - Mahatma Gandhi",
    "41. Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. - Bob Feller",
    "42. When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "43. Great opportunities to help others seldom come, but small ones surround us every day. - Sally Koch",
    "44. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "45. The best way to predict the future is to create it. - Peter Drucker",
    "46. Success is where preparation and opportunity meet. - Bobby Unser",
    "47. Opportunities are like sunrises. If you wait too long, you miss them. - William Arthur Ward",
    "48. A wise man will make more opportunities than he finds. - Francis Bacon",
    "49. Don't wait for extraordinary opportunities. Seize common occasions and make them great. - Orison Swett Marden",
    "50. Opportunity does not knock, it presents itself when you beat down the door. - Kyle Chandler",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 OPPORTUNITY QUOTES</h1>
      <div className="suc">
        <h1 className="s">OPPORTUNITY</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Opportunities are the stepping stones to success. They are the
          moments that can change our lives and lead us towards greatness.
          Embrace every opportunity that comes your way, for they may be the
          keys to unlocking your true potential. Let these opportunity quotes
          inspire you to seize the day and make the most of every chance you
          get.
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
