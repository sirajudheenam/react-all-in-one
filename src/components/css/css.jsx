import React, { useEffect } from 'react';
import Grid from './grid';
// eslint-disable-next-line no-unused-vars
import Canvas from './canvas';
import DrawingCanvas from './DrawingCanvas';

import styles from './css.module.css';

function CSS() {
  const [selected, setSelected] = React.useState(() => {
    if (localStorage.getItem('selected-css-item') !== 'undefined') {
      return localStorage.getItem('selected-css-item');
    } else {
      return 'grid';
    }
  });
  function handleModuleChange() {
    let e = document.getElementById('module');
    setSelected(e.value);
  }
  useEffect(() => {
    if (localStorage.getItem('selected-css-item') === 'undefined') {
      localStorage.setItem('selected-css-item', 'pizza');
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('selected-css-item', selected);
  }, [selected]);
  return (
    <>
      <div>
        <h1 className={styles.heading}>CSS Techniques</h1>
        <select
          name="module"
          id="module"
          onChange={handleModuleChange}
          value={selected}
        >
          <option value="-">Select</option>
          <option value="grid">Grid</option>
          <option value="canvas">Canvas</option>
        </select>
        <div className="component">
          {selected === 'grid' && <Grid className="container" />}
          {selected === 'canvas' && <DrawingCanvas className="container" />}
        </div>
      </div>
    </>
  );
}

export default CSS;
