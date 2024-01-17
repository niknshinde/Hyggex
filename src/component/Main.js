
import React, { useState } from 'react';

const Card = ({ question, answer }) => (
  <div className="card bg-gradient-to-br from-blue-900 to-blue-500  p-4 transition-all duration-500 ease-in-out text-center flex flex-col gap-10" style={{ width: '712px', height: '393.19px', borderRadius: '20px' }}>
    <div className="inner_flex flex p-2 justify-between items-center">
      <img src="/images/idea.png" alt="" />
      <img src="/images/sound.png" alt="" />

    </div>
    <div className="inner_div flex justify-end flex-col items-center mt-7">
    <h3 className="text-black text-lg font-bold mb-2">{question}</h3>
    <p className="text-black">{answer}</p>
    </div>
  </div>

);

function Main() {
  const [activeSection, setActiveSection] = useState('study');
  const [currentCard, setCurrentCard] = useState(0);

  // Placeholder data, replace with your actual card data
  const studyCards = [
    { question: 'Study Question 1', answer: 'Study Answer 1' },
    { question: 'Study Question 2', answer: 'Study Answer 2' },
  ];

  const quizCards = [
    { question: 'Quiz Question 1', answer: 'Quiz Answer 1' },
    { question: 'Quiz Question 2', answer: 'Quiz Answer 2' },
  ];

  const testCards = [
    { question: 'Test Question 1', answer: 'Test Answer 1' },
    { question: 'Test Question 2', answer: 'Test Answer 2' },
  ];

  const gameCards = [
    { question: 'Game Question 1', answer: 'Game Answer 1' },
    { question: 'Game Question 2', answer: 'Game Answer 2' },
  ];

  const otherCards = [
    { question: 'Other Question 1', answer: 'Other Answer 1' },
    { question: 'Other Question 2', answer: 'Other Answer 2' },
  ];

  const renderCards = () => {
    switch (activeSection) {
      case 'study':
        return studyCards;
      case 'quiz':
        return quizCards;
      case 'test':
        return testCards;
      case 'game':
        return gameCards;
      case 'others':
        return otherCards;
      default:
        return [];
    }
  };

  const totalCards = renderCards().length;

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + totalCards) % totalCards);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setCurrentCard(0);
  };

  return (
    <div>
      <div className="centering flex justify-center items-center mt-10">
        <div className="nav2 flex gap-20 items-center">
          <div className="item">
            <a href="#" onClick={() => handleSectionClick('study')} className={`text-lg ${activeSection === 'study' ? 'text-blue-800 underline' : 'text-black hover:text-blue-800 hover:underline'}`}>
              Study
            </a>
          </div>

          <div className="item">
            <a href="#" onClick={() => handleSectionClick('quiz')} className={`text-lg ${activeSection === 'quiz' ? 'text-blue-800 underline' : 'text-black hover:text-blue-800 hover:underline'}`}>
              Quiz
            </a>
          </div>

          <div className="item">
            <a href="#" onClick={() => handleSectionClick('test')} className={`text-lg ${activeSection === 'test' ? 'text-blue-800 underline' : 'text-black hover:text-blue-800 hover:underline'}`}>
              Test
            </a>
          </div>

          <div className="item">
            <a href="#" onClick={() => handleSectionClick('game')} className={`text-lg ${activeSection === 'game' ? 'text-blue-800 underline' : 'text-black hover:text-blue-800 hover:underline'}`}>
              Game
            </a>
          </div>

          <div className="item">
            <a href="#" onClick={() => handleSectionClick('others')} className={`text-lg ${activeSection === 'others' ? 'text-blue-800 underline' : 'text-black hover:text-blue-800 hover:underline'}`}>
              Others
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mb-8">
        <div className="slider mt-4 mb-4">
          {/* Display the current card */}
          {totalCards > 0 && <Card {...renderCards()[currentCard]} />}
        </div>

        <div className="flex items-center justify-between">
          {/* Forward and backward buttons */}
       <img  className='mr-10' src="/images/retry.png" alt="" />

          <button onClick={prevCard} className="px-4 py-2 text-white rounded-full mr-2">
            <img src="/images/Vector2.png" alt="" />
          </button>
          <div className="card-number text-black">
            {currentCard + 1}/{totalCards}
          </div>
          <button onClick={nextCard} className="px-4 py-2  text-white rounded-full ml-2">
          <img src="/images/Vector1.png" alt="" />
          </button>

          <img className='ml-10' src="/images/full.png" alt="" />
        </div>
      </div>

      <div className="extra flex items-center justify-between">
        <

div className="logo2">
          <img src="/images/logo2.png" alt="" />
        </div>

        <div className="create_button flex gap-2">
          <img src="/images/pluse.png" alt="" />
          <h2 className='bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-700 hover:to-blue-400 text-transparent bg-clip-text'>
            Create Flashcard
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
