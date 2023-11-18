import React from 'react';

export default function OvercomingAdversity() {
  const quotes = [
    "1. Adversity is the diamond dust Heaven polishes its jewels with. - Robert Leighton",
    "2. Difficulties in life are intended to make us better, not bitter. - Dan Reeves",
    "3. The greater the difficulty, the more glory in surmounting it. - Epicurus",
    "4. Adversity introduces a man to himself. - Albert Einstein",
    "5. Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says I'll try again tomorrow. - Mary Anne Radmacher",
    "6. In the middle of difficulty lies opportunity. - Albert Einstein",
    "7. The oak fought the wind and was broken, the willow bent when it must and survived. - Robert Jordan",
    "8. The gem cannot be polished without friction, nor man perfected without trials. - Chinese Proverb",
    "9. You may encounter many defeats, but you must not be defeated. - Maya Angelou",
    "10. A smooth sea never made a skilled sailor. - Franklin D. Roosevelt",
    "11. Sometimes adversity is what you need to face in order to become successful. - Zig Ziglar",
    "12. The brick walls are there for a reason. The brick walls are not there to keep us out. The brick walls are there to give us a chance to show how badly we want something. - Randy Pausch",
    "13. Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength. - Arnold Schwarzenegger",
    "14. The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "15. It doesn't matter how slow you go, as long as you don't stop. - Confucius",
    "16. The comeback is always stronger than the setback. - Unknown",
    "17. Don’t let the fear of the time it will take to accomplish something stand in the way of your doing it. The time will pass anyway; we might just as well put that passing time to the best possible use. - Earl Nightingale",
    "18. The harder the conflict, the more glorious the triumph. - Thomas Paine",
    "19. You are not the victim of the world, but rather the master of your own destiny. It is your choices and decisions that determine your destiny. - Roy T. Bennett",
    "20. Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit. - Napoleon Hill",
    "21. The pain you feel today is the strength you feel tomorrow. For every challenge encountered, there is an opportunity for growth. - Unknown",
    "22. What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "23. The best way to predict the future is to create it. - Peter Drucker",
    "24. When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. - Henry Ford",
    "25. You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "26. If you can find a path with no obstacles, it probably doesn't lead anywhere. - Frank A. Clark",
    "27. The moment we believe that success is determined by an ingrained level of ability as opposed to resilience and hard work, we will be brittle in the face of adversity. - Joshua Waitzkin",
    "28. Adversity is like a strong wind. It tears away from us all but the things that cannot be torn, so that we see ourselves as we really are. - Arthur Golden",
    "29. A problem is a chance for you to do your best. - Duke Ellington",
    "30. The flower that blooms in adversity is the rarest and most beautiful of all. - Walt Disney Company",
    "31. Tough times never last, but tough people do. - Robert H. Schuller",
    "32. Life's challenges are not supposed to paralyze you; they're supposed to help you discover who you are. - Bernice Johnson Reagon",
    "33. The only thing that overcomes hard luck is hard work. - Harry Golden",
    "34. Life is not always a matter of holding good cards, but sometimes, playing a poor hand well. - Jack London",
    "35. You may have to fight a battle more than once to win it. - Margaret Thatcher",
    "36. We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. - Barbara De Angelis",
    "37. Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. - Helen Keller",
    "38. What defines us is how well we rise after falling. - Lionel Messi",
    "39. It's not about perfect. It's about effort. And when you bring that effort every single day, that's where transformation happens. That's how change occurs. - Jillian Michaels",
    "40. Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "41. The moment we give up is the moment we let someone else win. - Kobe Bryant",
    "42. Success is not in what you have, but who you are. - Bo Bennett",
    "43. We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
    "44. If you are going through hell, keep going. - Winston Churchill",
    "45. Adversity causes some men to break; others to break records. - William Arthur Ward",
    "46. The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
    "47. When the going gets tough, the tough get going. - Joseph P. Kennedy",
    "48. I am thankful for all of those who said NO to me. It's because of them I'm doing it myself. - Albert Einstein",
    "49. The turning point in the process of growing up is when you discover the core of strength within you that survives all hurt. - Max Lerner",
    "50. If you can't fly, then run, if you can't run, then walk, if you can't walk, then crawl, but whatever you do, you have to keep moving forward. - Martin Luther King Jr.",
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 QUOTES ON OVERCOMING ADVERSITY</h1>
      <div className="suc">
        <h1 className="s">OVERCOMING ADVERSITY</h1>
      </div>
      <div className="succtext">
        <p className="mere">
          Adversity is an inevitable part of life, but it is not the adversity
          itself that defines us. What truly matters is how we respond to
          challenges and setbacks. These quotes on overcoming adversity will
          inspire you to stay resilient, face your struggles head-on, and come
          out stronger on the other side. Embrace the challenges, for they are
          the stepping stones to success and personal growth.
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
