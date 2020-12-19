/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

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
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImage || undefined} alt="large pic" />
    </div>
  );
}

export default Modal;
