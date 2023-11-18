import React from 'react';

export default function Leadership() {
  const quotes = [
    "1. A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "2. Leadership is not about being in charge. It is about taking care of those in your charge. - Simon Sinek",
    "3. The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "4. The best way to lead people into the future is to connect with them deeply in the present. - James Kouzes and Barry Posner",
    "5. Leaders become great not because of their power, but because of their ability to empower others. - John C. Maxwell",
    "6. A leader's job is not to do the work for others, it's to help others figure out how to do it themselves. - Simon Sinek",
    "7. The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "8. The art of leadership is saying no, not saying yes. It is very easy to say yes. - Tony Blair",
    "9. The key to successful leadership is influence, not authority. - Ken Blanchard",
    "10. A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. - Douglas MacArthur",
    "11. Leadership is not about being in charge. It is about taking care of those in your charge. - Simon Sinek",
    "12. A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "13. The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "14. The best way to lead people into the future is to connect with them deeply in the present. - James Kouzes and Barry Posner",
    "15. Leaders become great not because of their power, but because of their ability to empower others. - John C. Maxwell",
    "16. A leader's job is not to do the work for others, it's to help others figure out how to do it themselves. - Simon Sinek",
    "17. The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "18. The art of leadership is saying no, not saying yes. It is very easy to say yes. - Tony Blair",
    "19. The key to successful leadership is influence, not authority. - Ken Blanchard",
    "20. A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. - Douglas MacArthur",
    "21. Leadership is not about being in charge. It is about taking care of those in your charge. - Simon Sinek",
    "22. A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "23. The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "24. The best way to lead people into the future is to connect with them deeply in the present. - James Kouzes and Barry Posner",
    "25. Leaders become great not because of their power, but because of their ability to empower others. - John C. Maxwell",
    "26. A leader's job is not to do the work for others, it's to help others figure out how to do it themselves. - Simon Sinek",
    "27. The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "28. The art of leadership is saying no, not saying yes. It is very easy to say yes. - Tony Blair",
    "29. The key to successful leadership is influence, not authority. - Ken Blanchard",
    "30. A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. - Douglas MacArthur",
    "31. Leadership is not about being in charge. It is about taking care of those in your charge. - Simon Sinek",
    "32. A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "33. The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "34. The best way to lead people into the future is to connect with them deeply in the present. - James Kouzes and Barry Posner",
    "35. Leaders become great not because of their power, but because of their ability to empower others. - John C. Maxwell",
    "36. A leader's job is not to do the work for others, it's to help others figure out how to do it themselves. - Simon Sinek",
    "37. The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "38. The art of leadership is saying no, not saying yes. It is very easy to say yes. - Tony Blair",
    "39. The key to successful leadership is influence, not authority. - Ken Blanchard",
    "40. A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. - Douglas MacArthur",
    "41. Leadership is not about being in charge. It is about taking care of those in your charge. - Simon Sinek",
    "42. A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "43. The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "44. The best way to lead people into the future is to connect with them deeply in the present. - James Kouzes and Barry Posner",
    "45. Leaders become great not because of their power, but because of their ability to empower others. - John C. Maxwell",
    "46. A leader's job is not to do the work for others, it's to help others figure out how to do it themselves. - Simon Sinek",
    "47. The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "48. The art of leadership is saying no, not saying yes. It is very easy to say yes. - Tony Blair",
    "49. The key to successful leadership is influence, not authority. - Ken Blanchard",
    "50. A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. - Douglas MacArthur",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 LEADERSHIP QUOTES</h1>
      <div className="suc">
        <h1 className="s">LEADERSHIP</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Leadership is not about a title or a position, but rather the ability to inspire and influence others towards a common goal. Great leaders possess vision, integrity, and empathy, and they lead with courage and compassion. Let these quotes on leadership remind us of the profound impact a leader can have on the lives of others and the world.
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
