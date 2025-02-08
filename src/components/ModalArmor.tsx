import { useEffect, useState } from "react";
import { ArmorPiece } from "../interfaces/interfaces";
import ModalArmorCard from "./ModalArmorCard";
import SearchBar from "./SearchBar";

interface ModalArmorProps {
  type: string;
  onClose: () => void;
  setSelectedArmor: (armor: { name: string; slots: number[] }) => void;
}

const ModalArmor: React.FC<ModalArmorProps> = ({
  type,
  onClose,
  setSelectedArmor,
}) => {
  const [armorPieces, setArmorPieces] = useState<ArmorPiece[]>([]);
  const [filteredArmorPieces, setFilteredArmorPieces] = useState<ArmorPiece[]>(
    []
  );

  useEffect(() => {
    const fetchArmor = async () => {
      const response = await fetch(
        `https://mhw-db.com/armor?q={"type":"${type}"}`
      );
      const data: ArmorPiece[] = await response.json();
      setArmorPieces(data);
      setFilteredArmorPieces(data);
    };

    fetchArmor();
  }, [type]);

  const handleSelectArmor = (armor: ArmorPiece) => {
    setSelectedArmor({
      name: armor.name,
      slots: armor.slots.map((slot) => slot.rank),
    });
    onClose();
  };

  const handleSearch = (query: string) => {
    const filtered = armorPieces.filter((armorPiece) =>
      armorPiece.name.toLowerCase().includes(query.toLowerCase()) ||
    armorPiece.skills.some(skill => skill.skillName.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredArmorPieces(filtered);
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black/80 flex justify-center items-center">
      <div className="modal-content w-auto p-2 bg-zinc-900 rounded-2xl shadow-lg text-white max-h-screen">
        <div className="modal-header flex justify-between items-center p-2">
          <h1 className="text-2xl font-bold">
            Select {type.charAt(0).toUpperCase() + type.slice(1)}
          </h1>
          <button
            onClick={onClose}
            className="close-modal text-lg cursor-pointer hover:bg-zinc-800 transition"
          >
            X
          </button>
        </div>
        <SearchBar onSearch={handleSearch} />
        <div className="modal-card w-max max-h-[76vh] flex-col justify-center items-center text-gray-100 overflow-y-auto">
          {filteredArmorPieces.map((armorPiece) => (
            <div
              className="cursor-pointer"
              key={armorPiece.id}
              onClick={() => handleSelectArmor(armorPiece)}
            >
              <ModalArmorCard armorPiece={armorPiece} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalArmor;
