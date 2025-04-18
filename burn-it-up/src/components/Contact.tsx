import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">Contact Us</h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
                required
              />
            </div>
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
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h3>
          <p className="text-lg text-gray-700 mb-4">
            Have a question or feedback? Reach out to us, and we will get back to you as soon as possible.
          </p>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-800">Email</h4>
            <p className="text-lg text-gray-700">support@burnitup.com</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
            <p className="text-lg text-gray-700">(123) 456-7890</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-800">Address</h4>
            <p className="text-lg text-gray-700">123 Fitness St, BurnCity, FitLand</p>
          </div>
        </div>
      </div>

      {/* Optional: You could add a map or other details here */}
    </div>
  );
};

export default Contact;
