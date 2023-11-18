import React from 'react';

export default function Happiness() {
  const quotes = [
    "1. The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "2. Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "3. Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed. - Unknown",
    "4. Happiness is not a state to arrive at, but a manner of traveling. - Margaret Lee Runbeck",
    "5. Be happy with what you have. Be excited about what you want. - Alan Cohen",
    "6. The only thing that will make you happy is being happy with who you are. - Goldie Hawn",
    "7. Happiness is not something you postpone for the future; it is something you design for the present. - Jim Rohn",
    "8. Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy. - Ralph Marston",
    "9. The only way to find true happiness is to risk being completely cut open. - Chuck Palahniuk",
    "10. Be so happy that when others look at you, they become happy too. - Unknown",
    "11. The most important thing is to enjoy your life—to be happy—it's all that matters. - Audrey Hepburn",
    "12. The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "13. The key to being happy is knowing you have the power to choose what to accept and what to let go. - Dodinsky",
    "14. Happiness is the secret to all beauty. There is no beauty without happiness. - Christian Dior",
    "15. You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life. - Albert Camus",
    "16. The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "17. Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed. - Unknown",
    "18. The only thing that will make you happy is being happy with who you are. - Goldie Hawn",
    "19. Be happy with what you have. Be excited about what you want. - Alan Cohen",
    "20. Happiness is not a state to arrive at, but a manner of traveling. - Margaret Lee Runbeck",
    "21. The most important thing is to enjoy your life—to be happy—it's all that matters. - Audrey Hepburn",
    "22. Happiness is not something you postpone for the future; it is something you design for the present. - Jim Rohn",
    "23. Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy. - Ralph Marston",
    "24. Be so happy that when others look at you, they become happy too. - Unknown",
    "25. Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "26. The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "27. The key to being happy is knowing you have the power to choose what to accept and what to let go. - Dodinsky",
    "28. Happiness is the secret to all beauty. There is no beauty without happiness. - Christian Dior",
    "29. You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life. - Albert Camus",
    "30. The most important thing is to enjoy your life—to be happy—it's all that matters. - Audrey Hepburn",
    "31. The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "32. Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed. - Unknown",
    "33. The only thing that will make you happy is being happy with who you are. - Goldie Hawn",
    "34. Be happy with what you have. Be excited about what you want. - Alan Cohen",
    "35. Happiness is not a state to arrive at, but a manner of traveling. - Margaret Lee Runbeck",
    "36. The key to being happy is knowing you have the power to choose what to accept and what to let go. - Dodinsky",
    "37. Happiness is not something you postpone for the future; it is something you design for the present. - Jim Rohn",
    "38. Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy. - Ralph Marston",
    "39. Be so happy that when others look at you, they become happy too. - Unknown",
    "40. Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "41. The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "42. The key to being happy is knowing you have the power to choose what to accept and what to let go. - Dodinsky",
    "43. Happiness is the secret to all beauty. There is no beauty without happiness. - Christian Dior",
    "44. You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life. - Albert Camus",
    "45. The most important thing is to enjoy your life—to be happy—it's all that matters. - Audrey Hepburn",
    "46. The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "47. Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed. - Unknown",
    "48. The only thing that will make you happy is being happy with who you are. - Goldie Hawn",
    "49. Be happy with what you have. Be excited about what you want. - Alan Cohen",
    "50. Happiness is not a state to arrive at, but a manner of traveling. - Margaret Lee Runbeck",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 HAPPINESS QUOTES</h1>
      <div className="suc">
        <h1 className="s">HAPPINESS</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Happiness is a state of mind that arises from within. It is the joy we feel when we embrace life with gratitude and contentment. Happiness is not a destination; it is a journey, and it starts with appreciating the present moment and finding joy in the little things. Let these happiness quotes remind you to cherish every day and live life with a positive outlook, for happiness is the key to a fulfilling and meaningful life.
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
