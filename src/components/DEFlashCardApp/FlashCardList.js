import React, { useState } from "react";
import "./DEFlashCard.css";

export default function FlashCardList({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  function handleClick(base) {
    console.log("selectedItem", selectedItem);
    console.log("base", base);
    setSelectedItem(base !== selectedItem ? base : null);
  }

  return (
    <div className="de-flashcards">
      {items &&
        items.length > 0 &&
        items.map((card) => (
          <div
            key={card.de.base}
            onClick={() => handleClick(card.de.base)}
            className={
              card.de.base === selectedItem
                ? "de-flashcard selected"
                : "de-flashcard"
            }
          >
            <p>
              {card.de.base === selectedItem ? (
                <h1> {card?.en}</h1>
              ) : (
                <>
                  <h1>{card?.de?.base}</h1>
                  <table>
                    <tr>
                      <td>ich</td> <td>{card?.de?.ich}</td>
                    </tr>
                    <tr>
                      <td>du</td> <td>{card?.de?.du}</td>
                    </tr>
                    <tr>
                      <td>wir</td> <td>{card?.de?.wir}</td>
                    </tr>
                    <tr>
                      <td>er/sie/es</td> <td>{card?.de?.es}</td>
                    </tr>
                    <tr>
                      <td>ihr</td> <td>{card?.de?.ihr}</td>
                    </tr>
                    <tr>
                      <td>Sie (You) / sie (They) </td> <td>{card?.de?.Sie}</td>
                    </tr>
                  </table>
                </>
              )}
            </p>
          </div>
        ))}
    </div>
  );
}
