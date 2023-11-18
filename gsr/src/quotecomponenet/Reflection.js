import React from 'react';

export default function Reflection() {
  const quotes = [
    "1. In the midst of movement and chaos, keep stillness inside of you. - Deepak Chopra",
    "2. We do not learn from experience... we learn from reflecting on experience. - John Dewey",
    "3. Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things. - Sonya Teclai",
    "4. The most complicated skill is to be simple. - Dejan Stojanovic",
    "5. The real man smiles in trouble, gathers strength from distress, and grows brave by reflection. - Thomas Paine",
    "6. The journey into self-love and self-acceptance must begin with self-examination... until you take the journey of self-reflection, it is almost impossible to grow or learn in life. - Iyanla Vanzant",
    "7. You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi",
    "8. The unexamined life is not worth living. - Socrates",
    "9. Life can only be understood backwards; but it must be lived forwards. - Søren Kierkegaard",
    "10. Be the change that you wish to see in the world. - Mahatma Gandhi",
    "11. We do not learn from experience... we learn from reflecting on experience. - John Dewey",
    "12. In the midst of movement and chaos, keep stillness inside of you. - Deepak Chopra",
    "13. Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things. - Sonya Teclai",
    "14. The most complicated skill is to be simple. - Dejan Stojanovic",
    "15. The real man smiles in trouble, gathers strength from distress, and grows brave by reflection. - Thomas Paine",
    "16. The journey into self-love and self-acceptance must begin with self-examination... until you take the journey of self-reflection, it is almost impossible to grow or learn in life. - Iyanla Vanzant",
    "17. You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi",
    "18. The unexamined life is not worth living. - Socrates",
    "19. Life can only be understood backwards; but it must be lived forwards. - Søren Kierkegaard",
    "20. Be the change that you wish to see in the world. - Mahatma Gandhi",
    "21. We do not learn from experience... we learn from reflecting on experience. - John Dewey",
    "22. In the midst of movement and chaos, keep stillness inside of you. - Deepak Chopra",
    "23. Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things. - Sonya Teclai",
    "24. The most complicated skill is to be simple. - Dejan Stojanovic",
    "25. The real man smiles in trouble, gathers strength from distress, and grows brave by reflection. - Thomas Paine",
    "26. The journey into self-love and self-acceptance must begin with self-examination... until you take the journey of self-reflection, it is almost impossible to grow or learn in life. - Iyanla Vanzant",
    "27. You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi",
    "28. The unexamined life is not worth living. - Socrates",
    "29. Life can only be understood backwards; but it must be lived forwards. - Søren Kierkegaard",
    "30. Be the change that you wish to see in the world. - Mahatma Gandhi",
    "31. We do not learn from experience... we learn from reflecting on experience. - John Dewey",
    "32. In the midst of movement and chaos, keep stillness inside of you. - Deepak Chopra",
    "33. Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things. - Sonya Teclai",
    "34. The most complicated skill is to be simple. - Dejan Stojanovic",
    "35. The real man smiles in trouble, gathers strength from distress, and grows brave by reflection. - Thomas Paine",
    "36. The journey into self-love and self-acceptance must begin with self-examination... until you take the journey of self-reflection, it is almost impossible to grow or learn in life. - Iyanla Vanzant",
    "37. You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi",
    "38. The unexamined life is not worth living. - Socrates",
    "39. Life can only be understood backwards; but it must be lived forwards. - Søren Kierkegaard",
    "40. Be the change that you wish to see in the world. - Mahatma Gandhi",
    "41. We do not learn from experience... we learn from reflecting on experience. - John Dewey",
    "42. In the midst of movement and chaos, keep stillness inside of you. - Deepak Chopra",
    "43. Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things. - Sonya Teclai",
    "44. The most complicated skill is to be simple. - Dejan Stojanovic",
    "45. The real man smiles in trouble, gathers strength from distress, and grows brave by reflection. - Thomas Paine",
    "46. The journey into self-love and self-acceptance must begin with self-examination... until you take the journey of self-reflection, it is almost impossible to grow or learn in life. - Iyanla Vanzant",
    "47. You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi",
    "48. The unexamined life is not worth living. - Socrates",
    "49. Life can only be understood backwards; but it must be lived forwards. - Søren Kierkegaard",
    "50. Be the change that you wish to see in the world. - Mahatma Gandhi",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 REFLECTION QUOTES</h1>
      <div className="suc">
        <h1 className="s">REFLECTION</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Taking time for self-reflection allows you to gain perspective,
          understand your emotions, and grow as an individual. It's a process of
          introspection and contemplation that leads to deeper insights about
          yourself and the world around you. Embrace the power of reflection and
          let these quotes inspire you to embark on a journey of self-discovery.
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
