import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [textSize, setTextSize] = useState('text-xl');

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/jokes?limit=1', {
        headers: { 'X-Api-Key': 'YOUR_API_KEY' }
      });
      setJoke(response.data[0].joke);
    } catch (error) {
      setJoke('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleTextSize = () => setTextSize(textSize === 'text-xl' ? 'text-3xl' : 'text-xl');

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="container p-6">
        <h1 className="text-center text-4xl mb-4">Dad Jokes Generator</h1>
        <div className="text-center">
          {loading ? (
            <div className="loading-animation">Loading...</div>
          ) : (
            <p className={`joke ${textSize} text-center`}>{joke}</p>
          )}
        </div>
        <div className="controls text-center">
          <button onClick={fetchJoke} className="btn btn-primary">Tell Me A Joke</button>
          <button onClick={toggleDarkMode} className="btn btn-toggle">Toggle Dark Mode</button>
          <button onClick={toggleTextSize} className="btn btn-toggle">Adjust Text Size</button>
        </div>
        <div className="share-buttons text-center mt-4">
          <button className="btn btn-share">Share on Facebook</button>
          <button className="btn btn-share">Share on Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default App;
