import { useEffect, useState } from "react";
import "./DEFlashCard.css";
function NounCard({ noun }) {
  noun && console.log("NounCard [noun]:", noun);
  return (
    // https://www.material-tailwind.com/docs/html/card
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      {noun ? (
        <>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {noun?.article} {noun?.word}
            </h5>
            <table className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit text-blue-900">
              <tbody>
                <tr className="m-20">
                  <td>Plural: -</td>
                  <td>die {noun?.plural}</td>
                </tr>
                <tr className="m-20">
                  <td>English: - </td>
                  <td>{noun?.en}</td>
                </tr>
                <tr className="m-20">
                  <td>Category: -</td>
                  <td>{noun?.category}</td>
                </tr>
                <tr className="m-20">
                  <td>notes: </td>
                  <td>{noun?.notes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function NounCardContainer({ nouns }) {
  const [selectedNoun, setSelectedNoun] = useState(null);
  const [currentNounIndex, setCurrentNounIndex] = useState(() => {
    const tempItem = localStorage.getItem("currentNounIndex");
    return tempItem === "0" || tempItem === null ? 0 : tempItem;
  });

  function handleClick(base) {
    setSelectedNoun(base !== selectedNoun ? base : null);
  }
  function handlePrevious() {
    setCurrentNounIndex(function (index) {
      if (parseInt(index) === 0) {
        return parseInt(index);
      } else {
        return parseInt(index) - 1;
      }
    });
  }
  function handleNext() {
    setCurrentNounIndex(function (index) {
      if (parseInt(index) === nouns.length - 1) {
        return parseInt(index);
      } else {
        return parseInt(index) + 1;
      }
    });
  }
  useEffect(
    function () {
      const tempItem = localStorage.getItem("currentVerbIndex");
      if (tempItem === undefined || tempItem === null) {
        localStorage.setItem("currentNounIndex", 0);
      } else {
        localStorage.setItem("currentNounIndex", currentNounIndex);
      }
    },
    [currentNounIndex]
  );

  useEffect(function () {
    if (
      localStorage.getItem("currentNounIndex") === "undefined" ||
      localStorage.getItem("currentNounIndex") === "null"
    ) {
      localStorage.setItem("currentNounIndex", 0);
    } else {
      localStorage.setItem("currentNounIndex", currentNounIndex);
    }
  }, []);
  return (
    <div className="relative flex flex-row mt-6 text-blue-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-120 h-96">
      <>
        <button className="m-10 p-10" onClick={() => handlePrevious()}>
          <i className="fa-solid fa-arrow-left fa-2xl"></i>
        </button>
        {nouns && nouns?.length > 0 && (
          <NounCard
            noun={nouns[parseInt(currentNounIndex)]}
            onClick={() => handleClick(nouns[parseInt(currentNounIndex)])}
          />
        )}
        <button className="m-10 p-10" onClick={() => handleNext()}>
          <i className="fa-solid fa-arrow-right fa-2xl"></i>
        </button>
      </>
    </div>
  );
}
