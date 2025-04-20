import React from 'react';
import Logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

interface NavBarProps {
    currentPage: 'Home' | 'Calory' | 'Contact' | 'About';
}

const BIUNavBar: React.FC<NavBarProps> = ({ currentPage }) => {
    const navigate = useNavigate();

    const navItems = [
        { id: 'home', label: 'Home', path: '/', active: currentPage === 'Home' },
        { id: 'calory', label: 'Calory Counter', path: '/calory', active: currentPage === 'Calory' },
        { id: 'contact', label: 'Contact Us', path: '/contact', active: currentPage === 'Contact' },
        { id: 'about', label: 'About Us', path: '/about', active: currentPage === 'About' },
    ];

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/signin');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <nav className="bg-gradient-to-r from-orange-50 to-white shadow-md border-b border-orange-100">
            <div className="max-w-8xl mx-auto px-8">
                <div className="flex justify-between items-center h-32">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-56 w-auto drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-12">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) => `
                                    inline-flex items-center px-3 py-2 text-xl font-medium transition-all duration-300 hover:scale-105 
                                    ${isActive
                                        ? 'text-orange-600 font-bold border-b-2 border-orange-500'
                                        : 'text-gray-600 hover:text-orange-500'}
                                `}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Logout Button */}
                    <div className="flex items-center">
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default BIUNavBar;
