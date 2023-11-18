import React from 'react';

export default function Hope() {
  const quotes = [
    "1. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "2. Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all. - Emily Dickinson",
    "3. Once you choose hope, anything is possible. - Christopher Reeve",
    "4. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "5. Hope is the only thing stronger than fear. - Robert Ludlum",
    "6. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "7. Once you choose hope, anything is possible. - Christopher Reeve",
    "8. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "9. Hope is the only thing stronger than fear. - Robert Ludlum",
    "10. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "11. Once you choose hope, anything is possible. - Christopher Reeve",
    "12. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "13. Hope is the only thing stronger than fear. - Robert Ludlum",
    "14. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "15. Once you choose hope, anything is possible. - Christopher Reeve",
    "16. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "17. Hope is the only thing stronger than fear. - Robert Ludlum",
    "18. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "19. Once you choose hope, anything is possible. - Christopher Reeve",
    "20. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "21. Hope is the only thing stronger than fear. - Robert Ludlum",
    "22. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "23. Once you choose hope, anything is possible. - Christopher Reeve",
    "24. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "25. Hope is the only thing stronger than fear. - Robert Ludlum",
    "26. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "27. Once you choose hope, anything is possible. - Christopher Reeve",
    "28. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "29. Hope is the only thing stronger than fear. - Robert Ludlum",
    "30. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "31. Once you choose hope, anything is possible. - Christopher Reeve",
    "32. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "33. Hope is the only thing stronger than fear. - Robert Ludlum",
    "34. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "35. Once you choose hope, anything is possible. - Christopher Reeve",
    "36. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "37. Hope is the only thing stronger than fear. - Robert Ludlum",
    "38. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "39. Once you choose hope, anything is possible. - Christopher Reeve",
    "40. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "41. Hope is the only thing stronger than fear. - Robert Ludlum",
    "42. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "43. Once you choose hope, anything is possible. - Christopher Reeve",
    "44. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "45. Hope is the only thing stronger than fear. - Robert Ludlum",
    "46. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
    "47. Once you choose hope, anything is possible. - Christopher Reeve",
    "48. Hope is important because it can make the present moment less difficult to bear. - Thich Nhat Hanh",
    "49. Hope is the only thing stronger than fear. - Robert Ludlum",
    "50. Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 HOPE QUOTES</h1>
      <div className="suc">
        <h1 className="s">HOPE</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Hope is the beacon that shines in the darkest hours. It is the belief that better days are ahead, even when everything seems uncertain. Hope gives us strength, courage, and resilience to face life's challenges. These hope quotes remind us that hope is a powerful force that can ignite change, heal wounds, and inspire us to keep moving forward. Let these quotes fill your heart with hope and remind you that no matter how tough the journey, hope will always lead you to a brighter tomorrow.
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
