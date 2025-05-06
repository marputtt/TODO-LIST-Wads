import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Marsya Putra');
  const [studentId, setStudentId] = useState('2702367220');
  const [email, setEmail] = useState('Marsya.putra@binus.ac.id');

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-red-400">
      <div className="bg-white rounded-xl shadow-lg p-12 w-full max-w-3xl"> {/* 🔥 Increased width */}
        <div className="flex flex-col items-center">
         
          <img
            src="/IMG_0576.JPG"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md" /* 🔥 Increased size */
          />
          {isEditing ? (
            <>
            
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-4 text-xl font-semibold text-gray-800 border-b-2 border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="mt-2 text-gray-500 border-b-2 border-gray-300 focus:outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 text-gray-500 border-b-2 border-gray-300 focus:outline-none"
              />
              <button
                onClick={handleSave}
                className="mt-6 bg-gradient-to-r from-blue-500 to-red-400 text-white py-2 px-8 rounded-full shadow-md hover:from-blue-600 hover:to-red-500 transition duration-300"
              >
                Save
              </button>
            </>
          ) : (
            <>
              
              <h2 className="mt-4 text-3xl font-semibold text-gray-800">{name}</h2>
              <p className="text-gray-500 text-lg">Student ID: {studentId}</p>
              <p className="text-gray-500 text-lg">{email}</p>

              
              <button
                onClick={() => setIsEditing(true)}
                className="mt-6 bg-gradient-to-r from-blue-500 to-red-400 text-white py-2 px-8 rounded-full shadow-md hover:from-blue-600 hover:to-red-500 transition duration-300"
              >
                Edit Profile
              </button>
            </>
          )}

         
          <button
            onClick={() => window.location.href = '/Home'}
            className="mt-4 text-blue-500 hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
