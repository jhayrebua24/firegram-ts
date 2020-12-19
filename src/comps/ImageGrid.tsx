/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import useFireStore from '../hooks/useFirestore';
import { tDocument } from '../interface';

interface Props {
  setSelectedImage: (url: string) => void;
}

function ImageGrid({ setSelectedImage }: Props): JSX.Element {
  const { docs } = useFireStore('images');
  return (
    <div className="img-grid">
      {Array.isArray(docs) &&
        docs.map((doc: tDocument) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <img src={doc.url} alt="Pic" />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
