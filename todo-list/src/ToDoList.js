import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const navigate = useNavigate();

 
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };


  const toggleTaskStatus = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

 
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-300 to-blue-400 animate-slide-in">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">To-Do List</h2>
        
        
        <div className="flex mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-l p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <button
            className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition-transform transform hover:scale-105"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        
        <ul>
          {sortedTasks.map((t, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 mb-2 rounded cursor-pointer transition ${t.completed ? 'bg-gray-300 line-through' : 'bg-gray-100'}`}
              onClick={() => toggleTaskStatus(index)}
            >
              <span className={`flex-1 ${t.completed ? 'text-gray-500' : 'text-gray-800'}`}>
                {t.text}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent click event
                  deleteTask(index);
                }}
                className="text-red-500 hover:text-red-700 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        
        <button
          onClick={() => navigate('/Home')}
          className="mt-6 w-full bg-gray-200 text-gray-800 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
