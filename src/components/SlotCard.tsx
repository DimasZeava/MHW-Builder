interface SlotCardProps {
  slot: number;
}

const SlotCard: React.FC<SlotCardProps> = ({ slot }) => {
  return (
    <div className="slot-card flex items-center w-38 my-1 gap-2 p-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition cursor-pointer">
      <img
        src={`./assets/decorations/${slot}-0.png`}
        alt={`Slot ${slot}`}
        className="w-5 h-5"
      />
      <div>
        <h3>-</h3>
      </div>
    </div>
  );
};

export default SlotCard;
