import React from 'react';
import './Components.css';
import Counter from './counter/counter.jsx';
import Timer from './timer/timer.jsx';
import AddVariable from './variable/add-variable.jsx';
import Temperatures from './temperatures/temperatures.jsx';

function Components() { 
  return (
    <div className='components-container'> 
      <h1 className='name'>React Components</h1>
      <div className='app-container'>
        <div className='content'>
          <div className='item1'>
            <Counter value={0} />
            <Timer />
          </div>
          <div className='item2'>
            <AddVariable />
          </div>
          <div className='item3'>
            <Temperatures />
          </div>
        </div>
        <div className='name'><h2>นายณัฐภัทร มารวย 66053976</h2></div>
      </div>
    </div>
  );
}

export default Components;