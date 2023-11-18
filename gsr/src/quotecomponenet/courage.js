import React from 'react';
import './courage.css';
// import My from './photo/be-brave.jpg';

export default function Courage() {
  const quotes = [
    {
      text: "The conscience of every man recognizes courage as the foundation of manliness, and manliness as the perfection of human character.",
      author: "Thomas Hughes",
    },
    {
      text: "Without courage there cannot be truth, and without truth there can be no other virtue.",
      author: "Sir Walter Scott",
    },
    {
      text: "Courage charms us because it indicates that a man loves an idea better than all things in the world, that he is thinking neither of his bed, nor his dinner, nor his money, but will venture all to put in act the invisible thought of his mind.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "We have more respect for a man who robs boldly on the highway, than for a fellow who jumps out of a ditch, and knocks you down behind your back. Courage is a quality so necessary for maintaining virtue, that it is always respected even when it is associated with vice.",
      author: "Samuel Johnson",
    },
    {
      text: "Courage is not the absence of fear but rather the assessment that something else is more important than fear.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "You must always remember this: Have courage and be kind. You have more kindness in your little finger than most people possess in their whole body. And it has power. More than you know.",
      author: "Brittany Candau",
    },
    {
      text: "Courage starts with showing up and letting ourselves be seen.",
      author: "Brené Brown",
    },
    {
      text: "Courage is the most important of all the virtues because without courage you can’t practice any other virtue consistently. You can practice any virtue erratically, but nothing consistently without courage.",
      author: "Maya Angelou",
    },
    {
      text: "It takes courage to grow up and become who you really are.",
      author: "E.E. Cummings",
    },
    {
      text: "The secret to happiness is freedom … and the secret to freedom is courage.",
      author: "Thucydides",
    },
    {
      text: "Courage is being scared to death … and saddling up anyway.",
      author: "John Wayne",
    },
    {
      text: "You cannot swim for new horizons until you have the courage to lose sight of the shore.",
      author: "William Faulkner",
    },
    {
      text: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anaïs Nin",
    },
    {
      text: "Fortitude is the guard and support of the other virtues.",
      author: "John Locke",
    },
    {
      text: "Conscience is the root of all true courage; if a man would be brave let him obey his conscience.",
      author: "James Freeman Clarke",
    },
    {
      text: "The best hearts are ever the bravest.",
      author: "Laurence Sterne",
    },
    {
      text: "Courage is resistance to fear, mastery of fear — not absence of fear.",
      author: "Mark Twain",
    },
    {
      text: "The man who has never been in danger cannot answer for his courage.",
      author: "François de La Rochefoucauld",
    },
    {
      text: "Courage is grace under pressure.",
      author: "Ernest Hemingway",
    },
    {
      text: "The opposite of courage is not cowardice; it is conformity. Even a dead fish can go with the flow.",
      author: "Jim Hightower",
    },
    {
      text: "To see what is right and not do it is want of courage.",
      author: "Confucius",
    },
    {
      text: "Courage, dear heart.",
      author: "C.S. Lewis",
    },
    {
      text: "Courage is doing what you’re afraid to do. There can be no courage unless you’re scared.",
      author: "Eddie Rickenbacker",
    },
    {
      text: "All our dreams can come true if we have the courage to pursue them.",
      author: "Walt Disney",
    },
    {
      text: "Courage is being afraid but going on anyhow.",
      author: "Dan Rather",
    },
    {
      text: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin, but you begin anyway and see it through no matter what.",
      author: "Harper Lee",
    },
    {
      text: "Life is very interesting. In the end, some of your greatest pains become your greatest strengths.",
      author: "Drew Barrymore",
    },
    {
      text: "Without courage, wisdom bears no fruit.",
      author: "Baltasar Gracián",
    },
    {
      text: "Courage is found in unlikely places.",
      author: "J.R.R. Tolkien",
    },
    {
      text: "Take chances, make mistakes. That’s how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.",
      author: "Mary Tyler Moore",
    },
    {
      text: "Courage is the ladder on which all the other virtues mount.",
      author: "Clare Boothe Luce",
    },
    {
      text: "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.",
      author: "Steve Jobs",
    },
    {
      text: "To dare is to lose one’s footing momentarily. To not dare is to lose oneself.",
      author: "Søren Kierkegaard",
    },
    {
      text: "One isn’t necessarily born with courage, but one is born with potential. Without courage, we cannot practice any other virtue with consistency. We can’t be kind, true, merciful, generous, or honest.",
      author: "Maya Angelou",
    },
    {
      text: "The only real valuable thing is intuition.",
      author: "Albert Einstein",
    },
    {
      text: "The greatest test of courage on the earth is to bear defeat without losing heart.",
      author: "R.G. Ingersoll",
    },
    {
      text: "Have the courage to be disliked.",
      author: "Ichiro Kishimi",
    },
    {
      text: "What would life be if we had no courage to attempt anything?",
      author: "Vincent van Gogh",
    },
    {
      text: "It takes courage to grow up and become who you really are.",
      author: "E.E. Cummings",
    },
    {
      text: "Courage is knowing what not to fear.",
      author: "Plato",
    },
    {
      text: "Only those who will risk going too far can possibly find out how far one can go.",
      author: "T.S. Eliot",
    },
    {
      text: "It is curious that physical courage should be so common in the world and moral courage so rare.",
      author: "Mark Twain",
    },
    {
      text: "A great deal of talent is lost to the world for want of a little courage.",
      author: "Sydney Smith",
    },
    {
      text: "Courage is grace under pressure.",
      author: "Ernest Hemingway",
    },
    {
      text: "Sometimes, making the wrong choice is better than making no choice. You have the courage to go forward, that is rare. A person who stands at the fork, unable to pick, will never get anywhere.",
      author: "Terry Goodkind",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Our chief want in life is somebody who will make us do what we can.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Failure is unimportant. It takes courage to make a fool of yourself.",
      author: "Franklin P. Jones",
    },
    {
      text: "Bravery is being the only one who knows you’re afraid.",
      author: "Franklin P. Jones",
    },
    {
      text: "Physical bravery is an animal instinct; moral bravery is much higher and truer courage.",
      author: "Wendell Phillips",
    },
    {
      text: "It’s not the size of the dog in the fight; it’s the size of the fight in the dog.",
      author: "Mark Twain",
    },
  ];

  return (
    <div className="inspire">
      <h1 className="insquote">50 COURAGE QUOTES</h1>
      <div className="suc">
        <h1 className="s">COURAGE</h1>
      </div>
      <ul className="quote-container">
        {quotes.map((quote, index) => (
          <li key={index} className="quote-card">
            <span className="quote">
              {`${index + 1} "${quote.text}"`}
            </span>
            <span style={{ color: 'rgb(11, 130, 130)' }}>—{quote.author}</span>
          </li>
        ))}
        {/* <img className="Mimg" src={My} alt="" /> */}
      </ul>
    </div>
  );
}
