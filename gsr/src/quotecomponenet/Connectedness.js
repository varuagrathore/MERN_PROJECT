import React from 'react';


  const quotes = [
    {
      quote: "We are all connected, like leaves on a tree. We may branch out in different directions, but our roots remain as one.",
      author: "Unknown",
    },
    {
      quote: "In the tapestry of life, we are all interconnected. Each thread of our existence is woven into the fabric of humanity.",
      author: "Lailah Gifty Akita",
    },
    {
      quote: "The web of life is a beautiful and intricate dance of interconnectedness. Every living being is a part of this cosmic tapestry.",
      author: "Debasish Mridha",
    },
    {
      quote: "We are not separate from each other or the world we inhabit. Our fates are intertwined, and our actions ripple through the universe.",
      author: "Jack Kornfield",
    },
    {
      quote: "Through our connections, we find meaning in life. We are like stars in the sky, shining brighter together than alone.",
      author: "Unknown",
    },
    {
      quote: "The interconnectedness of all things is a reminder that we are not isolated beings, but part of a vast and intricate web of life.",
      author: "Joanna Macy",
    },
    {
      quote: "Like the branches of a tree, we reach out and connect with one another. Together, we create a beautiful canopy of life.",
      author: "Unknown",
    },
    {
      quote: "In the grand symphony of existence, each one of us plays a unique note. Together, we create a harmonious and interconnected melody.",
      author: "Amit Ray",
    },
    {
      quote: "We are like pieces of a puzzle, each one essential to complete the picture of humanity. Our connections form a beautiful mosaic of life.",
      author: "Unknown",
    },
    {
      quote: "Every act of kindness and compassion sends ripples of connection into the world, touching the lives of others in ways we may never know.",
      author: "Unknown",
    },
    {
      quote: "The bonds that connect us are woven with threads of love, understanding, and empathy. Together, we form an unbreakable tapestry.",
      author: "Unknown",
    },
    {
      quote: "In the vast ocean of existence, we are like drops of water, intimately connected and part of something much greater than ourselves.",
      author: "Unknown",
    },
    {
      quote: "Our interconnectedness is a reminder that we are never truly alone. We are united by our shared experiences, hopes, and dreams.",
      author: "Unknown",
    },
    {
      quote: "The threads of connection that bind us are stronger than any force that seeks to divide. Together, we can weave a world of unity and peace.",
      author: "Unknown",
    },
    {
      quote: "Just as a single candle can light up a dark room, a single act of compassion can illuminate the lives of others and create connection.",
      author: "Steve Maraboli",
    },
    {
      quote: "When we open our hearts to others, we allow the light of love and connection to flow freely, bringing warmth and healing to all.",
      author: "Unknown",
    },
    {
      quote: "Like the stars in the sky, we are interconnected and shine brightest when we come together to illuminate the world.",
      author: "Unknown",
    },
    {
      quote: "The fabric of society is woven with threads of connection. Each person contributes a unique pattern to the tapestry of humanity.",
      author: "Unknown",
    },
    {
      quote: "In the dance of life, we are all partners, moving together in harmony and creating a symphony of love and interconnectedness.",
      author: "Debasish Mridha",
    },
    {
      quote: "The roots of our existence are entwined with one another, drawing nourishment and strength from the same source of life.",
      author: "Unknown",
    },
    {
      quote: "Just as the flowers in a garden are connected by the soil they grow in, we are connected by the shared ground of our humanity.",
      author: "Unknown",
    },
    {
      quote: "Our interconnectedness is the essence of our humanity. It is a reminder that we are all in this journey of life together.",
      author: "Unknown",
    },
    {
      quote: "When we embrace our connectedness, we find a sense of belonging that transcends borders and unites us as citizens of the world.",
      author: "Unknown",
    },
    {
      quote: "The web of life connects all living beings, and each one has a vital role to play in the symphony of existence.",
      author: "Unknown",
    },
    {
      quote: "In the tapestry of life, every thread is important. Each of us has a unique contribution to make to the world.",
      author: "Unknown",
    },
    {
      quote: "The river of life flows through all of us, connecting us in its eternal journey toward the ocean of existence.",
      author: "Unknown",
    },
    {
      quote: "Our connections with others are like bridges that allow us to traverse the waters of life together.",
      author: "Unknown",
    },
    {
      quote: "In the vast expanse of the universe, we are all connected like stars in a constellation, each shining with its own light.",
      author: "Unknown",
    },
    {
      quote: "The beauty of connectedness is that it unites us with people and places far beyond our immediate surroundings.",
      author: "Unknown",
    },
    {
      quote: "We are all threads in the same tapestry, woven together to create a fabric of love, compassion, and understanding.",
      author: "Unknown",
    },
    {
      quote: "Our connections with others enrich our lives and bring depth and meaning to our existence.",
      author: "Unknown",
    },
    {
      quote: "The interconnectedness of all life is a reminder that our actions have consequences beyond what we can see.",
      author: "Unknown",
    },
    {
      quote: "When we recognize our interconnectedness, we see that the well-being of one is connected to the well-being of all.",
      author: "Unknown",
    },
    {
      quote: "Like the branches of a tree, we may grow in different directions, but our roots are firmly entwined, grounding us in unity.",
      author: "Unknown",
    },
    {
      quote: "The tapestry of life is made up of many threads, each representing a unique soul and a shared journey.",
      author: "Unknown",
    },
    {
      quote: "Our connections with others are a reflection of the deeper connections we have with ourselves and the universe.",
      author: "Unknown",
    },
    {
      quote: "In the interconnected web of life, no action is without impact. Every choice we make sends ripples through the fabric of existence.",
      author: "Unknown",
    },
    {
      quote: "We are like leaves on a tree, connected to the same source of life and nourished by the same roots.",
      author: "Unknown",
    },
    {
      quote: "Through our connections, we learn the profound truth that we are all more alike than different.",
      author: "Unknown",
    },
    {
      quote: "The essence of our connectedness is love. It is the thread that weaves us together and binds us as one human family.",
      author: "Unknown",
    },
    {
      quote: "Like the waves in the ocean, we are connected in our vast diversity, yet part of the same sea of consciousness.",
      author: "Unknown",
    },
    {
      quote: "Our interconnectedness is a reminder that every act of kindness and compassion has the power to create positive change.",
      author: "Unknown",
    },
    {
      quote: "The interconnectedness of all living beings is a testament to the underlying unity that exists in the universe.",
      author: "Unknown",
    },
    {
      quote: "In the symphony of life, each one of us plays a unique instrument, but together, we create a masterpiece of harmony.",
      author: "Unknown",
    },
    {
      quote: "Our connections with others are bridges that lead us to new perspectives, deeper understanding, and greater empathy.",
      author: "Unknown",
    },
    {
      quote: "The web of life connects us all, and in our connectedness, we find strength, resilience, and hope.",
      author: "Unknown",
    },
    {
      quote: "Through our connections, we come to see that we are not separate beings but integral parts of a greater whole.",
      author: "Unknown",
    },
    {
      quote: "In the dance of life, our interconnectedness is the rhythm that unites us all in a beautiful and ever-changing symphony.",
      author: "Unknown",
    },
    {
      quote: "Our connections with others are reflections of the connections we have with ourselves, nature, and the cosmos.",
      author: "Unknown",
    },
    {
      quote: "The river of life flows through each one of us, connecting us to the source of all creation.",
      author: "Unknown",
    },
    {
      quote: "In our connections with others, we find the courage and support to face life's challenges and embrace its joys.",
      author: "Unknown",
    },
    {
      quote: "The interconnectedness of all beings is a reminder that we are never alone and that our actions matter.",
      author: "Unknown",
    },
    {
      quote: "Like the stars in the sky, we are all connected, shining brightly in the vastness of the cosmos.",
      author: "Unknown",
    },
    {
      quote: "In the grand tapestry of existence, every thread is essential, and every being is a vital part of the whole.",
      author: "Unknown",
    },
    {
      quote: "Our connections with others are bridges that lead us to a deeper understanding of ourselves and the world.",
      author: "Unknown",
    },
    {
      quote: "The interconnectedness of all life is a reminder of the infinite possibilities that emerge when we work together.",
      author: "Unknown",
    },
    {
      quote: "We are all interconnected, like the pieces of a puzzle that fit together to create a beautiful and complete picture.",
      author: "Unknown",
    },
  ];

  export default function Connectedness() {
    return (
      <div className="inspire">
        <h1 className="insquote">50 CONNECTEDNESS QUOTES</h1>
        <div className="suc">
          <h1 className="s">CONNECTEDNESS</h1>
        </div>
        <ul className="quote-container">
          {quotes.map((quotes, index) => (
            <li key={index} className="quote-card">
              <span className="quote">
                {`${index + 1} "${quotes.quote}"`}
              </span>
              <span style={{ color: 'rgb(11, 130, 130)' }}>—{quotes.author}</span>
            </li>
          ))}
          {/* You can add an image here if needed */}
        </ul>
      </div>
    );
  }
