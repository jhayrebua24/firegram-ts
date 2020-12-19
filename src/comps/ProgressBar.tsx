import React from 'react';
import { motion } from 'framer-motion';
import useStorage from '../hooks/useStorage';
import { IProgressBar } from '../interface';

function ProgressBar({ file, setFile }: IProgressBar): JSX.Element {
  const { url, progress } = useStorage(file);

  React.useEffect(() => {
    if (url) setFile(null);
  }, [url, setFile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
}

export default ProgressBar;
