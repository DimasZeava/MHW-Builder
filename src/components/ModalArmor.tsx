interface ArmorPiece {
  id: number;
  name: string;
  type: string;
  rarity: number;
  defense: {
    base: number;
    max: number;
    augmented: number;
  };
  resistances: {
    fire: number;
    water: number;
    thunder: number;
    ice: number;
    dragon: number;
  };
  slots: { rank: number }[];
  skills: {
    id: number;
    slug: string;
    level: number;
    description: string;
    modifiers: [];
    skill: number;
    skillName: string;
  }[];
}

const ModalArmor = () => {
  
  return (
    <div>ModalArmor</div>
  )
}

export default ModalArmor