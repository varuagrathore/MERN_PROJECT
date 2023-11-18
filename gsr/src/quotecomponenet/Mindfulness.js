import React from 'react';

export default function Mindfulness() {
  const quotes = [
    "1. The present moment is the only moment available to us, and it is the door to all moments. - Thich Nhat Hanh",
    "2. The best way to capture moments is to pay attention. This is how we cultivate mindfulness. - Jon Kabat-Zinn",
    "3. Mindfulness is a way of befriending ourselves and our experience. - Jon Kabat-Zinn",
    "4. Awareness is the greatest agent for change. - Eckhart Tolle",
    "5. Mindfulness is the aware, balanced acceptance of the present experience. It isn't more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it. - Sylvia Boorstein",
    "6. In the beginner's mind there are many possibilities, but in the expert's mind there are few. - Shunryu Suzuki",
    "7. Mindfulness is simply being aware of what is happening right now without wishing it were different; enjoying the pleasant without holding on when it changes (which it will); being with the unpleasant without fearing it will always be this way (which it won't). - James Baraz",
    "8. Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. - Thich Nhat Hanh",
    "9. Mindfulness is the key to everything. - Pema Chodron",
    "10. When you realize nothing is lacking, the whole world belongs to you. - Lao Tzu",
    "11. The little things? The little moments? They aren't little. - Jon Kabat-Zinn",
    "12. The present moment is filled with joy and happiness. If you are attentive, you will see it. - Thich Nhat Hanh",
    "13. When we get too caught up in the busyness of the world, we lose connection with one another and ourselves. - Jack Kornfield",
    "14. The only thing that is ultimately real about your journey is the step that you are taking at this moment. That's all there ever is. - Eckhart Tolle",
    "15. Life is a dance. Mindfulness is witnessing that dance. - Amit Ray",
    "16. You can't stop the waves, but you can learn to surf. - Jon Kabat-Zinn",
    "17. Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves - slowly, evenly, without rushing toward the future. - Thich Nhat Hanh",
    "18. Mindfulness helps you go home to the present. And every time you go there and recognize a condition of happiness that you have, happiness comes. - Thich Nhat Hanh",
    "19. When I let go of what I am, I become what I might be. - Lao Tzu",
    "20. The real meditation is how you live your life. - Jon Kabat-Zinn",
    "21. Life is available only in the present moment. - Thich Nhat Hanh",
    "22. The most precious gift we can offer anyone is our attention. - Thich Nhat Hanh",
    "23. The best way to capture moments is to pay attention. This is how we cultivate mindfulness. - Jon Kabat-Zinn",
    "24. Mindfulness is a way of befriending ourselves and our experience. - Jon Kabat-Zinn",
    "25. Awareness is the greatest agent for change. - Eckhart Tolle",
    "26. Mindfulness is the aware, balanced acceptance of the present experience. It isn't more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it. - Sylvia Boorstein",
    "27. In the beginner's mind there are many possibilities, but in the expert's mind there are few. - Shunryu Suzuki",
    "28. Mindfulness is simply being aware of what is happening right now without wishing it were different; enjoying the pleasant without holding on when it changes (which it will); being with the unpleasant without fearing it will always be this way (which it won't). - James Baraz",
    "29. Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. - Thich Nhat Hanh",
    "30. Mindfulness is the key to everything. - Pema Chodron",
    "31. When you realize nothing is lacking, the whole world belongs to you. - Lao Tzu",
    "32. The little things? The little moments? They aren't little. - Jon Kabat-Zinn",
    "33. The present moment is filled with joy and happiness. If you are attentive, you will see it. - Thich Nhat Hanh",
    "34. When we get too caught up in the busyness of the world, we lose connection with one another and ourselves. - Jack Kornfield",
    "35. The only thing that is ultimately real about your journey is the step that you are taking at this moment. That's all there ever is. - Eckhart Tolle",
    "36. Life is a dance. Mindfulness is witnessing that dance. - Amit Ray",
    "37. You can't stop the waves, but you can learn to surf. - Jon Kabat-Zinn",
    "38. Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves - slowly, evenly, without rushing toward the future. - Thich Nhat Hanh",
    "39. Mindfulness helps you go home to the present. And every time you go there and recognize a condition of happiness that you have, happiness comes. - Thich Nhat Hanh",
    "40. When I let go of what I am, I become what I might be. - Lao Tzu",
    "41. The real meditation is how you live your life. - Jon Kabat-Zinn",
    "42. Life is available only in the present moment. - Thich Nhat Hanh",
    "43. The most precious gift we can offer anyone is our attention. - Thich Nhat Hanh",
    "44. The best way to capture moments is to pay attention. This is how we cultivate mindfulness. - Jon Kabat-Zinn",
    "45. Mindfulness is a way of befriending ourselves and our experience. - Jon Kabat-Zinn",
    "46. Awareness is the greatest agent for change. - Eckhart Tolle",
    "47. Mindfulness is the aware, balanced acceptance of the present experience. It isn't more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it. - Sylvia Boorstein",
    "48. In the beginner's mind there are many possibilities, but in the expert's mind there are few. - Shunryu Suzuki",
    "49. Mindfulness is simply being aware of what is happening right now without wishing it were different; enjoying the pleasant without holding on when it changes (which it will); being with the unpleasant without fearing it will always be this way (which it won't). - James Baraz",
    "50. Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. - Thich Nhat Hanh",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 MINDFULNESS QUOTES</h1>
      <div className="suc">
        <h1 className="s">MINDFULNESS</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Mindfulness is the practice of being fully present in the moment, aware of our thoughts and feelings without judgment. It allows us to experience life more deeply and with greater appreciation. Let these mindfulness quotes inspire you to live in the now and embrace the beauty of each moment.
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
