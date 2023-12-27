import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from 'react-router-dom';

import { useEffect, useState } from 'react';

// import NavMenu from '../../components/NavMenu/NavMenu';
// import LoginButton from '../../Auth0ProviderApp/LoginButton';
// import LogoutButton from '../../Auth0ProviderApp/LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

const PublicLinkItems = function () {
  return (
    <>
      {/* <li>
        <NavLink to="profile">Profile</NavLink>
      </li> */}

      <li>
        <NavLink to="privacy">Privacy</NavLink>
      </li>

      <li>
        <NavLink to="terms">Terms</NavLink>
      </li>
    </>
  );
};

const PrivateLinkItems = function () {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="atomic-posts">AtomicPosts</NavLink>
      </li>
      <li>
        <NavLink to="bank-account">BankAccountApp</NavLink>
      </li>
      <li>
        <NavLink to="css">CSS</NavLink>
      </li>
      <li>
        <NavLink to="de-flashcard">DEFlashCard</NavLink>
      </li>
      <li>
        <NavLink to="de-quiz">Leben-in-Deutschland</NavLink>
      </li>
      <li>
        <NavLink to="accordion">Accordion</NavLink>
      </li>
      <li>
        <NavLink to="blocknote">BlockNote</NavLink>
      </li>
      <li>
        <NavLink to="blog">BlogComments</NavLink>
      </li>
      <li>
        <NavLink to="clock">ClockApp</NavLink>
      </li>
      <li>
        <NavLink to="class-component-demo">Class Component</NavLink>
      </li>
      <li>
        <NavLink to="concepts">Concepts</NavLink>
      </li>
      <li>
        <NavLink to="conditional-rendering">Conditional Rendering</NavLink>
      </li>
      <li>
        <NavLink to="use-effect-demo">useEffect Demo</NavLink>
      </li>
      <li>
        <NavLink to="use-transition-demo">useTransition Demo</NavLink>
      </li>

      <li>
        <NavLink to="dog-data">DogData</NavLink>
      </li>
      <li>
        <NavLink to="fetch-api">Fetch API</NavLink>
      </li>
      <li>
        <NavLink to="github-fetch">GitHub Fetch</NavLink>
      </li>
      <li>
        <NavLink to="pizza">Pizza</NavLink>
      </li>
      <li>
        <NavLink to="countries-list">CountriesList</NavLink>
      </li>
      <li>
        <NavLink to="advice">Advice</NavLink>
      </li>
      <li>
        <NavLink to="date-count-app">DateCountApp</NavLink>
      </li>
      <li>
        <NavLink to="currency-converter">CurrencyConverter</NavLink>
      </li>
      <li>
        <NavLink to="eat-n-split">EatNSplit</NavLink>
      </li>
      <li>
        <NavLink to="flash-card-app">FlashCardApp</NavLink>
      </li>
      <li>
        <NavLink to="react-quiz">ReactQuiz</NavLink>
      </li>
      <li>
        <NavLink to="score-card">ScoreCard</NavLink>
      </li>
      <li>
        <NavLink to="steps">Steps</NavLink>
      </li>
      {/* TODO: */}
      {/* <li>
        <NavLink to="todo-list">TodoList</NavLink>
      </li> */}
      <li>
        <NavLink to="tip-n-split">TipNSplit</NavLink>
      </li>
      <li>
        <NavLink to="travel-list">TravelList</NavLink>
      </li>
      <li>
        <NavLink to="use-geo-location">UseGeoLocation</NavLink>
      </li>
      <li>
        <NavLink to="use-popcorn">UsePopcorn</NavLink>
      </li>
    </>
  );
};

export default function Root() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log('user:', user);
  console.log('isAuthenticated:', isAuthenticated);
  console.log('isLoading:', isLoading);
  return (
    <>
      <div id="sidebar">
        <h1>React All-in-One</h1>
        <nav>
          <ul>
            <PrivateLinkItems />
            <PublicLinkItems />
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
