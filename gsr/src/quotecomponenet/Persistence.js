import React from 'react';

export default function Persistence() {
  const quotes = [
    "1. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "2. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "3. Perseverance is not a long race; it is many short races one after the other. - Walter Elliott",
    "4. It does not matter how slowly you go as long as you do not stop. - Confucius",
    "5. The greatest oak was once a little nut who held its ground. - Unknown",
    "6. When you have a great and difficult task, something perhaps almost impossible, if you only work a little at a time, every day a little, suddenly the work will finish itself. - Isak Dinesen",
    "7. Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down. - Charles F. Kettering",
    "8. A river cuts through rock not because of its power, but because of its persistence. - Jim Watkins",
    "9. The road to success is dotted with many tempting parking spaces. - Will Rogers",
    "10. The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "11. The most essential factor is persistence - the determination never to allow your energy or enthusiasm to be dampened by the discouragement that must inevitably come. - James Whitcomb Riley",
    "12. The true measure of success is how many times you can bounce back from failure. - Stephen Richards",
    "13. Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.' - Mary Anne Radmacher",
    "14. Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    "15. Perseverance is failing 19 times and succeeding the 20th. - Julie Andrews",
    "16. Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "17. Failure is only the opportunity more intelligently to begin again. - Henry Ford",
    "18. The path to success is to take massive, determined action. - Tony Robbins",
    "19. The majority of men meet with failure because of their lack of persistence in creating new plans to take the place of those that fail. - Napoleon Hill",
    "20. You just can't beat the person who never gives up. - Babe Ruth",
    "21. Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler",
    "22. It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein",
    "23. Persistence guarantees that results are inevitable. - Paramahansa Yogananda",
    "24. Never confuse a single defeat with a final defeat. - F. Scott Fitzgerald",
    "25. It always seems impossible until it's done. - Nelson Mandela",
    "26. Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    "27. Perseverance is failing 19 times and succeeding the 20th. - Julie Andrews",
    "28. Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "29. Failure is only the opportunity more intelligently to begin again. - Henry Ford",
    "30. The path to success is to take massive, determined action. - Tony Robbins",
    "31. The majority of men meet with failure because of their lack of persistence in creating new plans to take the place of those that fail. - Napoleon Hill",
    "32. You just can't beat the person who never gives up. - Babe Ruth",
    "33. Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler",
    "34. It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein",
    "35. Persistence guarantees that results are inevitable. - Paramahansa Yogananda",
    "36. Never confuse a single defeat with a final defeat. - F. Scott Fitzgerald",
    "37. It always seems impossible until it's done. - Nelson Mandela",
    "38. Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "39. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "40. Perseverance is not a long race; it is many short races one after the other. - Walter Elliott",
    "41. It does not matter how slowly you go as long as you do not stop. - Confucius",
    "42. The greatest oak was once a little nut who held its ground. - Unknown",
    "43. When you have a great and difficult task, something perhaps almost impossible, if you only work a little at a time, every day a little, suddenly the work will finish itself. - Isak Dinesen",
    "44. Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down. - Charles F. Kettering",
    "45. A river cuts through rock not because of its power, but because of its persistence. - Jim Watkins",
    "46. The road to success is dotted with many tempting parking spaces. - Will Rogers",
    "47. The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "48. The most essential factor is persistence - the determination never to allow your energy or enthusiasm to be dampened by the discouragement that must inevitably come. - James Whitcomb Riley",
    "49. The true measure of success is how many times you can bounce back from failure. - Stephen Richards",
    "50. Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.' - Mary Anne Radmacher",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 PERSISTENCE QUOTES</h1>
      <div className="suc">
        <h1 className="s">PERSISTENCE</h1>
     
        </div>
      <div className="succtext">
        <p className="mere">
        Persistence is the unwavering determination to continue striving towards a goal, even in the face of difficulties, obstacles, and failures. It is the refusal to give up, the willingness to learn from setbacks, and the courage to keep going when others might have quit. Persistence is the driving force behind progress and success, as it empowers us to push beyond our limits and achieve greatness. It teaches us resilience, patience, and the value of hard work. With persistence, we can turn challenges into opportunities and transform dreams into reality. Embracing persistence allows us to navigate the ups and downs of life with unwavering resolve, knowing that each step forward brings us closer to our aspirations.
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
