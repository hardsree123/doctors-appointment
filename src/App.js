import React from 'react';
import DocCard from './component/DocCard';
import './App.css';
import Header from './component/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      {/* Doctor Cards */}
      <div className="app__cards">
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>
      </div>
    </div>
  );
}

export default App;
