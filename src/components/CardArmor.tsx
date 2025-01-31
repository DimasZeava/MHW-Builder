import { useState } from "react";
import ModalArmor from "./ModalArmor";

interface CardArmorProps {
  type: string;
}

const CardArmor: React.FC<CardArmorProps> = ({ type }) => {
  const [showModal, setShowModal] = useState(false);

  const armorTypeIcons: { [key: string]: string } = {
    head: "./assets/armor/head-icon.png",
    chest: "./assets/armor/chest-icon.png",
    arms: "./assets/armor/arms-icon.png",
    waist: "./assets/armor/waist-icon.png",
    legs: "./assets/armor/legs-icon.png",
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="card flex items-center gap-5 w-2xl p-4 bg-zinc-900 rounded-lg shadow-lg m-4" onClick={openModal}>
        <div className="icon-armor p-2 bg-gray-800 rounded-lg shadow-lg">
          <img src={armorTypeIcons[type]} alt={type} className="icon" />
        </div>
        <div className="label-armor text-center text-xl font-bold text-zinc-100">

        </div>
        <div className="slot-card"></div>
      </div>

      {showModal && (
        <div className="modal-overlay fixed inset-0 bg-black/80 flex justify-center items-center">
        <div className="modal-content w-3xl p-2 bg-zinc-900  rounded-2xl shadow-lg text-white">
          <h1 className="text-2xl font-bold">Select {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
          <button onClick={closeModal} className="close-modal text-lg">X</button>
          <ModalArmor />
        </div>
      </div>
      )}
    </div>
  );
};

export default CardArmor;
