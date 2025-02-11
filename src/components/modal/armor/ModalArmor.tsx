import { useEffect, useState } from "react";
import { ArmorPiece } from "../../../interfaces/interfaces";
import ModalArmorCard from "./ModalArmorCard";
import SearchBar from "../../SearchBar";
import Modal from "../../Modal";

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
    const filtered = armorPieces.filter(
      (armorPiece) =>
        armorPiece.name.toLowerCase().includes(query.toLowerCase()) ||
        armorPiece.skills.some((skill) =>
          skill.skillName.toLowerCase().includes(query.toLowerCase())
        )
    );
    setFilteredArmorPieces(filtered);
  };

  return (
    <Modal title={`Select ${type.charAt(0).toUpperCase() + type.slice(1)}`} onClose={onClose}>
        <SearchBar onSearch={handleSearch} />
          {filteredArmorPieces.map((armorPiece) => (
            <div
              className="cursor-pointer"
              key={armorPiece.id}
              onClick={() => handleSelectArmor(armorPiece)}
            >
              <ModalArmorCard armorPiece={armorPiece} />
            </div>
          ))}
    </Modal>
  );
};

export default ModalArmor;
