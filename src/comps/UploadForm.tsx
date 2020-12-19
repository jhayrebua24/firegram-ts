import React from 'react';
import ProgressBar from './ProgressBar';

const UploadForm: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<string>('');

  const types = ['image/png', 'image/jpeg'];

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = ((e.target.files as FileList) || null)[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <form className="upload-form">
      <label htmlFor="file">
        +
        <input type="file" id="file" onChange={handleOnChange} />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
