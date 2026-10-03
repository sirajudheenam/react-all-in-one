import React, { useState, useEffect } from "react";
// import FlashCardList from "./FlashCardList";
import VerbCardContainer from "./VerbCardContainer";
import NounCardContainer from "./NounCardContainer";
import verbsData from "./verbs.json";
import nounsData from "./nouns.json";

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}


// eslint-disable-next-line no-unused-vars
const handleSaveToPC = (jsonData) => {
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "filename.json";
  link.href = url;
  link.click();
};

function Verbs({ verbs }) {
  return (
    <>
      {verbs.length > 0 ? (
        <VerbCardContainer verbs={verbs} />
      ) : (
        <p> Verbs are being fetched </p>
      )}
    </>
  );
}
function Nouns({ nouns }) {
  console.log("Nouns() :", nouns);
  return (
    <>
      {nouns?.length > 0 ? (
        <NounCardContainer nouns={nouns} />
      ) : (
        <p> Nouns are being fetched</p>
      )}
    </>
  );
}

export default function FlashCardApp() {
  const [nouns, setNouns] = useState([]);
  const [verbs, setVerbs] = useState([]);
  const [currentCardTheme, setCurrentCardTheme] = useState(null);

  function handleOptionChange(e) {
    console.log("handleOptionChange() :", e.target.value);
    localStorage.setItem("currentCardTheme", e.target.value);
    setCurrentCardTheme(e.target.value);
  }
  useEffect(() => {

    if (nounsData && nounsData.nouns)
      console.log("nounsData.nouns LENGTH:", nounsData.nouns.length);
    setNouns(JSON.parse(JSON.stringify(nounsData.nouns)));
    if (verbsData && verbsData.verbs)
      console.log("verbsData.verbs LENGTH:", verbsData.verbs.length);
    setVerbs(JSON.parse(JSON.stringify(verbsData.verbs)));

    const tempCardTheme = localStorage.getItem("currentCardTheme");
    if (tempCardTheme === undefined || tempCardTheme === null) {
      console.log("currentCardTheme is not set, setting it to default value");
      setCurrentCardTheme("nouns");
      localStorage.setItem("currentCardTheme", "nouns");
    } else {
      console.log("currentCardTheme is set to :", tempCardTheme);
      setCurrentCardTheme(tempCardTheme);
      localStorage.setItem("currentCardTheme", tempCardTheme);
    }

  }, []);


  return (
    <div className="FlashCardApp">
      <select className="" onChange={(e) => handleOptionChange(e)} value={currentCardTheme}>
        <option value="nouns">Nouns</option>
        <option value="verbs">Verbs</option>
      </select>
      {currentCardTheme === "nouns" && nouns && <Nouns nouns={nouns} />}
      {currentCardTheme === "verbs" && verbs && <Verbs verbs={verbs} />}
      {/* {verbs && <Verbs verbs={verbs} />} */}
      {/* {nouns && nouns.length > 0 && <Nouns nouns={nouns} />} */}
    </div>
  );
}
