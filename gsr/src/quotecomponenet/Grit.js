import React from 'react';

export default function Grit() {
  const quotes = [
    "1. Grit is passion and perseverance for very long-term goals. It is having stamina. - Angela Duckworth",
    "2. Grit is living life like it's a marathon, not a sprint. - Angela Duckworth",
    "3. Fall seven times, stand up eight. - Japanese Proverb",
    "4. The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "5. Do not judge me by my successes, judge me by how many times I fell down and got back up again. - Nelson Mandela",
    "6. Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "7. When you have a dream, you've got to grab it and never let go. - Carol Burnett",
    "8. The most essential factor is persistence - the determination never to allow your energy or enthusiasm to be dampened by the discouragement that must inevitably come. - James Whitcomb Riley",
    "9. A failure is not always a mistake. It may simply be the best one can do under the circumstances. The real mistake is to stop trying. - B.F. Skinner",
    "10. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "11. It always seems impossible until it is done. - Nelson Mandela",
    "12. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "13. I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "14. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "15. Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "16. What is not started today is never finished tomorrow. - Johann Wolfgang von Goethe",
    "17. When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
    "18. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "19. Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down. - Charles F. Kettering",
    "20. You just can't beat the person who never gives up. - Babe Ruth",
    "21. Strength and growth come only through continuous effort and struggle. - Napoleon Hill",
    "22. Never give up, for that is just the place and time that the tide will turn. - Harriet Beecher Stowe",
    "23. Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "24. Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe. - Sumner Redstone",
    "25. A champion is defined not by their wins but by how they can recover when they fall. - Serena Williams",
    "26. Grit is living life like it's a marathon, not a sprint. - Angela Duckworth",
    "27. Fall seven times, stand up eight. - Japanese Proverb",
    "28. The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "29. Do not judge me by my successes, judge me by how many times I fell down and got back up again. - Nelson Mandela",
    "30. Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "31. When you have a dream, you've got to grab it and never let go. - Carol Burnett",
    "32. The most essential factor is persistence - the determination never to allow your energy or enthusiasm to be dampened by the discouragement that must inevitably come. - James Whitcomb Riley",
    "33. A failure is not always a mistake. It may simply be the best one can do under the circumstances. The real mistake is to stop trying. - B.F. Skinner",
    "34. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "35. It always seems impossible until it is done. - Nelson Mandela",
    "36. The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "37. I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "38. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "39. Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "40. What is not started today is never finished tomorrow. - Johann Wolfgang von Goethe",
    "41. When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
    "42. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "43. Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down. - Charles F. Kettering",
    "44. You just can't beat the person who never gives up. - Babe Ruth",
    "45. Strength and growth come only through continuous effort and struggle. - Napoleon Hill",
    "46. Never give up, for that is just the place and time that the tide will turn. - Harriet Beecher Stowe",
    "47. Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "48. Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe. - Sumner Redstone",
    "49. A champion is defined not by their wins but by how they can recover when they fall. - Serena Williams",
    "50. Grit is passion and perseverance for very long-term goals. It is having stamina. - Angela Duckworth",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 GRIT QUOTES</h1>
      <div className="suc">
        <h1 className="s">GRIT</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Grit is the strength of character that fuels the pursuit of our most ambitious dreams. It's the passion that keeps us going when faced with challenges and setbacks. Grit is not about talent or luck; it's about resilience, determination, and the willingness to persevere through difficulties. Embrace the power of grit, for it is the driving force that turns obstacles into opportunities and dreams into reality.
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
