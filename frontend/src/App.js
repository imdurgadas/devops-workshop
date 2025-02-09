import React, { useState } from 'react';
import './App.css';

function App() {
  // Create a state variable to store the API response
  const [apiResponse, setApiResponse] = useState('');

  const callAPI = async () => {
    try {
      const response = await fetch('/api');
      const data = await response.text();
      // Update the state with the API response
      setApiResponse(data);
    } catch (error) {
      console.error('Error calling API:', error);
      setApiResponse('Error calling API');
    }
  };

  return (
    <div className="App">
      <button onClick={callAPI}>Call API</button>
      {/* Render the API response on the UI */}
      <div className="response">
        {apiResponse}
      </div>
    </div>
  );
}

export default App;
