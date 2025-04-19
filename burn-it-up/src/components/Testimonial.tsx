import { useState } from 'react';
import Image5 from "../assets/Image5.jpg";
import John from '../assets/john.jpg'
import Sophia from '../assets/sophia.jpg'

const UserFeedBack = () => {
  // State to track the current user feedback
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for users and their feedbacks
  const feedbacks = [
    {
      name: 'Emali Charlotte',
      feedback: `"LOST 71LBS (35%) AND MAINTAINED AFTER 492 DAYS. My Life is Changed. "`,
      image: Image5,
      feedback2: ' My Life is Beautiful.! Lets BURNITUP!!!'
    },
    {
      name: 'John Doe',
      feedback: `"LOST 29LBS AND MAINTAINED AFTER 379 DAYS."`,
      image: John,
      feedback2: ' I use this app religiously for one year and it made a huge different in my health and happiness!'
    },
    {
      name: 'Sophia Smith',
      feedback: `"LOST AND MAINTAINED 103LBS (40%) AFTER 616 DAYS. "`,
      image: Sophia,
      feedback2: 'BURNITUP help me know exactly how many calories I burned! '
    }
  ];

  const nextFeedback = () => {
    // Move to the next feedback
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const previousFeedback = () => {
    // Move to the previous feedback
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="flex w-full justify-center  bg-gray-100">
      <div className='flex px-12 pb-12 w-full'>
        <div className="text-center bg-white rounded-2xl shadow-xl w-full  flex items-center justify-between overflow-hidden">
          {/* Left Side - Image */}
          <div className="w-1/2 pr-8">
            <img
              src={feedbacks[currentIndex].image}
              alt="User"
              className="w-full h-auto object-cover "
            />
          </div>

          {/* Right Side - Feedback */}
          <div className="w-1/2">
            <p className="text-orange-600 text-4xl font-bold mb-4">
              {feedbacks[currentIndex].name}
            </p>

            <p className="text-3xl text-gray-700 italic mb-6">{feedbacks[currentIndex].feedback}</p>
            <p className="text-2xl text-gray-700 italic mb-6">{feedbacks[currentIndex].feedback2}</p>

            {/* Buttons to swap feedback */}
            <div className="flex justify-center gap-6">
              <button
                onClick={previousFeedback}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Previous Feedback
              </button>
              <button
                onClick={nextFeedback}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Next Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedBack;
