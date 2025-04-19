import { useState } from 'react';
import Image5 from "../assets/Image5.jpg";

const UserFeedBack = () => {
  // State to track the current user feedback
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for users and their feedbacks
  const feedbacks = [
    {
      name: 'Emali Charlotte',
      feedback: `"My life changed. My life is beautiful!!"`,
      image: Image5
    },
    {
      name: 'John Doe',
      feedback: `"BurnItUp has made my fitness journey so much easier. I love it!"`,
      image: Image5
    },
    {
      name: 'Sophia Smith',
      feedback: `"I can now track my calories effortlessly. This app is life-changing!"`,
      image: Image5
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

            {/* Buttons to swap feedback */}
            <div className="flex justify-center gap-6">
              <button
                onClick={previousFeedback}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Previous Feedback
              </button>
              <button
                onClick={nextFeedback}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1"
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
