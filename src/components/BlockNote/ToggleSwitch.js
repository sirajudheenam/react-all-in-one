import React from 'react';
import './ToggleSwitch.css';
const ToggleSwitch = ({ darkTheme, onToggleHandler }) => {
  return (
    <label class="switch">
      <input
        type="checkbox"
        onClick={onToggleHandler}
        defaultChecked={darkTheme === 'true' && true}
      />
      <span class="slider round"></span>
    </label>
  );
};
export default ToggleSwitch;
