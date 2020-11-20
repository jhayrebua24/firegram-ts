import React from 'react';

const UploadForm: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<string>('');

  const types = ['image/png', 'image/jpeg'];

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = ((e.target.files as FileList) || null)[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <form>
      <input type="file" onChange={handleOnChange} />
    </form>
  );
};

export default UploadForm;
