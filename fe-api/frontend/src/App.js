import React from 'react';
import Graph from './components/Graph'
import Form from './components/Form'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="flex-row">
        <div className = "padding">
        <Form/>
        </div>
        <div className = "padding">
        <Graph/>
        </div>
      </div>
    </div>
  );
}

export default App;