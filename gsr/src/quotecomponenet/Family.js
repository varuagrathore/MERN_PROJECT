import React from 'react';

export default function Family() {
  const quotes = [
    "1. Family is not an important thing. It's everything. - Michael J. Fox",
    "2. The love of a family is life's greatest blessing. - Unknown",
    "3. In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony. - Friedrich Nietzsche",
    "4. The informality of family life is a blessed condition that allows us all to become our best while looking our worst. - Marge Kennedy",
    "5. The family is one of nature's masterpieces. - George Santayana",
    "6. A happy family is but an earlier heaven. - George Bernard Shaw",
    "7. The bond that links your true family is not one of blood, but of respect and joy in each other's life. - Richard Bach",
    "8. The love of family and the admiration of friends is much more important than wealth and privilege. - Charles Kuralt",
    "9. The family is the first essential cell of human society. - Pope John XXIII",
    "10. Family means no one gets left behind or forgotten. - David Ogden Stiers",
    "11. Family is where life begins & love never ends. - Unknown",
    "12. The most important thing in the world is family and love. - John Wooden",
    "13. Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter. - Brad Henry",
    "14. My family is my life, and everything else comes second as far as what's important to me. - Michael Imperioli",
    "15. The family is a haven in a heartless world. - Christopher Lasch",
    "16. You don't choose your family. They are God's gift to you, as you are to them. - Desmond Tutu",
    "17. When trouble comes, it's your family that supports you. - Guy Lafleur",
    "18. Family is not an important thing. It's everything. - Michael J. Fox",
    "19. Family is where life begins & love never ends. - Unknown",
    "20. The love of a family is life's greatest blessing. - Unknown",
    "21. In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony. - Friedrich Nietzsche",
    "22. The informality of family life is a blessed condition that allows us all to become our best while looking our worst. - Marge Kennedy",
    "23. The family is one of nature's masterpieces. - George Santayana",
    "24. A happy family is but an earlier heaven. - George Bernard Shaw",
    "25. The bond that links your true family is not one of blood, but of respect and joy in each other's life. - Richard Bach",
    "26. The love of family and the admiration of friends is much more important than wealth and privilege. - Charles Kuralt",
    "27. The family is the first essential cell of human society. - Pope John XXIII",
    "28. Family means no one gets left behind or forgotten. - David Ogden Stiers",
    "29. The most important thing in the world is family and love. - John Wooden",
    "30. Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter. - Brad Henry",
    "31. My family is my life, and everything else comes second as far as what's important to me. - Michael Imperioli",
    "32. The family is a haven in a heartless world. - Christopher Lasch",
    "33. You don't choose your family. They are God's gift to you, as you are to them. - Desmond Tutu",
    "34. When trouble comes, it's your family that supports you. - Guy Lafleur",
    "35. Family is not an important thing. It's everything. - Michael J. Fox",
    "36. Family is where life begins & love never ends. - Unknown",
    "37. The love of a family is life's greatest blessing. - Unknown",
    "38. In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony. - Friedrich Nietzsche",
    "39. The informality of family life is a blessed condition that allows us all to become our best while looking our worst. - Marge Kennedy",
    "40. The family is one of nature's masterpieces. - George Santayana",
    "41. A happy family is but an earlier heaven. - George Bernard Shaw",
    "42. The bond that links your true family is not one of blood, but of respect and joy in each other's life. - Richard Bach",
    "43. The love of family and the admiration of friends is much more important than wealth and privilege. - Charles Kuralt",
    "44. The family is the first essential cell of human society. - Pope John XXIII",
    "45. Family means no one gets left behind or forgotten. - David Ogden Stiers",
    "46. The most important thing in the world is family and love. - John Wooden",
    "47. Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter. - Brad Henry",
    "48. My family is my life, and everything else comes second as far as what's important to me. - Michael Imperioli",
    "49. The family is a haven in a heartless world. - Christopher Lasch",
    "50. You don't choose your family. They are God's gift to you, as you are to them. - Desmond Tutu",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 FAMILY QUOTES</h1>
      <div className="suc">
        <h1 className="s">FAMILY</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Family is not an important thing, it's everything. The love and support of family are some of the most precious gifts in life. Families are the ones who stand by us in times of joy and sorrow, who share in our laughter and tears. They are the ones who understand us, accept us for who we are, and love us unconditionally. Let's cherish and celebrate the beautiful bond of family and the memories we create together.
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
