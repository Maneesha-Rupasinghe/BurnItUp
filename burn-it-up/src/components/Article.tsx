import { Link } from 'react-router-dom';
import Image4 from '../assets/Image6.jpg';
import Image5 from '../assets/Image7.jpg';
import Image6 from '../assets/Image8.jpg';

const ArticleSection = () => {
    return (
        <div className="flex flex-col items-center py-16 bg-gray-100 shadow-2xl">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-orange-600 mb-2">
                Being Healthy Has Never Been Easier
            </h2>

            {/* Card Layout */}
            <div className="flex justify-evenly gap-8 p-12 bg-gray-100">
                {/* Image 6 */}
                <Link to="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256" className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/3 h-[500px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src={Image4} alt="Image 6" className="w-full h-2/3 object-cover mb-4 rounded-2xl" />
                    <h3 className="text-orange-600 text-2xl font-bold mb-2 text-center">How much water should you drink per day?</h3>
                    <p className="text-gray-700 text-center">Stay hydrated! The right amount of water can improve your overall health.</p>
                </Link>

                {/* Image 7 */}
                <Link to="https://www.gundersenhealth.org/health-wellness/eat-move/should-i-eat-back-my-exercise-calories" className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/3 h-[500px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src={Image5} alt="Image 7" className="w-full h-2/3 object-cover mb-4 rounded-2xl" />
                    <h3 className="text-orange-600 text-2xl font-bold mb-2 text-center">Should you eat back exercise Calories?</h3>
                    <p className="text-gray-700 text-center">Discover whether you should replenish the calories you burn during exercise.</p>
                </Link>

                {/* Image 8 */}
                <Link to="https://www.gundersenhealth.org/health-wellness/eat-move/should-i-eat-back-my-exercise-calories" className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/3 h-[500px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src={Image6} alt="Image 8" className="w-full h-2/3 object-cover mb-4 rounded-2xl" />
                    <h3 className="text-orange-600 text-2xl font-bold mb-2 text-center">Sleep and Weight: What's the connection?</h3>
                    <p className="text-gray-700 text-center">Sleep plays a vital role in weight management and overall health. Find out how.</p>
                </Link>
            </div>
        </div>
    );
};

export default ArticleSection;
