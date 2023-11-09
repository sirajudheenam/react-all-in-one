import React, { useState, useEffect } from 'react';

import FlashCardList from './FlashCardList';

import verbsData from '../../data/verbs.json';
export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

const handleSaveToPC = (jsonData) => {
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'filename.json';
  link.href = url;
  link.click();
};

export default function FlashCardApp() {
  const [verbs, setVerbs] = useState([]);
  useEffect(() => {
    /* In order to make this work, we need to run json-server, for more info refer package.json file */
    /*
    async function fetchVerbs() {
      await fetch('http://localhost:9002/verbs')
        .then((res) => res.json())
        .then((data) => {
          setVerbs(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchVerbs();
    */
    const myVerbs = JSON.parse(JSON.stringify(verbsData.verbs));
    setVerbs(myVerbs);
  }, []);

  return (
    <div className="FlashCardApp">
      {verbs.length > 0 ? (
        <FlashCardList items={verbs} />
      ) : (
        <p> The verbs are not yet fetched</p>
      )}
    </div>
  );
}
