import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
          <p className="text-xl md:text-2xl mb-6">Web Developer & AI Enthusiast</p>
          <p className="text-lg mb-8">Crafting beautiful and intelligent web experiences</p>
          <a
            href="#contact"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Your Name"
            className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;