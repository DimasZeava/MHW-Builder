import { useEffect, useState } from "react";

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
  armorSet: number;
  assets: {
    imageMale: string;
    imageFemale: string;
  };
}

interface ArmorSet {
    id: number;
    name: string;
    rank: string;
    pieces: ArmorPiece[];
    bonus: {
      id: number;
      name: string;
      ranks: {
        pieces: number;
        skill: {
          id: number;
          slug: string;
          level: number;
          description: string;
          skill: number;
          skillName: string;
        };
      }[];
    };
  }

const armorTypeIcons: { [key: string]: string } = {
  head: "./assets/armor/head-icon.png",
  chest: "./assets/armor/chest-icon.png",
  arms: "./assets/armor/arms-icon.png",
  waist: "./assets/armor/waist-icon.png",
  legs: "./assets/armor/legs-icon.png",
};

const slotArmorIcons: { [key: number]: string } = {
    1: "./assets/decorations/1-0.png",
    2: "./assets/decorations/2-0.png",
    3: "./assets/decorations/3-0.png",
    4: "./assets/decorations/4-0.png",
};

const ModalArmorCard = () => {
    const [armor, setArmor] = useState<ArmorPiece | null>(null);
    const [armorSet, setArmorSet] = useState<ArmorSet | null>(null);

    useEffect(() => {
        const fetchArmor = async () => {
          const response = await fetch('https://mhw-db.com/armor/1');
          const data: ArmorPiece = await response.json();
          setArmor(data);
        };
    
        const fetchArmorSet = async () => {
          const response = await fetch('https://mhw-db.com/armor/sets/1');
          const data: ArmorSet = await response.json();
          setArmorSet(data);
        };
    
        fetchArmor();
        fetchArmorSet();
      }, []);

      if (!armor || !armorSet) {
        return <div>Loading...</div>;
      }

  return (
    <div className="modal-card flex w-4xl p-4 bg-zinc-800 rounded-lg shadow-lg m-4">
      <div className="images">
        <img src={armor.assets.imageMale} alt={armor.name} />
      </div>
      <div className="info">
        <div className="label">
          <div className="label-armor-type">{armor.type}</div>
          <div className="label-armor-name">{armor.name}</div>
        </div>
        <div className="rarity-armor">Rarity: {armor.rarity}</div>
        <div className="stat-section">
            <div className="defense">
                <div className="img"></div>
                <div className="value">{armor.defense.base}</div>
            </div>
            <div className="slots">
            {armor.slots.map((slot, index) => (
              <div key={index} className="slot">
                <div className="img"></div>
                <div className="value">Rank: {slot.rank}</div>
              </div>
            ))}
            </div>
            <div className="fire-resistance">
                <div className="img"></div>
                <div className="value">{armor.resistances.fire}</div>
            </div>
            <div className="water-resistance">
                <div className="img"></div>
                <div className="value">{armor.resistances.water}</div>
            </div>
            <div className="thunder-resistance">
                <div className="img"></div>
                <div className="value">{armor.resistances.thunder}</div>
            </div>
            <div className="ice-resistance">
                <div className="img"></div>
                <div className="value">{armor.resistances.ice}</div>
            </div>
            <div className="dragon-resistance">
                <div className="img"></div>
                <div className="value">{armor.resistances.dragon}</div>
            </div>
        </div>
        <div className="skills-section">
            <div className="skill">
                <div className="name"></div>
                <div className="level"></div>
            </div>
        </div>
        <div className="armor-set">
            <div className="img"></div>
            <div className="name"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalArmorCard;
