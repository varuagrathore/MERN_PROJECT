import React from 'react';
import './about.css'
import IMAGE from './photo/about.jpg'

export default function About() {
  return (
    <div className='about'>
       <div className='border'>
        <img className='Aimg' src={IMAGE} alt=""/></div> 
        <p className='aboutText'>
            <ul className='ul'>
            <li className="welcome">
      Welcome to <span style={{ color: 'rgb(11, 130, 130)' }}>GSR QUOTE! </span>
      We are passionate about sharing words of wisdom,
      inspiration, and motivation through carefully curated quotes from notable individuals throughout history.
      Our goal is to provide you with a collection of thought-provoking, uplifting, and impactful quotes that can brighten your day,
      provide insights, and ignite your imagination.
    </li>

<li className='welcome'>At <span style={{ color: 'rgb(11, 130, 130)' }}>GSR QUOTE </span>, we believe that quotes have the power to inspire, inform, and transform lives.
     They encapsulate profound ideas,
      diverse perspectives, and timeless truths in concise and memorable phrases. 
      From famous authors, philosophers, leaders, and visionaries to lesser-known voices, 
      our collection spans a wide range of genres, topics, and eras, offering something for everyone.</li>

<li className='welcome' >We are committed to providing a 
    user-friendly and visually appealing platform
     where you can easily explore and discover quotes
      that resonate with you. Our team carefully curates
       each quote to ensure accuracy and authenticity, 
       and we strive to attribute quotes to their original 
       sources whenever possible.

Thank you for visiting <span style={{ color: 'rgb(11, 130, 130)' }}>GSR QUOTE </span>. We hope that our collection of quotes inspires you, sparks your creativity, and leaves a lasting impression. 
<li className='last'>Stay motivated, inspired, and empowered with us!"
Please feel free to customize and adapt this text to suit your specific website and audience.</li>
</li>
</ul>
        </p>
      
    </div>
  )
}
