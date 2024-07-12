import React from 'react';
import TransactionsTable from './components/TransactionsTable';
import "./App.css"

function App() {
  return (
    <div className="App">
      <initializeDatabase/>
      <div className='transactions'>
        
      <h1> Transactions Dashboard</h1>
      </div>
      
      <TransactionsTable />
      {/* <BarChart /> */}
      {/* <PieChart /> */}
    </div>
  );
}

export default App;
