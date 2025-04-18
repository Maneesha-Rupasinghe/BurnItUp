import Image4 from '../assets/Image2.jpg'
import Image5 from '../assets/Image3.jpg'
import Image6 from '../assets/Image4.jpg'

const SectionComponent1 = () => {
    return (
        <div className="flex justify-evenly gap-8 px-12 bg-gray-100 ">
            {/* Image 2 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/3 h-[500px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={Image4} alt="Image 2" className="w-full h-2/3 object-cover mb-4 rounded-2xl" />
                <h3 className="text-red-600 text-2xl font-bold mb-2">Find your Calory Counter</h3>
                <p className="text-gray-700 text-center">Find your Calory Counter, fix your lifestyle: Calory Counting, BMI, Heart</p>
            </div>

            {/* Image 3 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/3 h-[500px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={Image5} alt="Image 3" className="w-full h-2/3 object-cover mb-4 rounded-2xl" />
                <h3 className="text-red-600 text-2xl font-bold mb-2">Set Your Targets</h3>
                <p className="text-gray-700 text-center">Choose your desired weekly calorie burn rate and source of calories like fat, carbs, and proteins</p>
            </div>

            {/* Image 4 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/3 h-[500px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={Image6} alt="Image 4" className="w-full h-2/3 object-cover mb-4 rounded-2xl" />
                <h3 className="text-red-600 text-2xl font-bold mb-2">Reach Your Goals</h3>
                <p className="text-gray-700 text-center">Monitor your daily progress, check your calorie loss and receive ongoing advice and support</p>
            </div>
        </div>
    );
};

export default SectionComponent1;
