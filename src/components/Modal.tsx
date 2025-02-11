interface ModalProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({title, onClose, children}) => {
  return (
    <div className="modal-overlay fixed inset-0 bg-black/80 flex justify-center items-center">
      <div className="modal-content w-auto p-2 bg-zinc-900 rounded-2xl shadow-lg text-white max-h-screen">
        <div className="modal-header flex justify-between items-center p-2">
          <h1 className="text-2xl font-bold">
            {title}
          </h1>
          <button
            onClick={onClose}
            className="close-modal text-lg cursor-pointer hover:bg-zinc-800 transition"
          >
            X
          </button>
        </div>
        <div className="modal-body w-max max-h-[76vh] flex-col justify-center items-center text-gray-100 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal