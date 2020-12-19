import React from 'react';
import useStorage from '../hooks/useStorage';
import { IProgressBar } from '../interface';

function ProgressBar({ file, setFile }: IProgressBar): JSX.Element {
  const { url, progress } = useStorage(file);

  React.useEffect(() => {
    if (url) setFile(null);
  }, [url, setFile]);
  return (
    <div
      className="progress-bar"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}

export default ProgressBar;
