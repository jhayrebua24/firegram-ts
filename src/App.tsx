import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App(): React.ReactNode {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>
  );
}

export default App;
