import React from 'react';

export default function Purpose() {
  const quotes = [
    "1. The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "2. Your purpose in life is to find your purpose and give your whole heart and soul to it. - Buddha",
    "3. The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "4. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "5. The best way to predict the future is to create it. - Peter Drucker",
    "6. The purpose of our lives is to be happy. - Dalai Lama",
    "7. The purpose of human life is to serve and to show compassion and the will to help others. - Albert Schweitzer",
    "8. The purpose of life is a life of purpose. - Robert Byrne",
    "9. The purpose of our lives is to give birth to the best which is within us. - Marianne Williamson",
    "10. The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "11. Your purpose in life is to find your purpose and give your whole heart and soul to it. - Buddha",
    "12. The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "13. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "14. The best way to predict the future is to create it. - Peter Drucker",
    "15. The purpose of our lives is to be happy. - Dalai Lama",
    "16. The purpose of human life is to serve and to show compassion and the will to help others. - Albert Schweitzer",
    "17. The purpose of life is a life of purpose. - Robert Byrne",
    "18. The purpose of our lives is to give birth to the best which is within us. - Marianne Williamson",
    "19. The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "20. Your purpose in life is to find your purpose and give your whole heart and soul to it. - Buddha",
    "21. The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "22. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "23. The best way to predict the future is to create it. - Peter Drucker",
    "24. The purpose of our lives is to be happy. - Dalai Lama",
    "25. The purpose of human life is to serve and to show compassion and the will to help others. - Albert Schweitzer",
    "26. The purpose of life is a life of purpose. - Robert Byrne",
    "27. The purpose of our lives is to give birth to the best which is within us. - Marianne Williamson",
    "28. The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "29. Your purpose in life is to find your purpose and give your whole heart and soul to it. - Buddha",
    "30. The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "31. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "32. The best way to predict the future is to create it. - Peter Drucker",
    "33. The purpose of our lives is to be happy. - Dalai Lama",
    "34. The purpose of human life is to serve and to show compassion and the will to help others. - Albert Schweitzer",
    "35. The purpose of life is a life of purpose. - Robert Byrne",
    "36. The purpose of our lives is to give birth to the best which is within us. - Marianne Williamson",
    "37. The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "38. Your purpose in life is to find your purpose and give your whole heart and soul to it. - Buddha",
    "39. The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "40. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "41. The best way to predict the future is to create it. - Peter Drucker",
    "42. The purpose of our lives is to be happy. - Dalai Lama",
    "43. The purpose of human life is to serve and to show compassion and the will to help others. - Albert Schweitzer",
    "44. The purpose of life is a life of purpose. - Robert Byrne",
    "45. The purpose of our lives is to give birth to the best which is within us. - Marianne Williamson",
    "46. The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "47. Your purpose in life is to find your purpose and give your whole heart and soul to it. - Buddha",
    "48. The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "49. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "50. The best way to predict the future is to create it. - Peter Drucker",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 PURPOSE QUOTES</h1>
      <div className="suc">
        <h1 className="s">PURPOSE</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Understanding your purpose in life can bring a sense of fulfillment
          and direction. It is the driving force behind your goals and actions,
          and it gives meaning to your existence. Let these purpose quotes
          inspire you to discover your true calling and live a life that aligns
          with your deepest values and passions.
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
