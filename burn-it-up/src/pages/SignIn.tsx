import { useState } from 'react';

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex justify-center py-16 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Sign In</h2>
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
                        className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300 w-full"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-700">Don't have an account? <a href="/signup" className="text-orange-600">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
