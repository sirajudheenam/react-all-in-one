import { useEffect, useState } from "react";
import "./DEFlashCard.css";
function VerbCard({ verb }) {
  return (
    // https://www.material-tailwind.com/docs/html/card

    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      {verb ? (
        <>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {verb?.de?.base}
            </h5>
            <table className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit text-blue-900">
              <tbody>
                <tr className="m-20">
                  <td>ich</td>
                  <td>{verb?.de?.ich}</td>
                </tr>
                <tr>
                  <td>du</td>
                  <td>{verb?.de?.du}</td>
                </tr>
                <tr>
                  <td>wir</td>
                  <td>{verb?.de?.wir}</td>
                </tr>
                <tr>
                  <td>er/sie/es {" --   "}</td>
                  <td>{verb?.de?.es}</td>
                </tr>
                <tr>
                  <td>ihr</td>
                  <td>{verb?.de?.ihr}</td>
                </tr>
                <tr>
                  <td>Sie/sie</td> <td>{verb?.de?.Sie}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function VerbCardContainer({ verbs }) {
  const [selectedVerb, setSelectedVerb] = useState(null);
  const [currentVerbIndex, setCurrentVerbIndex] = useState(() => {
    const tempItem = localStorage.getItem("currentVerbIndex");
    console.log("tempItem", tempItem);
    return tempItem === "0" || tempItem === null ? 0 : tempItem;
  });

  console.log(
    "localStorage.getItem(currentVerbIndex)",
    localStorage.getItem("currentVerbIndex")
  );
  function handleClick(base) {
    setSelectedVerb(base !== selectedVerb ? base : null);
  }
  function handlePrevious() {
    setCurrentVerbIndex((index) => parseInt(index) - 1);
  }
  function handleNext() {
    setCurrentVerbIndex((index) => parseInt(index) + 1);
  }
  useEffect(
    function () {
      const tempItem = localStorage.getItem("currentVerbIndex");
      if (tempItem === undefined || tempItem === null) {
        localStorage.setItem("currentVerbIndex", 0);
      } else {
        localStorage.setItem("currentVerbIndex", currentVerbIndex);
      }
    },
    [currentVerbIndex]
  );

  useEffect(function () {
    if (
      localStorage.getItem("currentVerbIndex") === undefined ||
      localStorage.getItem("currentVerbIndex") === null
    ) {
      localStorage.setItem("currentVerbIndex", 0);
    } else {
      localStorage.setItem("currentVerbIndex", currentVerbIndex);
    }
  }, []);
  return (
    <div className="relative flex flex-row mt-6 text-blue-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-120 h-96">
      <>
        <button className="m-10 p-10" onClick={() => handlePrevious()}>
          <i className="fa-solid fa-arrow-left fa-2xl"></i>
        </button>
        {verbs && verbs.length > 0 && (
          <VerbCard
            verb={verbs[parseInt(currentVerbIndex)]}
            onClick={() => handleClick(verbs[parseInt(currentVerbIndex)])}
          />
        )}
        <button className="m-10 p-10" onClick={() => handleNext()}>
          <i className="fa-solid fa-arrow-right fa-2xl"></i>
        </button>
      </>
    </div>
  );
}
