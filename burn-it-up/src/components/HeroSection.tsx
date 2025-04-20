import { Link } from 'react-router-dom';  
import BackgroundImage from '../assets/backgroundC.jpg'

const HeroSection = () => {
    return (
        <div className="flex items-center justify-start h-screen bg-cover p-12" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            {/* Main container div with flex-col layout */}
            <div className="flex flex-col items-center gap-6">
                {/* Orange content box */}
                <div className="bg-orange-600 bg-opacity-30 text-white p-8 rounded-lg max-w-md transform transition-transform duration-300 hover:scale-105 cursor-none">
                    <h1 className="text-4xl font-bold mb-4 text-white">Stay Fit with</h1>
                    <h2 className="text-5xl font-extrabold mb-4 text-white">BurnItUp !!</h2>
                    <p className="text-lg text-white">Unlock the power of your workouts!! Predict, Track and burn calories smarter with every move you are make.</p>
                </div>

                {/* Start Now Button */}
                <Link
                    to="/calory"
                    className="bg-white text-orange-600 text-2xl py-5 px-8 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition duration-300 mt-16"
                >
                    Start Now
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
