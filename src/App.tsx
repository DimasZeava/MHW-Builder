import { useEffect, useState } from 'react'
import './App.css'
import CardArmor from './components/CardArmor';
import ModalArmorCard from './components/ModalArmorCard';

function App() {
  const armorTypes = ['head', 'chest', 'arms', 'waist', 'legs'];

  return (
    <div className="app">
      {armorTypes.map(type => (
        <CardArmor key={type} type={type} />
      ))}
      <ModalArmorCard />
    </div>
  );
}

export default App
