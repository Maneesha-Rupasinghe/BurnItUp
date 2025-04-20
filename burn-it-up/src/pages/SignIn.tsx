import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Image from '../assets/running.jpg';

const SignInPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (errorMsg) setErrorMsg('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            navigate('/');
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorMsg(error.message);
            } else {
                setErrorMsg('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-row items-stretch justify-center py-16 bg-gradient-to-r from-yellow-100 via-orange-300 to-orange-600 px-4 h-[100vh]">
            {/* Sign In Box */}
            <div className="bg-white px-8 py-2 shadow-lg w-full max-w-md flex-1 rounded-l-lg">
                <div className="flex items-center justify-center flex-col mb-2">
                    <img
                        src={Logo}
                        alt="logo"
                        className="h-[120px] w-auto min-w-[300px] drop-shadow-sm hover:drop-shadow-md transition-all duration-300 object-cover"
                    />
                </div>
                <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">Sign In</h2>

                {errorMsg && (
                    <div className="mb-4 text-red-600 text-center bg-red-100 p-3 rounded-md border border-red-300">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-orange-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-700 transition-all duration-300 w-full"
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-700">
                        Don&apos;t have an account?{' '}
                        <Link to="/signup" className="text-orange-600">Sign Up</Link>
                    </p>
                </div>
            </div>

       
            <div className="flex items-center justify-center w-full max-w-md h-full rounded-r-lg overflow-hidden">
                <img
                    src={Image}
                    alt="Sign In Image"
                    className="w-full h-full object-cover rounded-r-lg"
                />
            </div>
        </div>
    );
};

export default SignInPage;
