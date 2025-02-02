export interface ArmorPiece {
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
  };
}

export interface ArmorSet {
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