import { useEffect, useState } from 'react'
import './App.css'

interface ArmorPiece {
  id: number;
  name: string;
  type: string;
  rarity: number;
  defense: {
    base: number;
  };
}

function App() {
  const [armorPieces, setArmorPieces] = useState<ArmorPiece[]>([]);

  useEffect(() => {
    fetch('https://mhw-db.com/armor')
      .then(response => response.json())
      .then(data => setArmorPieces(data));
  }, []);

  return (
    <div className="app">
      {armorPieces.map(piece => (
        <div key={piece.id} className="card">
          <h2>{piece.name}</h2>
          <p>Type: {piece.type}</p>
          <p>Rarity: {piece.rarity}</p>
          <p>Defense: {piece.defense.base}</p>
        </div>
      ))}
    </div>
  );
}

export default App
