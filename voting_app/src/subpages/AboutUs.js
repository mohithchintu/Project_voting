import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import bomb from '../assets/bomb.jpg';
import kou from '../assets/kou.jpg';
import chintu from '../assets/chintu.jpg';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Kousik",
      role: "160121749301",
      image: kou,
      description: "Kousik has been developing web applications for over 10 years. He is passionate about online security and democracy."
    },
    {
      name: "Owais",
      role: "160121749051",
      image: bomb,
      description: "Owais specializes in creating user-friendly interfaces. He believes in intuitive design and its power to make the web accessible to everyone."
    },
    {
      name: "Mohith",
      role: "160121749042",
      image: chintu,
      description: "With a strong background in server-side development, Mohith ensures our website runs smoothly and securely."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-8 bg-gray-100">
        <h1 className="text-center text-3xl font-bold mb-6 text-gray-900">About Us</h1>

        <p className="text-blue-900 mb-8">
          Welcome to our online voting platform, built on the foundation of Aadhaar's robust identity system. Our goal is to ensure a seamless, transparent, and secure voting process for every citizen, leveraging the widespread adoption of Aadhaar. With state-of-the-art encryption and authentication measures, we believe in the power of technology to reshape the democratic process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img className="rounded-full w-40 h-40 mx-auto mb-4" src={member.image} alt={member.name} /> {/* Increased image size */}
              <h2 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h2>  {/* Updated text color to dark gray */}
              <h3 className="text-gray-500 mb-4">{member.role}</h3>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
