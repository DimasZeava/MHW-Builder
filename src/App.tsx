import { useEffect, useState } from 'react'
import './App.css'
import CardArmor from './components/CardArmor';
import CardWeapon from './components/CardWeapon';

function App() {
  const armorTypes = ['head', 'chest', 'gloves', 'waist', 'legs'];

  return (
    <div className="app">
      <CardWeapon type={"greatsword"} />
      {armorTypes.map(type => (
        <CardArmor key={type} type={type} />
      ))}
    </div>
  );
}

export default App
