/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="Pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
