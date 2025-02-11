import { useState } from "react";
import ModalArmor from "./modal/armor/ModalArmor";
import SlotCard from "./SlotCard";

interface CardArmorProps {
  type: string;
}

const CardArmor: React.FC<CardArmorProps> = ({ type }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedArmor, setSelectedArmor] = useState<{
    name: string;
    slots: number[];
  } | null>(null);

  const armorTypeIcons: { [key: string]: string } = {
    head: "./assets/armor/head-icon.png",
    chest: "./assets/armor/chest-icon.png",
    gloves: "./assets/armor/arms-icon.png",
    waist: "./assets/armor/waist-icon.png",
    legs: "./assets/armor/legs-icon.png",
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const resetArmor = () => setSelectedArmor(null);

  return (
    <div className="card flex gap-2 m-4 h-36">
      <div
        className="card-component flex items-center gap-5 w-2xl p-4 bg-zinc-900 rounded-lg shadow-lg cursor-pointer hover:bg-zinc-800 transition"
        onClick={openModal}
      >
        <div className="icon-armor p-2 bg-gray-800 rounded-lg shadow-lg">
          <img src={armorTypeIcons[type]} alt={type} className="icon" />
        </div>
        <div className="label-armor text-center text-xl font-bold text-zinc-100">
          {selectedArmor ? selectedArmor.name : ""}
        </div>
        <div>
          {selectedArmor && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetArmor();
              }}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
            >
              Reset Armor
            </button>
          )}
        </div>
      </div>
      <div className="slot-card flex-row">
        {selectedArmor &&
          selectedArmor.slots.map((slot, index) => (
            <SlotCard key={index} slot={slot} />
          ))}
      </div>

      {showModal && (
        <ModalArmor
          type={type}
          onClose={closeModal}
          setSelectedArmor={setSelectedArmor}
        />
      )}
    </div>
  );
};

export default CardArmor;
