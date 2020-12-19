/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  selectedImage: string | null;
  setSelectedImage: (url: string | null) => void;
}

function Modal({ selectedImage, setSelectedImage }: Props): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains('backdrop'))
      setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <motion.img
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        src={selectedImage || undefined}
        alt="large pic"
      />
    </motion.div>
  );
}

export default Modal;
