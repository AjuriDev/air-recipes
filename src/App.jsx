import React from 'react';
import { useWindowResizer } from './assets/js/hooks';


function App() {
  useWindowResizer();

  return (
    <div>
      Air recipes
    </div>
  );
}

export default App;
