import { useState } from "react"

interface CardWeaponProps {
    type: string;
}

const CardWeapon: React.FC<CardWeaponProps> = ({type}) => {
    const [showModal, setShowModal] = useState(false)

    const weaponTypeIcons: { [key: string]: string } = {
        greatsword: "./assets/weapons/greatsword-icon.png",
        longsword: "./assets/weapons/longsword-icon.png",
        swordandshield: "./assets/weapons/swordandshield-icon.png",
        dualblades: "./assets/weapons/dualblades-icon.png",
        hammer: "./assets/weapons/hammer-icon.png",
        huntinghorn: "./assets/weapons/huntinghorn-icon.png",
        lance: "./assets/weapons/lance-icon.png",
        gunlance: "./assets/weapons/gunlance-icon.png",
        switchaxe: "./assets/weapons/switchaxe-icon.png",
        chargeblade: "./assets/weapons/chargeblade-icon.png",
        insectglaive: "./assets/weapons/insectglaive-icon.png",
        lightbowgun: "./assets/weapons/lightbowgun-icon.png",
        heavybowgun: "./assets/weapons/heavybowgun-icon.png",
        bow: "./assets/weapons/bow-icon.png",
    }

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

  return (
    <div>
      <div
        className="card flex items-center gap-5 w-2xl p-4 bg-zinc-900 rounded-lg shadow-lg m-4 cursor-pointer"
        onClick={openModal}
      >
        <div className="icon-armor p-2 bg-gray-800 rounded-lg shadow-lg">
          <img src={weaponTypeIcons[type]} alt={type} className="icon" />
        </div>
        <div className="label-armor text-center text-xl font-bold text-zinc-100"></div>
        <div className="slot-card">ON PROGRESS</div>
      </div>

      {/* {showModal && (
        <ModalWeapon type={type} onClose={closeModal} />
      )} */}
    </div>
  )
}

export default CardWeapon