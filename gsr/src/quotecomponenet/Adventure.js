import React from 'react'
import './adventure.css'
// import Adv from './photo/Adventure-Travel-Business-e1437168928152.jpg';
// import Adv1 from './photo/7.+Hiking+&+Backpacking+Image+-+Couple+Hiking.jpg';
// import Adv2 from './photo/Adventure_Activities_Hero_Banner.jpg';
// import Adv3 from './photo/road-to-the-adventure-4k-0k-1366x768.jpg';
// import Adv4 from './photo/wp6848917.jpg'

const adventureQuotes = [
  {
    text: "1. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "2. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "3. Adventure is not outside man; it is within.",
    author: "George Eliot",
  },
  {
    text: "4. To live will be an awfully big adventure.",
    author: "J.M. Barrie",
  },
  {
    text: "5. Adventure may hurt you but monotony will kill you.",
    author: "Unknown",
  },
  {
    text: "6. Adventure is allowing the unexpected to happen to you.",
    author: "Richard Aldington",
  },
  {
    text: "7. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "8. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "9. Adventure is not outside man; it is within.",
    author: "George Eliot",
  },
  {
    text: "10. To live will be an awfully big adventure.",
    author: "J.M. Barrie",
  },
  {
    text: "11. Adventure may hurt you but monotony will kill you.",
    author: "Unknown",
  },
  {
    text: "12. Adventure is allowing the unexpected to happen to you.",
    author: "Richard Aldington",
  },
  {
    text: "13. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "14. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "15. Adventure is not outside man; it is within.",
    author: "George Eliot",
  },
  {
    text: "16. To live will be an awfully big adventure.",
    author: "J.M. Barrie",
  },
  {
    text: "17. Adventure may hurt you but monotony will kill you.",
    author: "Unknown",
  },
  {
    text: "18. Adventure is allowing the unexpected to happen to you.",
    author: "Richard Aldington",
  },
  {
    text: "19. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "20. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "21. Adventure is not outside man; it is within.",
    author: "George Eliot",
  },
  {
    text: "22. To live will be an awfully big adventure.",
    author: "J.M. Barrie",
  },
  {
    text: "23. Adventure may hurt you but monotony will kill you.",
    author: "Unknown",
  },
  {
    text: "24. Adventure is allowing the unexpected to happen to you.",
    author: "Richard Aldington",
  },
  {
    text: "25. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "26. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "27. Adventure is not outside man; it is within.",
    author: "George Eliot",
  },
  {
    text: "28. To live will be an awfully big adventure.",
    author: "J.M. Barrie",
  },
  {
    text: "29. Adventure may hurt you but monotony will kill you.",
    author: "Unknown",
  },
  {
    text: "30. Adventure is allowing the unexpected to happen to you.",
    author: "Richard Aldington",
  },
  {
    text: "31. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "32. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "33. Adventure is not outside man; it is within.",
    author: "George Eliot",
  },
  {
    text: "34. To live will be an awfully big adventure.",
    author: "J.M. Barrie",
  },
  {
    text: "35. Adventure may hurt you but monotony will kill you.",
    author: "Unknown",
  },
  {
    text: "36. Adventure is allowing the unexpected to happen to you.",
    author: "Richard Aldington",
  },
  {
    text: "37. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "38. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "39. Adventure is not outside man; it is within.",
    author: "George Eliot",
  },
  {
    text: "40. To live will be an awfully big adventure.",
    author: "J.M. Barrie",
  },
  {
    text: "41. Adventure may hurt you but monotony will kill you.",
    author: "Unknown",
  },
  {
    text: "42. Adventure is allowing the unexpected to happen to you.",
    author: "Richard Aldington",
  },
  {
    text: "43. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "44. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "45. Adventure is not outside man; it is within.",
    author: "George Eliot",
  },
  {
    text: "46. To live will be an awfully big adventure.",
    author: "J.M. Barrie",
  },
  {
    text: "47. Adventure may hurt you but monotony will kill you.",
    author: "Unknown",
  },
  {
    text: "48. Adventure is allowing the unexpected to happen to you.",
    author: "Richard Aldington",
  },
  {
    text: "49. Adventure is worthwhile in itself.",
    author: "Amelia Earhart",
  },
  {
    text: "50. The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
];


// const adventureImages = [
//   Adv,
//   Adv1,
//   Adv2,
//   Adv3,
//   Adv4,
// ];

export default function Adventure() {
  return (
    <div className="inspire">
      <h1 className="insquote">50 ADVENTURE QUOTES</h1>
      <div className="suc">
        <h1 className="s">ADVENTURE</h1>
      </div>
      <ul className="quote-container">
        {adventureQuotes.map((quote, index) => (
          <React.Fragment key={index}>
            <li className="quote-card">
              <span className="quote">
                {`${index + 1} "${quote.text}"`}
              </span>
              <span style={{ color: 'rgb(11, 130, 130)' }}>—{quote.author}</span>
            </li>
            {/* {(index + 1) % 10 === 0 && (
              <li className="quote-card">
                <img className="Mimg" src={adventureImages[(index + 1) / 5 - 1]} alt="Adventure" />
              </li>
            )} */}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}