import React from 'react';

function sendVote() {
  fetch('/api/vote')
    .then(response => response.json())
    .then(json => alert(json.text));
}

function App() {
  return (
    <div className="App">
      <button onClick={sendRequest}>Vote</button>
    </div>
  );
}

export default App;