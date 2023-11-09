import React, { useState } from 'react';
import './DEFlashCard.css';

const cards = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
];

export default function FlashCardList({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  function handleClick(base) {
    console.log('selectedItem');
    console.log(selectedItem);
    console.log('base');
    console.log(base);
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
                ? 'de-flashcard selected'
                : 'de-flashcard'
            }
          >
            <p>
              {card.de.base === selectedItem ? (
                <ul>
                  <li>
                    <h1> {card?.en}</h1>
                  </li>
                </ul>
              ) : (
                <>
                  <h1>{card?.de?.base}</h1>
                  <ul>
                    <li>Ich {card?.de?.ich}</li>
                    <li>Du {card?.de?.du}</li>
                    <li>Wir {card?.de?.wir}</li>
                    <li>Ihr {card?.de?.wir}</li>
                    <li>er/sie/es {card?.de?.es}</li>
                    <li>Sie/sie {card?.de?.Sie}</li>
                  </ul>
                </>
              )}
            </p>
          </div>
        ))}
    </div>
  );
}
