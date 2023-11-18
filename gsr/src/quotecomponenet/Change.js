import React from 'react';

export default function Change() {
  const quotes = [
    "1. The only way to make sense out of change is to plunge into it, move with it, and join the dance. - Alan Watts",
    "2. Change your thoughts and you change your world. - Norman Vincent Peale",
    "3. Change is the law of life. And those who look only to the past or present are certain to miss the future. - John F. Kennedy",
    "4. Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "5. The first step toward change is awareness. The second step is acceptance. - Nathaniel Branden",
    "6. The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking. - Albert Einstein",
    "7. Be the change that you wish to see in the world. - Mahatma Gandhi",
    "8. Change your life today. Don't gamble on the future, act now, without delay. - Simone de Beauvoir",
    "9. When we are no longer able to change a situation, we are challenged to change ourselves. - Viktor E. Frankl",
    "10. Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek. - Barack Obama",
    "11. The world hates change, yet it is the only thing that has brought progress. - Charles Kettering",
    "12. The greatest discovery of all time is that a person can change his future by merely changing his attitude. - Oprah Winfrey",
    "13. Change is the end result of all true learning. - Leo Buscaglia",
    "14. You must be the change you wish to see in the world. - Mahatma Gandhi",
    "15. If you do not change direction, you may end up where you are heading. - Lao Tzu",
    "16. Change your life, not your story. - Michael Crichton",
    "17. The only way to make sense out of change is to plunge into it, move with it, and join the dance. - Alan Watts",
    "18. Change is inevitable. Growth is optional. - John C. Maxwell",
    "19. When the winds of change blow, some people build walls and others build windmills. - Chinese Proverb",
    "20. Those who cannot change their minds cannot change anything. - George Bernard Shaw",
    "21. If you change the way you look at things, the things you look at change. - Wayne Dyer",
    "22. The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking. - Albert Einstein",
    "23. Change your thoughts and you change your world. - Norman Vincent Peale",
    "24. To improve is to change; to be perfect is to change often. - Winston Churchill",
    "25. Change is the law of life. And those who look only to the past or present are certain to miss the future. - John F. Kennedy",
    "26. Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "27. The first step toward change is awareness. The second step is acceptance. - Nathaniel Branden",
    "28. Be the change that you wish to see in the world. - Mahatma Gandhi",
    "29. Change your life today. Don't gamble on the future, act now, without delay. - Simone de Beauvoir",
    "30. When we are no longer able to change a situation, we are challenged to change ourselves. - Viktor E. Frankl",
    "31. Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek. - Barack Obama",
    "32. The world hates change, yet it is the only thing that has brought progress. - Charles Kettering",
    "33. The greatest discovery of all time is that a person can change his future by merely changing his attitude. - Oprah Winfrey",
    "34. Change is the end result of all true learning. - Leo Buscaglia",
    "35. You must be the change you wish to see in the world. - Mahatma Gandhi",
    "36. If you do not change direction, you may end up where you are heading. - Lao Tzu",
    "37. Change your life, not your story. - Michael Crichton",
    "38. The only way to make sense out of change is to plunge into it, move with it, and join the dance. - Alan Watts",
    "39. Change is inevitable. Growth is optional. - John C. Maxwell",
    "40. When the winds of change blow, some people build walls and others build windmills. - Chinese Proverb",
    "41. Those who cannot change their minds cannot change anything. - George Bernard Shaw",
    "42. If you change the way you look at things, the things you look at change. - Wayne Dyer",
    "43. The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking. - Albert Einstein",
    "44. Change your thoughts and you change your world. - Norman Vincent Peale",
    "45. To improve is to change; to be perfect is to change often. - Winston Churchill",
    "46. Change is the law of life. And those who look only to the past or present are certain to miss the future. - John F. Kennedy",
    "47. Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "48. The first step toward change is awareness. The second step is acceptance. - Nathaniel Branden",
    "49. Be the change that you wish to see in the world. - Mahatma Gandhi",
    "50. Change your life today. Don't gamble on the future, act now, without delay. - Simone de Beauvoir",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 CHANGE QUOTES</h1>
      <div className="suc">
        <h1 className="s">CHANGE</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Our beliefs shape who we are and how we perceive the world around us.
          They have the power to inspire us to achieve greatness, to overcome
          challenges, and to see opportunities where others see obstacles.
          Embrace the power of belief, for it is the driving force behind every
          human endeavor, and the foundation upon which all accomplishments are
          built.
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
