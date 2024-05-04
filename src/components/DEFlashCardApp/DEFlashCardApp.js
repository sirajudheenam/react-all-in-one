import React, { useState, useEffect } from "react";
// import FlashCardList from "./FlashCardList";
import VerbCardContainer from "./VerbCardContainer";
import NounCardContainer from "./NounCardContainer";
import verbsData from "../../data/verbs.json";
import nounsData from "../../data/nouns.json";

console.log("FlashCardApp [nounsData]: ", nounsData);

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

const nounsDt = [
  {
    article: "die",
    word: "Tür",
    plural: "Türen",
    notes: "",
    category: "Klassenraum",
    en: "Door",
  },

  {
    article: "die",
    word: "Fenster",
    plural: "Fenster",
    notes: "",
    category: "Klassenraum",
    en: "Window",
  },
];

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
        <p> The verbs are not yet fetched</p>
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
        <p> The nouns are not yet fetched</p>
      )}
    </>
  );
}

export default function FlashCardApp() {
  const [nouns, setNouns] = useState([]);
  const [verbs, setVerbs] = useState([]);
  // const [currentCardTheme, setCurrentCardTheme] = useState(() => {
  //   const tempCardTheme = localStorage.getItem("currentCardTheme");
  //   if (tempCardTheme === undefined || tempCardTheme === null) {
  //     return "nouns";
  //   } else return tempCardTheme ? tempCardTheme : "nouns";
  // });
  function handleOptionChange(e) {
    // console.log("selected option is :" + e.target.value);
    localStorage.setItem("currentCardTheme :", e.target.value);
  }
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
    // const myVerbs = JSON.parse(JSON.stringify(verbsData.verbs));
    // setVerbs(myVerbs);

    // const myNouns = JSON.parse(JSON.stringify(nounsData.nouns));
    // setNouns(myNouns);

    // const nouns_ = JSON.parse(JSON.stringify(nounsDt.nouns));
    // setNouns(nouns_);
    // console.log("setNouns:", nouns_);

    const nouns_ = JSON.parse(JSON.stringify(nounsData.nouns));
    setNouns(nouns_);
    console.log("setNouns: [nouns_]", nouns_);
  }, []);

  // useEffect(
  //   function () {
  //     localStorage.setItem("currentCardTheme", currentCardTheme);
  //   },
  //   [currentCardTheme]
  // );

  return (
    <div className="FlashCardApp">
      <select className="" onChange={(e) => handleOptionChange(e)}>
        <option value="nouns">Nouns</option>
        {/* <option value="verbs">Verbs</option> */}
      </select>
      {/* {currentCardTheme === "nouns" && nouns && <Nouns verbs={nouns} />} */}
      {/* currentCardTheme === "verbs"  &&  verbs && <Verbs verbs={verbs} /> */}
      {/* {verbs && <Verbs verbs={verbs} />} */}
      {nouns && nouns.length > 0 && <Nouns nouns={nouns} />}
    </div>
  );
}
