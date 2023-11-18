import React from 'react';

export default function Wisdom() {
  const quotes = [
    "1. The only true wisdom is in knowing you know nothing. - Socrates",
    "2. The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next. - Ursula K. Le Guin",
    "3. Knowledge speaks, but wisdom listens. - Jimi Hendrix",
    "4. The invariable mark of wisdom is to see the miraculous in the common. - Ralph Waldo Emerson",
    "5. The older I grow, the more I distrust the familiar doctrine that age brings wisdom. - H.L. Mencken",
    "6. The man of wisdom is never of two minds; the man of benevolence never worries; the man of courage is never afraid. - Confucius",
    "7. Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. - Rumi",
    "8. The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare",
    "9. Wisdom is the daughter of experience. - Leonardo da Vinci",
    "10. The beginning of wisdom is the definition of terms. - Socrates",
    "11. The wise man does at once what the fool does finally. - Niccolo Machiavelli",
    "12. Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein",
    "13. The only true wisdom is in knowing you know nothing. - Socrates",
    "14. The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next. - Ursula K. Le Guin",
    "15. Knowledge speaks, but wisdom listens. - Jimi Hendrix",
    "16. The invariable mark of wisdom is to see the miraculous in the common. - Ralph Waldo Emerson",
    "17. The older I grow, the more I distrust the familiar doctrine that age brings wisdom. - H.L. Mencken",
    "18. The man of wisdom is never of two minds; the man of benevolence never worries; the man of courage is never afraid. - Confucius",
    "19. Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. - Rumi",
    "20. The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare",
    "21. Wisdom is the daughter of experience. - Leonardo da Vinci",
    "22. The beginning of wisdom is the definition of terms. - Socrates",
    "23. The wise man does at once what the fool does finally. - Niccolo Machiavelli",
    "24. Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein",
    "25. The only true wisdom is in knowing you know nothing. - Socrates",
    "26. The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next. - Ursula K. Le Guin",
    "27. Knowledge speaks, but wisdom listens. - Jimi Hendrix",
    "28. The invariable mark of wisdom is to see the miraculous in the common. - Ralph Waldo Emerson",
    "29. The older I grow, the more I distrust the familiar doctrine that age brings wisdom. - H.L. Mencken",
    "30. The man of wisdom is never of two minds; the man of benevolence never worries; the man of courage is never afraid. - Confucius",
    "31. Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. - Rumi",
    "32. The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare",
    "33. Wisdom is the daughter of experience. - Leonardo da Vinci",
    "34. The beginning of wisdom is the definition of terms. - Socrates",
    "35. The wise man does at once what the fool does finally. - Niccolo Machiavelli",
    "36. Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein",
    "37. The only true wisdom is in knowing you know nothing. - Socrates",
    "38. The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next. - Ursula K. Le Guin",
    "39. Knowledge speaks, but wisdom listens. - Jimi Hendrix",
    "40. The invariable mark of wisdom is to see the miraculous in the common. - Ralph Waldo Emerson",
    "41. The older I grow, the more I distrust the familiar doctrine that age brings wisdom. - H.L. Mencken",
    "42. The man of wisdom is never of two minds; the man of benevolence never worries; the man of courage is never afraid. - Confucius",
    "43. Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. - Rumi",
    "44. The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare",
    "45. Wisdom is the daughter of experience. - Leonardo da Vinci",
    "46. The beginning of wisdom is the definition of terms. - Socrates",
    "47. The wise man does at once what the fool does finally. - Niccolo Machiavelli",
    "48. Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein",
    "49. The only true wisdom is in knowing you know nothing. - Socrates",
    "50. The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next. - Ursula K. Le Guin",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 WISDOM QUOTES</h1>
      <div className="suc">
        <h1 className="s">WISDOM</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Wisdom is the accumulation of knowledge, experience, and insight. It is
          the ability to make sound judgments and apply discernment to the
          challenges of life. These quotes about wisdom serve as a reminder of the
          value of learning, growing, and seeking understanding to navigate the
          complexities of the world.
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
