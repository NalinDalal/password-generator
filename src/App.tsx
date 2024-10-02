// App.tsx or any other parent component

import React from 'react';
import PasswordGenerator from './PasswordGenerator';

const App: React.FC = () => {
  return (
    <div >
      <PasswordGenerator />
      {/* Add other components or functionality here */}
    </div>
  );
};

export default App;

