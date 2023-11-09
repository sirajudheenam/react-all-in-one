// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
// https://api.publicapis.org/entries
// https://rapidapi.com/hub
// https://github.com/public-api-lists/public-api-lists
// https://publicapis.io/

// https://dog.ceo/dog-api/documentation/

import React, { useState, useEffect } from 'react';
import {
  useLoaderData,
  // NavLink,
  // Form,
  // redirect,
  // useNavigation,
  // useSubmit,
  /* Link */
} from 'react-router-dom';

import './DogData.css';

export async function action() {
  return null;
}

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

const capitalizeFirstLetter = (string) =>
  string[0].toUpperCase() + string.slice(1);

function titleCaseString(string) {
  return string
    .split(' ')
    .map((str) => capitalizeFirstLetter(str))
    .join(' ');
}

export async function loader({ request }) {
  const url = 'https://dog.ceo/api/breeds/list/all';
  return await fetch(url)
    .then((response) => response.json())
    .then((results) => {
      return Object.keys(results.message);
    })
    .catch((err) => console.log(err));
}

export default function DogData() {
  const breeds = useLoaderData();
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breedImages, setBreedImages] = useState([]);

  function handleBreedChange(e) {
    setSelectedBreed(e.target.value);
    (async (breed) => {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      await response.json().then((results) => {
        setBreedImages(Object.values(results.message));
      });
    })(e.target.value);
  }

  return (
    <div className="dog-data">
      <h1 className="text-8xl font-bold uppercase">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
          Dog Data using{' '}
          <a href="https://dog.ceo/dog-api/documentation/" target="_blank">
            Dog API
          </a>
        </span>
      </h1>

      <div className="dogs">
        <h1 className="text-8xl font-bold uppercase">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
            Breeds
          </span>
        </h1>
        <select value={selectedBreed} onChange={handleBreedChange}>
          <option>Select a breed</option>
          {breeds &&
            breeds.length > 0 &&
            breeds.map((breed, index) => {
              return (
                <option key={index} value={breed}>
                  {capitalizeFirstLetter(breed)}
                </option>
              );
            })}
        </select>
        {selectedBreed && (
          <Dog selectedBreed={selectedBreed} breedImages={breedImages} />
        )}
      </div>
    </div>
  );
}

function Dog({ selectedBreed, breedImages }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handlePrevious() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((current) => {
        return current - 1;
      });
    }
  }
  function handleNext() {
    if (currentImageIndex < breedImages.length - 1) {
      setCurrentImageIndex((current) => {
        return current + 1;
      });
    }
  }
  useEffect(() => {}, [selectedBreed]);
  return (
    <>
      <div className="dogs">
        <h1 className="text-8xl font-bold uppercase">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
            {capitalizeFirstLetter(selectedBreed)}
          </span>
        </h1>
      </div>

      <div className="imageWrapper">
        <div className="previousButton">
          <input
            type="button"
            value="<<"
            onClick={handlePrevious}
            className="btn"
          />
        </div>
        <div className="ImageArea">
          {breedImages && breedImages.length > 0 && (
            <img src={breedImages[currentImageIndex]} alt={selectedBreed} />
          )}
        </div>
        <div className="nextButton">
          <input
            type="button"
            value=">>"
            onClick={handleNext}
            className="btn"
          />
        </div>
      </div>
    </>
  );
}
