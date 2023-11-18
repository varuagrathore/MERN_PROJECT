import React from 'react';

export default function Perseverance() {
  const quotes = [
    "1. Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "2. It does not matter how slowly you go as long as you do not stop. - Confucius",
    "3. Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do. - Pelé",
    "4. Perseverance is failing 19 times and succeeding the 20th. - Julie Andrews",
    "5. The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "6. Perseverance is the hard work you do after you get tired of doing the hard work you already did. - Newt Gingrich",
    "7. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "8. Persistence is to the character of man as carbon is to steel. - Napoleon Hill",
    "9. Perseverance, secret of all triumphs. - Victor Hugo",
    "10. If you wish to be out front, then act as if you were behind. - Lao Tzu",
    "11. There is no substitute for hard work. - Thomas A. Edison",
    "12. It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein",
    "13. Through perseverance, many people win success out of what seemed destined to be certain failure. - Benjamin Disraeli",
    "14. In the confrontation between the stream and the rock, the stream always wins, not through strength but by perseverance. - H. Jackson Brown",
    "15. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "16. It always seems impossible until it's done. - Nelson Mandela",
    "17. Perseverance is the foundation of all actions. - Laozi",
    "18. Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    "19. Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "20. Perseverance is not a passive submission to circumstances—it is a strong and active response to the difficult events of life. - Elizabeth George",
    "21. Great works are performed not by strength, but perseverance. - Samuel Johnson",
    "22. If you fell down yesterday, stand up today. - H.G. Wells",
    "23. The world breaks everyone, and afterward, some are strong at the broken places. - Ernest Hemingway",
    "24. When you have a great and difficult task, something perhaps almost impossible, if you only work a little at a time, every day a little, suddenly the work will finish itself. - Isak Dinesen",
    "25. You just can't beat the person who never gives up. - Babe Ruth",
    "26. Perseverance is not just the willingness to work hard. It's that plus the willingness to be stubborn about your own belief in yourself. - Marilyn vos Savant",
    "27. The greater the obstacle, the more glory in overcoming it. - Molière",
    "28. Success is not obtained overnight. It comes in installments; you get a little bit today, a little bit tomorrow until the whole package is given out. The day you procrastinate, you lose that day's success. - Israelmore Ayivor",
    "29. Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says I'll try again tomorrow. - Mary Anne Radmacher",
    "30. Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "31. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "32. It does not matter how slowly you go as long as you do not stop. - Confucius",
    "33. Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do. - Pelé",
    "34. Perseverance is failing 19 times and succeeding the 20th. - Julie Andrews",
    "35. The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "36. Perseverance is the hard work you do after you get tired of doing the hard work you already did. - Newt Gingrich",
    "37. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "38. Persistence is to the character of man as carbon is to steel. - Napoleon Hill",
    "39. Perseverance, secret of all triumphs. - Victor Hugo",
    "40. If you wish to be out front, then act as if you were behind. - Lao Tzu",
    "41. There is no substitute for hard work. - Thomas A. Edison",
    "42. It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein",
    "43. Through perseverance, many people win success out of what seemed destined to be certain failure. - Benjamin Disraeli",
    "44. In the confrontation between the stream and the rock, the stream always wins, not through strength but by perseverance. - H. Jackson Brown",
    "45. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "46. It always seems impossible until it's done. - Nelson Mandela",
    "47. Perseverance is the foundation of all actions. - Laozi",
    "48. Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    "49. Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "50. Perseverance is not a passive submission to circumstances—it is a strong and active response to the difficult events of life. - Elizabeth George",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 QUOTES ON PERSEVERANCE</h1>
      <div className="suc">
        <h1 className="s">PERSEVERANCE</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Perseverance is the key to unlocking the door to success. It is the
          ability to keep pushing forward, even in the face of obstacles and
          challenges. These quotes on perseverance will inspire you to stay
          determined, focused, and strong on your journey to achieve your
          dreams and goals.
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
