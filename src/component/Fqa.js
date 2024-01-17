import React, { useState } from 'react';

function Fqa() {
  const [faqItems, setFaqItems] = useState([
    {
      question: 'Can education flashcards be used for all age groups?',
      answer: 'Yes, education flashcards can be designed for various age groups, accommodating different learning needs and levels.',
    },
    {
      question: 'How do education flashcards work?',
      answer: 'Education flashcards typically present a question or concept on one side and its answer or explanation on the other side. They are used for active recall and spaced repetition, helping learners reinforce information and improve memory.',
    },
    {
      question: 'Can education flashcards be used for test preparation?',
      answer: 'Absolutely! Education flashcards are an excellent tool for test preparation. They allow learners to review and reinforce key concepts, test their knowledge, and identify areas that need further study.',
    },
    // Add more FAQ items as needed
  ]);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">FAQ</h1>

      {faqItems.map((item, index) => (
        <div key={index} className={`flex mb-6 max-w-screen-sm ${expandedIndex === index ? 'h-auto' : 'h-15'} overflow-hidden transition-height ease-in-out duration-300`}>
          <div className="w-full bg-gradient-to-r from-blue-800 to-blue-500 p-1 rounded-lg">
            <div className="h-full w-full bg-white">
              <div
                className="item1_fqa flex justify-between items-center p-4 border rounded-md cursor-pointer text-FAQ_color"
                onClick={() => toggleAnswer(index)}
              >
                <p className="text-FAQ_color font-bold">{item.question}</p>
                <img src="/images/Vector.png" alt="" />
              </div>

              {expandedIndex === index && (
                <div className="ans mt-4 p-4">
                  <p className="text-FAQ_color font-bold">{`Answer: ${item.answer}`}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fqa;
