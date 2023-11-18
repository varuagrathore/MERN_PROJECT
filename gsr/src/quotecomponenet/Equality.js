import React from 'react';

export default function Equality() {
  const quotes = [
    "1. Injustice anywhere is a threat to justice everywhere. - Martin Luther King Jr.",
    "2. We all should know that diversity makes for a rich tapestry, and we must understand that all the threads of the tapestry are equal in value no matter what their color. - Maya Angelou",
    "3. We may have different religions, different languages, different colored skin, but we all belong to one human race. - Kofi Annan",
    "4. No one is born hating another person because of the color of his skin, or his background, or his religion. - Nelson Mandela",
    "5. The good we secure for ourselves is precarious and uncertain until it is secured for all of us and incorporated into our common life. - Jane Addams",
    "6. I don't want to be a passenger in my own country. - Diane Abbott",
    "7. We need to reject any politics that targets people because of race or religion. - Barack Obama",
    "8. We must learn to live together as brothers or perish together as fools. - Martin Luther King Jr.",
    "9. We may have different religions, different languages, different colored skin, but we all belong to one human race. - Kofi Annan",
    "10. Our true nationality is mankind. - H.G. Wells",
    "11. We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead. - Beyoncé",
    "12. The struggle for equality continues unabated, and the woman warrior who is armed with courage will be among the first to celebrate victory. - Maya Angelou",
    "13. The beauty of standing up for your rights is others see you standing and stand up as well. - Cassandra Duffy",
    "14. We may have different religions, different languages, different colored skin, but we all belong to one human race. - Kofi Annan",
    "15. An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity. - Martin Luther King Jr.",
    "16. Equality is not a concept. It's not something we should be striving for. It's a necessity. Equality is like gravity. We need it to stand on this earth as men and women. - Joss Whedon",
    "17. We all should know that diversity makes for a rich tapestry, and we must understand that all the threads of the tapestry are equal in value no matter what their color. - Maya Angelou",
    "18. We must learn to live together as brothers or perish together as fools. - Martin Luther King Jr.",
    "19. If you want to fly, you have to give up the things that weigh you down. - Toni Morrison",
    "20. It's time for women to stop being politely angry. - Leymah Gbowee",
    "21. I have not ceased being fearful, but I have ceased to let fear control me. - Erica Jong",
    "22. We may have different religions, different languages, different colored skin, but we all belong to one human race. - Kofi Annan",
    "23. No person is your friend who demands your silence or denies your right to grow. - Alice Walker",
    "24. I am my best work - a series of road maps, reports, recipes, doodles, and prayers from the front lines. - Audre Lorde",
    "25. An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity. - Martin Luther King Jr.",
    "26. We need to reject any politics that targets people because of race or religion. - Barack Obama",
    "27. We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead. - Beyoncé",
    "28. The struggle for equality continues unabated, and the woman warrior who is armed with courage will be among the first to celebrate victory. - Maya Angelou",
    "29. The beauty of standing up for your rights is others see you standing and stand up as well. - Cassandra Duffy",
    "30. We may have different religions, different languages, different colored skin, but we all belong to one human race. - Kofi Annan",
    "31. Our true nationality is mankind. - H.G. Wells",
    "32. We need to reject any politics that targets people because of race or religion. - Barack Obama",
    "33. We must learn to live together as brothers or perish together as fools. - Martin Luther King Jr.",
    "34. We may have different religions, different languages, different colored skin, but we all belong to one human race. - Kofi Annan",
    "35. An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity. - Martin Luther King Jr.",
    "36. Equality is not a concept. It's not something we should be striving for. It's a necessity. Equality is like gravity. We need it to stand on this earth as men and women. - Joss Whedon",
    "37. We all should know that diversity makes for a rich tapestry, and we must understand that all the threads of the tapestry are equal in value no matter what their color. - Maya Angelou",
    "38. We must learn to live together as brothers or perish together as fools. - Martin Luther King Jr.",
    "39. If you want to fly, you have to give up the things that weigh you down. - Toni Morrison",
    "40. It's time for women to stop being politely angry. - Leymah Gbowee",
    "41. I have not ceased being fearful, but I have ceased to let fear control me. - Erica Jong",
    "42. We may have different religions, different languages, different colored skin, but we all belong to one human race. - Kofi Annan",
    "43. No person is your friend who demands your silence or denies your right to grow. - Alice Walker",
    "44. I am my best work - a series of road maps, reports, recipes, doodles, and prayers from the front lines. - Audre Lorde",
    "45. An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity. - Martin Luther King Jr.",
    "46. We need to reject any politics that targets people because of race or religion. - Barack Obama",
    "47. We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead. - Beyoncé",
    "48. The struggle for equality continues unabated, and the woman warrior who is armed with courage will be among the first to celebrate victory. - Maya Angelou",
    "49. The beauty of standing up for your rights is others see you standing and stand up as well. - Cassandra Duffy",
    "50. We may have different religions, different languages, different colored skin, but we all belong to one human race. - Kofi Annan",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 EQUALITY QUOTES</h1>
      <div className="suc">
        <h1 className="s">EQUALITY</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Equality is the cornerstone of a just and compassionate society. It is the belief that all individuals should have equal rights, opportunities, and treatment regardless of their background, race, gender, or beliefs. Let these quotes remind us of the importance of promoting equality in all aspects of life and inspire us to work together for a more inclusive and harmonious world.
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
