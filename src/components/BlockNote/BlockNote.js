// https://www.blocknotejs.org/docs/quickstart
// import { BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { useState } from 'react';
import './BlockNote.css';
import '@blocknote/core/style.css';
import ToggleSwitch from './ToggleSwitch';

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

const BlockNote = () => {
  // Creates a new editor instance.
  const editor = useBlockNote({});
  const [darkTheme, setDarkTheme] = useState('false');

  function handleThemeToggle() {
    console.log('theme');

    setDarkTheme((theme) => {
      console.log(theme);
      return theme === 'true' ? 'false' : 'true';
    });
  }
  return (
    <>
      <div className="blocknote-container">
        <header className="demo-header">
          <div className="demo-header__badge">Rich Text Editor</div>
          <h1 className="demo-header__title">BlockNote Editor</h1>
          <p className="demo-header__desc">Integrates the BlockNote rich-text editor library into React, showing third-party component integration and controlled theming.</p>
        </header>
        <div className="blocknote-header-flex-container">
          <div className="blocknote-header-flex-item-1">
            <h1>BlockNote</h1>
          </div>
          <div className="blocknote-header-flex-item-2">
            <h6>
              <a href="https://www.blocknotejs.org/docs" target="_blank" rel="noreferrer">
                BlockNote Documentation
              </a>
            </h6>
          </div>
          <div className="blocknote-header-flex-item-3">
            <div className="tooltip-hover">
              <ToggleSwitch
                currentValue={darkTheme}
                onToggleHandler={handleThemeToggle}
              />
            </div>
            <div className="tooltip">
              Dark Mode {darkTheme === 'false' ? 'OFF' : 'ON'}
            </div>
          </div>
        </div>
        {/* Renders the editor instance using a React component. */}
        <BlockNoteView
          editor={editor}
          theme={darkTheme === 'true' ? 'dark' : 'light'}
        />
      </div>
    </>
  );
};

export default BlockNote;
