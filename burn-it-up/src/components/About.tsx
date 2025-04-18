import Image4 from '../assets/HIIT.jpg'; // Replace with an actual image for the company/team
import Image5 from '../assets/cardio.jpg'; // Replace with an actual image for the company/team
import Image6 from '../assets/cycling.jpg'; // Replace with an actual image for the company/team

const About = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
        About Us
      </h2>

      {/* Company Info Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-16">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-6">
          At BurnItUp, our mission is to empower individuals to take control of their fitness journey through
          innovative technology. We strive to provide intuitive and effective solutions for tracking calories,
          optimizing workouts, and achieving fitness goals. Our goal is to help everyone live a healthier, happier life.
        </p>

        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Our Values</h3>
        <ul className="text-lg text-gray-700 list-disc pl-6">
          <li>Integrity and Transparency in everything we do</li>
          <li>Continuous Innovation to help users improve their fitness journey</li>
          <li>Commitment to Customer Satisfaction</li>
          <li>Passion for Health and Fitness</li>
        </ul>
      </div>

      {/* Our Team Section */}
      <h3 className="text-2xl font-semibold text-center text-orange-600 mb-8">Meet Our Team</h3>
      <div className="flex justify-evenly gap-8">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/4">
          <img src={Image4} alt="Team Member 1" className="w-40 h-40 object-cover mb-4 rounded-full border-4 border-orange-400" />
          <h4 className="text-xl font-semibold text-orange-600 mb-2">Jane Doe</h4>
          <p className="text-gray-700">Founder & CEO</p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/4">
          <img src={Image5} alt="Team Member 2" className="w-40 h-40 object-cover mb-4 rounded-full border-4 border-orange-400" />
          <h4 className="text-xl font-semibold text-orange-600 mb-2">John Smith</h4>
          <p className="text-gray-700">Chief Technology Officer</p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-1/4">
          <img src={Image6} alt="Team Member 3" className="w-40 h-40 object-cover mb-4 rounded-full border-4 border-orange-400" />
          <h4 className="text-xl font-semibold text-orange-600 mb-2">Emily Johnson</h4>
          <p className="text-gray-700">Marketing Director</p>
        </div>
      </div>

      {/* Contact Us CTA */}
      <div className="text-center mt-16">
        <p className="text-xl text-gray-700 mb-6">
          We’d love to hear from you! If you have any questions, suggestions, or feedback, feel free to reach out.
        </p>
        <a
          href="/contact"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
