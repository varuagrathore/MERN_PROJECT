import React from 'react';

export default function Faith() {
  const quotes = [
    "1. Faith is taking the first step even when you can't see the whole staircase. - Martin Luther King Jr.",
    "2. The more you believe in your own ability to succeed, the more likely it is that you will. - Shawn Achor",
    "3. Have faith in yourself, all power is in you. - Swami Vivekananda",
    "4. Faith is not the belief that God will do what you want. It is the belief that God will do what is right. - Max Lucado",
    "5. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "6. Faith is not about everything turning out okay; faith is about being okay no matter how things turn out. - Unknown",
    "7. Faith is the bird that feels the light when the dawn is still dark. - Rabindranath Tagore",
    "8. The most beautiful thing about life is that you can always change, grow, and get better. You aren't defined by your past. You aren't your mistakes. - Unknown",
    "9. Believe you can and you're halfway there. - Theodore Roosevelt",
    "10. Have faith in yourself. All power is in you. - Swami Vivekananda",
    "11. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "12. Faith is to believe what you do not see; the reward of this faith is to see what you believe. - Saint Augustine",
    "13. Fear is the glue that keeps you stuck. Faith is the solvent that sets you free. - Shannon L. Alder",
    "14. To one who has faith, no explanation is necessary. To one without faith, no explanation is possible. - Thomas Aquinas",
    "15. Faith is the art of holding on to things in spite of your changing moods and circumstances. - C.S. Lewis",
    "16. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "17. To have faith is to trust yourself to the water. When you swim, you don't grab hold of the water, because if you do, you will sink and drown. Instead, you relax and float. - Alan Watts",
    "18. Faith is not something to grasp, it is a state to grow into. - Mahatma Gandhi",
    "19. Faith is the strength by which a shattered world shall emerge into the light. - Helen Keller",
    "20. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "21. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "22. Have faith in yourself. All power is in you. - Swami Vivekananda",
    "23. Faith is the bird that feels the light when the dawn is still dark. - Rabindranath Tagore",
    "24. The more you believe in your own ability to succeed, the more likely it is that you will. - Shawn Achor",
    "25. Faith is not the belief that God will do what you want. It is the belief that God will do what is right. - Max Lucado",
    "26. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "27. Faith is not about everything turning out okay; faith is about being okay no matter how things turn out. - Unknown",
    "28. Faith is the bird that feels the light when the dawn is still dark. - Rabindranath Tagore",
    "29. The most beautiful thing about life is that you can always change, grow, and get better. You aren't defined by your past. You aren't your mistakes. - Unknown",
    "30. Believe you can and you're halfway there. - Theodore Roosevelt",
    "31. Have faith in yourself. All power is in you. - Swami Vivekananda",
    "32. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "33. Faith is to believe what you do not see; the reward of this faith is to see what you believe. - Saint Augustine",
    "34. Fear is the glue that keeps you stuck. Faith is the solvent that sets you free. - Shannon L. Alder",
    "35. To one who has faith, no explanation is necessary. To one without faith, no explanation is possible. - Thomas Aquinas",
    "36. Faith is the art of holding on to things in spite of your changing moods and circumstances. - C.S. Lewis",
    "37. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "38. To have faith is to trust yourself to the water. When you swim, you don't grab hold of the water, because if you do, you will sink and drown. Instead, you relax and float. - Alan Watts",
    "39. Faith is not something to grasp, it is a state to grow into. - Mahatma Gandhi",
    "40. Faith is the strength by which a shattered world shall emerge into the light. - Helen Keller",
    "41. The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "42. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "43. Have faith in yourself. All power is in you. - Swami Vivekananda",
    "44. Faith is the bird that feels the light when the dawn is still dark. - Rabindranath Tagore",
    "45. The more you believe in your own ability to succeed, the more likely it is that you will. - Shawn Achor",
    "46. Faith is not the belief that God will do what you want. It is the belief that God will do what is right. - Max Lucado",
    "47. Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "48. Faith is not about everything turning out okay; faith is about being okay no matter how things turn out. - Unknown",
    "49. Faith is the bird that feels the light when the dawn is still dark. - Rabindranath Tagore",
    "50. The most beautiful thing about life is that you can always change, grow, and get better. You aren't defined by your past. You aren't your mistakes. - Unknown",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 FAITH QUOTES</h1>
      <div className="suc">
        <h1 className="s">FAITH</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Faith is a powerful force that gives us strength and hope even in the face of uncertainty. It is the belief in something greater than ourselves, whether it be a higher power, destiny, or the goodness of humanity. These quotes about faith will inspire you to hold on to your beliefs and trust in the journey of life.
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
