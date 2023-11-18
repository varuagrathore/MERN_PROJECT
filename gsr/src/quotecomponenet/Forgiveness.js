import React from 'react';

export default function Forgiveness() {
  const quotes = [
    "1. Forgiveness is the fragrance that the violet sheds on the heel that has crushed it. - Mark Twain",
    "2. Forgiveness is a gift you give yourself. - Tony Robbins",
    "3. The weak can never forgive. Forgiveness is the attribute of the strong. - Mahatma Gandhi",
    "4. To forgive is to set a prisoner free and discover that the prisoner was you. - Lewis B. Smedes",
    "5. The more you know yourself, the more you forgive yourself. - Confucius",
    "6. Forgiveness doesn't excuse their behavior. Forgiveness prevents their behavior from destroying your heart. - Unknown",
    "7. Forgiveness is not an occasional act; it is a constant attitude. - Martin Luther King Jr.",
    "8. The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward. - Steve Maraboli",
    "9. To err is human; to forgive, divine. - Alexander Pope",
    "10. The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "11. Forgiveness is not something we do for other people. We do it for ourselves to get well and move on. - Desmond Tutu",
    "12. Forgiveness is a funny thing. It warms the heart and cools the sting. - William Arthur Ward",
    "13. You will know that forgiveness has begun when you recall those who hurt you and feel the power to wish them well. - Lewis B. Smedes",
    "14. Forgiveness is the final form of love. - Reinhold Niebuhr",
    "15. Forgiveness is the key to action and freedom. - Byron Katie",
    "16. The weak can never forgive. Forgiveness is the attribute of the strong. - Mahatma Gandhi",
    "17. Forgiveness is not an occasional act; it is a constant attitude. - Martin Luther King Jr.",
    "18. To forgive is to set a prisoner free and discover that the prisoner was you. - Lewis B. Smedes",
    "19. The more you know yourself, the more you forgive yourself. - Confucius",
    "20. Forgiveness doesn't excuse their behavior. Forgiveness prevents their behavior from destroying your heart. - Unknown",
    "21. Forgiveness is the fragrance that the violet sheds on the heel that has crushed it. - Mark Twain",
    "22. Forgiveness is a gift you give yourself. - Tony Robbins",
    "23. To err is human; to forgive, divine. - Alexander Pope",
    "24. The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "25. Forgiveness is not something we do for other people. We do it for ourselves to get well and move on. - Desmond Tutu",
    "26. Forgiveness is a funny thing. It warms the heart and cools the sting. - William Arthur Ward",
    "27. You will know that forgiveness has begun when you recall those who hurt you and feel the power to wish them well. - Lewis B. Smedes",
    "28. Forgiveness is the final form of love. - Reinhold Niebuhr",
    "29. Forgiveness is the key to action and freedom. - Byron Katie",
    "30. The weak can never forgive. Forgiveness is the attribute of the strong. - Mahatma Gandhi",
    "31. Forgiveness is not an occasional act; it is a constant attitude. - Martin Luther King Jr.",
    "32. To forgive is to set a prisoner free and discover that the prisoner was you. - Lewis B. Smedes",
    "33. The more you know yourself, the more you forgive yourself. - Confucius",
    "34. Forgiveness doesn't excuse their behavior. Forgiveness prevents their behavior from destroying your heart. - Unknown",
    "35. Forgiveness is the fragrance that the violet sheds on the heel that has crushed it. - Mark Twain",
    "36. Forgiveness is a gift you give yourself. - Tony Robbins",
    "37. To err is human; to forgive, divine. - Alexander Pope",
    "38. The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "39. Forgiveness is not something we do for other people. We do it for ourselves to get well and move on. - Desmond Tutu",
    "40. Forgiveness is a funny thing. It warms the heart and cools the sting. - William Arthur Ward",
    "41. You will know that forgiveness has begun when you recall those who hurt you and feel the power to wish them well. - Lewis B. Smedes",
    "42. Forgiveness is the final form of love. - Reinhold Niebuhr",
    "43. Forgiveness is the key to action and freedom. - Byron Katie",
    "44. The weak can never forgive. Forgiveness is the attribute of the strong. - Mahatma Gandhi",
    "45. Forgiveness is not an occasional act; it is a constant attitude. - Martin Luther King Jr.",
    "46. To forgive is to set a prisoner free and discover that the prisoner was you. - Lewis B. Smedes",
    "47. The more you know yourself, the more you forgive yourself. - Confucius",
    "48. Forgiveness doesn't excuse their behavior. Forgiveness prevents their behavior from destroying your heart. - Unknown",
    "49. Forgiveness is the fragrance that the violet sheds on the heel that has crushed it. - Mark Twain",
    "50. Forgiveness is a gift you give yourself. - Tony Robbins",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 FORGIVENESS QUOTES</h1>
      <div className="suc">
        <h1 className="s">FORGIVENESS</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Forgiveness is a powerful and transformative act. It is not about condoning or excusing the actions of others, but about freeing ourselves from the burden of anger, resentment, and bitterness. When we forgive, we release the hold that the past has on us and open ourselves up to healing and growth. It takes courage and strength to forgive, but the rewards are immeasurable. Let these forgiveness quotes remind us of the importance of forgiveness in our lives.
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
