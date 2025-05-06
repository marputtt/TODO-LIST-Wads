import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  
  // Fetch todos when component mounts
  useEffect(() => {
    if (user) {
      fetchTodos();
    } else {
      navigate('/login');
    }
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`http://localhost:5001/todos/${user._id}`);
      setTasks(response.data);
    } catch (error) {
      setError('Failed to fetch todos. Please try again.');
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!task.trim() || !description.trim() || !dueDate) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setError('');
      const newTodo = {
        title: task,
        description,
        priority,
        dueDate,
        userId: user._id,
        status: 'pending'
      };

      const response = await axios.post('http://localhost:5001/todos', newTodo);
      setTasks([...tasks, response.data]);
      
      // Clear form
      setTask('');
      setDescription('');
      setPriority('medium');
      setDueDate('');
    } catch (error) {
      setError('Failed to add todo. Please try again.');
      console.error('Error adding todo:', error);
    }
  };

  const toggleTaskStatus = async (todoId, currentStatus) => {
    try {
      setError('');
      const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
      const response = await axios.put(`http://localhost:5001/todos/${todoId}`, {
        status: newStatus
      });
      
      setTasks(tasks.map(t => 
        t._id === todoId ? response.data : t
      ));
    } catch (error) {
      setError('Failed to update todo status. Please try again.');
      console.error('Error updating todo:', error);
    }
  };

  const deleteTask = async (todoId) => {
    try {
      setError('');
      await axios.delete(`http://localhost:5001/todos/${todoId}`);
      setTasks(tasks.filter(t => t._id !== todoId));
    } catch (error) {
      setError('Failed to delete todo. Please try again.');
      console.error('Error deleting todo:', error);
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.status === b.status) {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return a.status === 'completed' ? 1 : -1;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-300 to-blue-400">
        <div className="text-white text-xl">Loading todos...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-300 to-blue-400 animate-slide-in p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">To-Do List</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4 mb-6">
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task title..."
            required
          />
          <textarea
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description..."
            required
          />
          <div className="flex gap-4">
            <select
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <input
              type="date"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform transform hover:scale-105 w-full"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-2">
          {sortedTasks.map((t) => (
            <li
              key={t._id}
              className={`flex justify-between items-center p-4 rounded cursor-pointer transition ${
                t.status === 'completed' ? 'bg-gray-300' : 'bg-gray-100'
              }`}
              onClick={() => toggleTaskStatus(t._id, t.status)}
            >
              <div className="flex-1">
                <h3 className={`font-semibold ${t.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {t.title}
                </h3>
                <p className="text-sm text-gray-600">{t.description}</p>
                <div className="flex gap-2 mt-1">
                  <span className={`text-xs px-2 py-1 rounded ${
                    t.priority === 'high' ? 'bg-red-200' :
                    t.priority === 'medium' ? 'bg-yellow-200' :
                    'bg-green-200'
                  }`}>
                    {t.priority}
                  </span>
                  <span className="text-xs text-gray-500">
                    Due: {new Date(t.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(t._id);
                }}
                className="text-red-500 hover:text-red-700 transition ml-4"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate('/home')}
          className="mt-6 w-full bg-gray-200 text-gray-800 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
