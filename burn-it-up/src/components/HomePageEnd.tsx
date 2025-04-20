import { Link } from "react-router-dom";

const HomePageEndSection = () => {
    return (
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Start Your Journey to a Healthier You!</h2>
            <p className="text-lg mb-8">Join thousands of users who are achieving their fitness goals with BurnItUp. Track, predict, and optimize your workouts today!</p>


            <Link
                to="/calory"
                className="bg-orange-700 text-white text-xl py-3 px-8 rounded-lg shadow-md hover:bg-orange-800 transition duration-300"
            >
                Get Started Now
            </Link>


            <div className="mt-10">
                <p className="text-lg font-semibold">Already over 100,000 users have made their fitness journey easier with BurnItUp!</p>
                <p className="italic mt-4">"This app changed my life, it's amazing!" - Emali Charlotte</p>
            </div>
        </div>
    );
};

export default HomePageEndSection;
