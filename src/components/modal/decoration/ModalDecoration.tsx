import { useEffect, useState } from 'react'
import { Decoration } from '../../../interfaces/interfaces'
import SearchBar from '../../SearchBar'
import Modal from '../../Modal'

interface ModalDecorationProps {
  type: number;
  onClose: () => void;
  setSelectedDecoration: (decoration: { name: string; slots: number }) => void;
}

const ModalDecoration : React.FC<ModalDecorationProps> = ({type, onClose, setSelectedDecoration}) => {
  const [decoration, setDecoration] = useState<Decoration[]>([]);
  const [filteredDecoration, setFilteredDecoration] = useState<Decoration[]>([]);

  useEffect(() => {
    const fetchDecoration = async () => {
      const response = await fetch(
        `https://mhe-db.com/decorations?q={"slot":${type}}`
      );
      const data: Decoration[] = await response.json();
      setDecoration(data);
      setFilteredDecoration(data);
    };

    fetchDecoration();
  }, [type]);

  const handleSelectDecoration = (decoration: Decoration) => {
    setSelectedDecoration({
      name: decoration.name,
      slots: decoration.slot,
    });
    onClose();
  };

  const handleSearch = (query: string) => {
    const filtered = decoration.filter(
      (decoration) =>
        decoration.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDecoration(filtered);
  };

  return (
    <div>ModalDecoration</div>
  )
}

export default ModalDecoration