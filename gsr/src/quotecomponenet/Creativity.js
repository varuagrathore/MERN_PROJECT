import React from 'react';

export default function Creativity() {
  const quotes = [
    "1. Creativity is intelligence having fun. - Albert Einstein",
    "2. You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "3. Creativity is contagious, pass it on. - Albert Einstein",
    "4. The desire to create is one of the deepest yearnings of the human soul. - Dieter F. Uchtdorf",
    "5. Creativity takes courage. - Henri Matisse",
    "6. You are unique, and if that is not fulfilled, then something has been lost. - Martha Graham",
    "7. Creativity is the power to connect the seemingly unconnected. - William Plomer",
    "8. Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep. - Scott Adams",
    "9. The world is but a canvas to the imagination. - Henry David Thoreau",
    "10. Creativity is a wild mind and a disciplined eye. - Dorothy Parker",
    "11. Creativity is the way I share my soul with the world. - Brené Brown",
    "12. To be creative means to be in love with life. - Osho",
    "13. Every artist was first an amateur. - Ralph Waldo Emerson",
    "14. Creativity is the greatest rebellion in existence. - Osho",
    "15. You can't wait for inspiration. You have to go after it with a club. - Jack London",
    "16. The chief enemy of creativity is good sense. - Pablo Picasso",
    "17. Creativity is intelligence having fun. - Albert Einstein",
    "18. You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "19. Creativity is contagious, pass it on. - Albert Einstein",
    "20. The desire to create is one of the deepest yearnings of the human soul. - Dieter F. Uchtdorf",
    "21. Creativity takes courage. - Henri Matisse",
    "22. You are unique, and if that is not fulfilled, then something has been lost. - Martha Graham",
    "23. Creativity is the power to connect the seemingly unconnected. - William Plomer",
    "24. Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep. - Scott Adams",
    "25. The world is but a canvas to the imagination. - Henry David Thoreau",
    "26. Creativity is a wild mind and a disciplined eye. - Dorothy Parker",
    "27. Creativity is the way I share my soul with the world. - Brené Brown",
    "28. To be creative means to be in love with life. - Osho",
    "29. Every artist was first an amateur. - Ralph Waldo Emerson",
    "30. Creativity is the greatest rebellion in existence. - Osho",
    "31. You can't wait for inspiration. You have to go after it with a club. - Jack London",
    "32. The chief enemy of creativity is good sense. - Pablo Picasso",
    "33. Creativity is intelligence having fun. - Albert Einstein",
    "34. You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "35. Creativity is contagious, pass it on. - Albert Einstein",
    "36. The desire to create is one of the deepest yearnings of the human soul. - Dieter F. Uchtdorf",
    "37. Creativity takes courage. - Henri Matisse",
    "38. You are unique, and if that is not fulfilled, then something has been lost. - Martha Graham",
    "39. Creativity is the power to connect the seemingly unconnected. - William Plomer",
    "40. Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep. - Scott Adams",
    "41. The world is but a canvas to the imagination. - Henry David Thoreau",
    "42. Creativity is a wild mind and a disciplined eye. - Dorothy Parker",
    "43. Creativity is the way I share my soul with the world. - Brené Brown",
    "44. To be creative means to be in love with life. - Osho",
    "45. Every artist was first an amateur. - Ralph Waldo Emerson",
    "46. Creativity is the greatest rebellion in existence. - Osho",
    "47. You can't wait for inspiration. You have to go after it with a club. - Jack London",
    "48. The chief enemy of creativity is good sense. - Pablo Picasso",
    "49. Creativity is intelligence having fun. - Albert Einstein",
    "50. You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 CREATIVITY QUOTES</h1>
      <div className="suc">
        <h1 className="s">CREATIVITY</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Creativity is a boundless force that allows us to express our unique perspectives, thoughts, and emotions. It sparks innovation, fosters imagination, and transforms the ordinary into the extraordinary. Embrace your creativity and let it flow, for within its depths lies the power to shape a world of limitless possibilities.
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
