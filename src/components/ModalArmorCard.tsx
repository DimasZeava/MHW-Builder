import { ArmorPiece, ArmorSet } from "../interfaces/interfaces";

interface ModalArmorCardProps {
  armorPiece: ArmorPiece;
}

const armorTypeIcons: { [key: string]: string } = {
  head: "./assets/armor/head-icon.png",
  chest: "./assets/armor/chest-icon.png",
  gloves: "./assets/armor/arms-icon.png",
  waist: "./assets/armor/waist-icon.png",
  legs: "./assets/armor/legs-icon.png",
};

const slotArmorIcons: { [key: number]: string } = {
  1: "./assets/decorations/1-0.png",
  2: "./assets/decorations/2-0.png",
  3: "./assets/decorations/3-0.png",
  4: "./assets/decorations/4-0.png",
};

const rarityColors: { [key: number]: string } = {
  1: "#9b9b9b",
  2: "#ffffff",
  3: "#8cc94a",
  4: "#1eff00",
  5: "#00cadd",
  6: "#353cee",
  7: "#a335ee",
  8: "#ee8c35",
  9: "#ee3535",
  10: "#094df7",
  11: "#f5d404",
  12: "#DAF0F2",
};

const resistanceIcons: { [key: string]: string } = {
  fire: "./assets/elements/fire-icon.png",
  water: "./assets/elements/water-icon.png",
  thunder: "./assets/elements/thunder-icon.png",
  ice: "./assets/elements/ice-icon.png",
  dragon: "./assets/elements/dragon-icon.png",
};

const getRarityColor = (rarity: number): string => {
  return rarityColors[rarity] || "#000000";
};

const ModalArmorCard: React.FC<ModalArmorCardProps> = ({ armorPiece }) => {
  const slots = [...armorPiece.slots];
  while (slots.length < 3) {
    slots.push({ rank: 0 });
  }

  const imageMale =
    armorPiece.assets?.imageMale || armorTypeIcons[armorPiece.type];

  return (

    <div className="modal-card flex w-2xl h-auto p-4 bg-zinc-800 rounded-lg shadow-lg m-4 text-gray-100 ">
      <div className="images w-sm bg-zinc-700 rounded-lg mr-4 flex justify-center items-center ">
        <img src={imageMale} alt={armorPiece.name} />
      </div>

      <div className="info w-sm">
        <div className="label flex items-center mb-3 max-w-max">
          <div className="label-armor-type">
            <img
              src={armorTypeIcons[armorPiece.type]}
              alt="armor-type-icon"
              className="w-12"
            />
          </div>
          <h1 className="label-armor-name font-bold px-2 text-xl">
            {armorPiece.name}
          </h1>
      
        </div>
        <div
            className="rarity-armor p-1 rounded-lg border-2"
            style={{ color: getRarityColor(armorPiece.rarity) }}
          >
            Rarity {armorPiece.rarity}
          </div>
        <div className="slots flex justify-between items-center my-3">
          <h3 className="text-zinc-200">Slots </h3>
          <div className="slot-group grid grid-cols-3 gap-2.5">
            {slots.map((slot, index) => (
              <div
                key={index}
                className="slot flex justify-center items-center h-10"
              >
                {slot.rank > 0 ? (
                  <img
                    src={slotArmorIcons[slot.rank]}
                    alt={`Slot Rank ${slot.rank}`}
                  />
                ) : (
                  <div className="placeholder-slot">-</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="stat-section grid grid-cols-2 gap-2">
          <div className="defense flex items-center gap-2 p-2 bg-zinc-700 rounded-lg">
            <img
              src="./assets/defense-icon.png"
              alt="Defense icon"
              className="w-10 p-2 bg-zinc-800 rounded"
            />
            <div>
              {armorPiece.defense.base}
            </div>
          </div>
          {Object.entries(armorPiece.resistances).map(([resistance, value]) => (
            <div
              key={resistance}
              className="resistance flex items-center gap-2 p-2 bg-zinc-700 rounded-lg"
            >
              <img
                src={resistanceIcons[resistance]}
                alt={`${resistance} icon`}
                className="w-10 p-2 bg-zinc-800 rounded"
              />
              <div>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ModalArmorCard;
