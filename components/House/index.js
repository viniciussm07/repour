import React from 'react';
import { FaBook, FaLaptop, FaUsers } from 'react-icons/fa';

const House = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Benefits of Living in the Student Republic</h1>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex flex-col items-center">
          <FaBook className="text-5xl text-blue-500" />
          <p className="text-lg mt-2">Access to top-notch education</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLaptop className="text-5xl text-green-500" />
          <p className="text-lg mt-2">Cutting-edge technology and resources</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers className="text-5xl text-purple-500" />
          <p className="text-lg mt-2">Vibrant community and networking opportunities</p>
        </div>
      </div>
    </div>
  );
};

export default House;
