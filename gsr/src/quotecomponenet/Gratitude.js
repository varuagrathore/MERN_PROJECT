import React from 'react';

export default function Gratitude() {
  const quotes = [
    "1. Gratitude is the fairest blossom which springs from the soul. - Henry Ward Beecher",
    "2. Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough. - Oprah Winfrey",
    "3. Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow. - Melody Beattie",
    "4. The more grateful I am, the more beauty I see. - Mary Davis",
    "5. Gratitude turns what we have into enough. - Aesop",
    "6. When I started counting my blessings, my whole life turned around. - Willie Nelson",
    "7. Gratitude is not only the greatest of virtues but the parent of all others. - Marcus Tullius Cicero",
    "8. The root of joy is gratefulness. - David Steindl-Rast",
    "9. Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for. - Zig Ziglar",
    "10. Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul. - Amy Collette",
    "11. The more you praise and celebrate your life, the more there is in life to celebrate. - Oprah Winfrey",
    "12. If the only prayer you ever say in your entire life is 'thank you', it will be enough. - Meister Eckhart",
    "13. Gratitude is the memory of the heart. - Jean-Baptiste Massieu",
    "14. Acknowledging the good that you already have in your life is the foundation for all abundance. - Eckhart Tolle",
    "15. Gratitude is the sweetest thing in a seeker's life - in all human life. If there is gratitude in your heart, then there will be tremendous sweetness in your eyes. - Sri Chinmoy",
    "16. Gratitude is the sign of noble souls. - Aesop",
    "17. Gratitude is not only the greatest of virtues but the parent of all others. - Marcus Tullius Cicero",
    "18. Gratitude is riches. Complaint is poverty. - Doris Day",
    "19. Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul. - Amy Collette",
    "20. The more you praise and celebrate your life, the more there is in life to celebrate. - Oprah Winfrey",
    "21. Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for. - Zig Ziglar",
    "22. Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul. - Amy Collette",
    "23. The more grateful I am, the more beauty I see. - Mary Davis",
    "24. Gratitude is not only the greatest of virtues but the parent of all others. - Marcus Tullius Cicero",
    "25. Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for. - Zig Ziglar",
    "26. Gratitude is the fairest blossom which springs from the soul. - Henry Ward Beecher",
    "27. Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough. - Oprah Winfrey",
    "28. Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow. - Melody Beattie",
    "29. The more grateful I am, the more beauty I see. - Mary Davis",
    "30. Gratitude turns what we have into enough. - Aesop",
    "31. When I started counting my blessings, my whole life turned around. - Willie Nelson",
    "32. Gratitude is not only the greatest of virtues but the parent of all others. - Marcus Tullius Cicero",
    "33. The root of joy is gratefulness. - David Steindl-Rast",
    "34. Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for. - Zig Ziglar",
    "35. Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul. - Amy Collette",
    "36. The more you praise and celebrate your life, the more there is in life to celebrate. - Oprah Winfrey",
    "37. If the only prayer you ever say in your entire life is 'thank you', it will be enough. - Meister Eckhart",
    "38. Gratitude is the memory of the heart. - Jean-Baptiste Massieu",
    "39. Acknowledging the good that you already have in your life is the foundation for all abundance. - Eckhart Tolle",
    "40. Gratitude is the sweetest thing in a seeker's life - in all human life. If there is gratitude in your heart, then there will be tremendous sweetness in your eyes. - Sri Chinmoy",
    "41. Gratitude is the sign of noble souls. - Aesop",
    "42. Gratitude is not only the greatest of virtues but the parent of all others. - Marcus Tullius Cicero",
    "43. Gratitude is riches. Complaint is poverty. - Doris Day",
    "44. Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul. - Amy Collette",
    "45. The more you praise and celebrate your life, the more there is in life to celebrate. - Oprah Winfrey",
    "46. Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for. - Zig Ziglar",
    "47. Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul. - Amy Collette",
    "48. The more grateful I am, the more beauty I see. - Mary Davis",
    "49. Gratitude turns what we have into enough. - Aesop",
    "50. When I started counting my blessings, my whole life turned around. - Willie Nelson",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 GRATITUDE QUOTES</h1>
      <div className="suc">
        <h1 className="s">GRATITUDE</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Gratitude is the powerful emotion that can transform ordinary moments into extraordinary experiences. It is a way of appreciating and being thankful for all the blessings, big and small, in our lives. Practicing gratitude can lead to increased happiness, improved well-being, and stronger relationships. Let these quotes inspire you to cultivate gratitude in your daily life and discover the joy it brings.
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
