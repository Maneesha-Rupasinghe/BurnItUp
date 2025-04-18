import BackgroundImage from '../assets/backgroundC.jpg'

const HeroSection = () => {
    return (
        <div className="flex items-center justify-start h-screen bg-cover  p-12" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="bg-orange-600 bg-opacity-30 text-white p-12 rounded-lg max-w-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <h1 className="text-5xl font-bold mb-4 text-white">Stay Fit with</h1>
                <h2 className="text-6xl font-extrabold mb-4 text-white">BurnItUp !!</h2>
                <p className="text-xl text-white">Unlock the power of your workouts!! Predict, Track</p>
            </div>
        </div>
    );
};

export default HeroSection;
