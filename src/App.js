import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {

  const [search, setSearch] = useState('')
  
  console.log(search)
  return (
    <div className="container">
      <header className="header">
        <h1>Minecart Products</h1>
      </header>
      <input value={search} onChange={(e)=> {setSearch(e.target.value)}}  />
      <ProductList searchTerm={search} />
    </div>
  );
}

export default App;