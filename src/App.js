import React from 'react';

import './App.scss';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div>
      <div className="row">
        <Main></Main>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default App;
