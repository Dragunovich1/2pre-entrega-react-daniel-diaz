import React, { useState } from 'react';
import NavBar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  const [selectedItem, setSelectedItem] = useState('Inicio');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <NavBar onItemClick={handleItemClick} />
      <MainContent selectedItem={selectedItem} />
      <Footer />
    </div>
  );
}

export default App;