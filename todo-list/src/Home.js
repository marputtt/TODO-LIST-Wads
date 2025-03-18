import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate('/'); // ✅ Redirect to login after sign out
    } catch (error) {
      console.error('Sign out error:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Boost Your Productivity with Our Todo List App
        </h1>
        <p className="text-gray-600 mb-8">
          Stay organized and on top of your tasks with our powerful todo list app. Manage your daily activities efficiently and never miss a deadline again.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => navigate('/profile')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Go to Profile
          </button>
          <button
            onClick={() => navigate('/todo')}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Go to To-Do List
          </button>
        </div>

        {/* ✅ Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Home;
