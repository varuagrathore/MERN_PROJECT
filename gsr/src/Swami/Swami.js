import React from 'react';
import IMAGE from './photo/swami.jpg';
import './Swami.css';

export default function Swami() {
  return (
    <div className='swami'>
      <h1 className='heading'>(SWAMI VIVEKANANDA)</h1>
      <div className='aukaat'>
        <p>
          Vivekananda in Chicago, September 1893. On the left note, Vivekananda wrote:
          "One infinite pure and holy – beyond thought beyond qualities I bow down to thee"
        </p>
      </div>
      <img className='swamiimg' src={IMAGE} alt="" />
      <p className='born'>(12 January 1863 - 4 July 1902)</p>
      <div>
        <p className='top'>Top Quotes by Swami Vivekananda</p>
        <ul className='quotes'>
          <li className='writing'>1. The weak have no place here, in this life or in any other life</li>
          <li className='writing'>2. To work, with undaunted energy! What fear! Who is powerful enough to thwart you!</li>
          <li className='writing'>3. As soon as a man or nation loses faith in himself, death comes</li>
          <li className='writing'>4. Please everyone without becoming a hypocrite or a coward</li>
          <li className='writing'>5. Time patience, and indomitable will show.</li>
          <li className='writing'>6. Infinite faith and strength are the only condition of success</li>
          <li className='writing'>7. Love is always the highest ideal</li>
          <li className='writing'>8. No one can get anything unless he earns it. This is an eternal law</li>
          <li className='writing'>9. Whatever exists has a reason; find that reason</li>
          <li className='writing'>10. Life is but a dream of death</li>
          {/* Add more quotes here */}
        </ul>
      </div>
      <div className='moreInfo'>
        <h2>More About Swami Vivekananda</h2>
        <p>
          Swami Vivekananda, born Narendranath Datta, was an Indian Hindu monk and a leading disciple of the 19th-century Indian mystic and saint, Sri Ramakrishna Paramahansa. He was born on January 12, 1863, in Kolkata, India.
        </p>
        <p>
          At a young age, Vivekananda showed great intellect and a questioning mind. He was deeply interested in spirituality and the nature of existence. His meeting with Sri Ramakrishna in 1881 marked a turning point in his life. Under the guidance of Ramakrishna, Vivekananda underwent intense spiritual practices and developed a profound understanding of Hindu philosophy, particularly Vedanta.
        </p>
        <p>
          After the passing of Sri Ramakrishna in 1886, Vivekananda embarked on a spiritual journey across India. He traveled extensively, experiencing the harsh realities of life and the plight of the common people. These experiences ignited a deep sense of compassion and a desire to uplift the downtrodden.
        </p>
        <p>
          In 1893, Swami Vivekananda represented India and Hinduism at the Parliament of the World's Religions in Chicago. His speech, starting with the iconic phrase "Sisters and brothers of America," received a standing ovation and brought him instant fame in the Western world. He eloquently spoke about the universality of religion and the importance of religious tolerance.
        </p>
        <p>
          Swami Vivekananda founded the Ramakrishna Math and Mission in 1897 to propagate the teachings of Sri Ramakrishna and promote social service, education, and spirituality. The Ramakrishna Mission continues to be a significant force in various humanitarian activities and spiritual education in India and abroad.
        </p>
        <p>
          Vivekananda's teachings emphasized the idea of oneness, unity of all religions, and the divinity within every individual. He believed that true religion was not about mere rituals but about realizing one's divine nature through selfless service and compassion for all living beings.
        </p>
        <p>
          On July 4, 1902, Swami Vivekananda attained Mahasamadhi, leaving behind a lasting legacy of spiritual wisdom, social reform, and a message of universal love and harmony.
        </p>
        <p>
          His life and teachings continue to inspire millions of people worldwide, and his birthday, January 12, is celebrated in India as National Youth Day in his honor.
        </p>
        {/* Add more information here */}
      </div>
    </div>
  );
}
