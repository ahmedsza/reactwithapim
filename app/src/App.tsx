import React from 'react';

function sendVote() {
  fetch('/api/vote')
    .then(response => response.json())
    .then(json => alert(json.text));
}

function sendVotePOST() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
};
  fetch('/api/votepost',requestOptions)
    .then(response => response.json())
    .then(json => alert(json.text));
}

function App() {
  return (
    <div className="App">
      <button onClick={sendVote}>Vote</button>
      <button onClick={sendVotePOST}>VotePOST</button>
    </div>
    
  );
}

export default App;