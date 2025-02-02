import { useEffect, useState } from 'react'
import './App.css'
import CardArmor from './components/CardArmor';
import ModalArmor from './components/ModalArmor';

function App() {
  const armorTypes = ['head', 'chest', 'arms', 'waist', 'legs'];

  return (
    <div className="app">
      {armorTypes.map(type => (
        <CardArmor key={type} type={type} />
      ))}
    </div>
  );
}

export default App
