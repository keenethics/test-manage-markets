import React from 'react';
import Table from './components/Table';
import './App.css';
import data from './fixtures/data';

const App = () => (
  <div className="App">
    <Table data={data} />
  </div>
);

export default App;
