import React from 'react';

export default function Friendship() {
  const quotes = [
    "1. A real friend is one who walks in when the rest of the world walks out. - Walter Winchell",
    "2. Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one. - C.S. Lewis",
    "3. A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
    "4. A true friend is the greatest of all blessings, and that which we take the least care of all to acquire. - Francois de La Rochefoucauld",
    "5. A friend is someone who gives you total freedom to be yourself. - Jim Morrison",
    "6. Friends are the siblings God never gave us. - Mencius",
    "7. A friend is someone who can see the truth and pain in you even when you are fooling everyone else. - Unknown",
    "8. Friendship is the only cement that will ever hold the world together. - Woodrow Wilson",
    "9. A friend is someone who makes it easy to believe in yourself. - Heidi Wills",
    "10. A true friend is somebody who can make us feel better no matter how bad things may be. - Ralph Waldo Emerson",
    "11. A friend is one of the nicest things you can have and one of the best things you can be. - Winnie The Pooh",
    "12. The only way to have a friend is to be one. - Ralph Waldo Emerson",
    "13. Friendship is the only flower that blooms in all seasons. - Unknown",
    "14. A true friend is someone who is there for you when they'd rather be somewhere else. - Len Wein",
    "15. A friend is what the heart needs all the time. - Henry Van Dyke",
    "16. A real friend is one who walks in when the rest of the world walks out. - Walter Winchell",
    "17. Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one. - C.S. Lewis",
    "18. A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
    "19. A true friend is the greatest of all blessings, and that which we take the least care of all to acquire. - Francois de La Rochefoucauld",
    "20. A friend is someone who gives you total freedom to be yourself. - Jim Morrison",
    "21. Friends are the siblings God never gave us. - Mencius",
    "22. A friend is someone who can see the truth and pain in you even when you are fooling everyone else. - Unknown",
    "23. Friendship is the only cement that will ever hold the world together. - Woodrow Wilson",
    "24. A friend is someone who makes it easy to believe in yourself. - Heidi Wills",
    "25. A true friend is somebody who can make us feel better no matter how bad things may be. - Ralph Waldo Emerson",
    "26. A friend is one of the nicest things you can have and one of the best things you can be. - Winnie The Pooh",
    "27. The only way to have a friend is to be one. - Ralph Waldo Emerson",
    "28. Friendship is the only flower that blooms in all seasons. - Unknown",
    "29. A true friend is someone who is there for you when they'd rather be somewhere else. - Len Wein",
    "30. A friend is what the heart needs all the time. - Henry Van Dyke",
    "31. A real friend is one who walks in when the rest of the world walks out. - Walter Winchell",
    "32. Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one. - C.S. Lewis",
    "33. A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
    "34. A true friend is the greatest of all blessings, and that which we take the least care of all to acquire. - Francois de La Rochefoucauld",
    "35. A friend is someone who gives you total freedom to be yourself. - Jim Morrison",
    "36. Friends are the siblings God never gave us. - Mencius",
    "37. A friend is someone who can see the truth and pain in you even when you are fooling everyone else. - Unknown",
    "38. Friendship is the only cement that will ever hold the world together. - Woodrow Wilson",
    "39. A friend is someone who makes it easy to believe in yourself. - Heidi Wills",
    "40. A true friend is somebody who can make us feel better no matter how bad things may be. - Ralph Waldo Emerson",
    "41. A friend is one of the nicest things you can have and one of the best things you can be. - Winnie The Pooh",
    "42. The only way to have a friend is to be one. - Ralph Waldo Emerson",
    "43. Friendship is the only flower that blooms in all seasons. - Unknown",
    "44. A true friend is someone who is there for you when they'd rather be somewhere else. - Len Wein",
    "45. A friend is what the heart needs all the time. - Henry Van Dyke",
    "46. A real friend is one who walks in when the rest of the world walks out. - Walter Winchell",
    "47. Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one. - C.S. Lewis",
    "48. A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
    "49. A true friend is the greatest of all blessings, and that which we take the least care of all to acquire. - Francois de La Rochefoucauld",
    "50. A friend is someone who gives you total freedom to be yourself. - Jim Morrison",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 FRIENDSHIP QUOTES</h1>
      <div className="suc">
        <h1 className="s">FRIENDSHIP</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Friendship is a bond that enriches our lives in countless ways. It is the connection that goes beyond words, the understanding that transcends distances, and the love that knows no boundaries. A true friend is there in both joy and sorrow, providing unwavering support and unwavering acceptance. Let's celebrate the cherished moments we share with our friends, for they are the ones who make our journey through life more beautiful and meaningful.
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
