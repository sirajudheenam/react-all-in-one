import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

// import Profile from '../Auth0ProviderApp/Profile';

// import Login from '../../Auth0ProviderApp/Login';
// import Logout from '../../Auth0ProviderApp/Logout';

import DragDrop from "../components/DragDrop/DragDrop";
import {
  About,
  aboutLoader,
  aboutAction,
} from "../components/BrandCosmetics/Corporate";

import {
  PrivacyPolicy,
  privacyLoader,
  privacyAction,
} from "../components/BrandCosmetics/Corporate";

import {
  TermsOfService,
  termsLoader,
  termsAction,
} from "../components/BrandCosmetics/Corporate";

import FetchAPI, {
  loader as fetchLoader,
  action as fetchAction,
} from "../components/API/FetchAPI";

import GitHubFetch, {
  loader as gitHubFetchLoader,
  action as gitHubFetchAction,
} from "../components/API/GitHubFetch";

import DogData, {
  loader as dogDataLoader,
  action as dogDataAction,
} from "../components/API/DogData";

import BlockNote, {
  loader as blockNoteLoader,
  action as blockNoteAction,
} from "../components/BlockNote/BlockNote";

import BlogCommentApp, {
  loader as blogLoader,
  action as blogAction,
} from "../components/blog/BlogCommentApp";

import ClockApp, {
  loader as clockLoader,
  action as clockAction,
} from "../components/clock/ClockApp";

import CSS from "../components/css/css";

import ClassComponentDemo, {
  loader as classComponentDemoLoader,
  action as classComponentDemoAction,
} from "../components/concepts/ClassComponentDemo";

import Concepts, {
  loader as conceptsDemoLoader,
  action as conceptsDemoAction,
} from "../components/concepts/Concepts";

import ConditionalRendering, {
  loader as conditionalRenderingLoader,
  action as conditionalRenderingAction,
} from "../components/concepts/ConditionalRendering";

import UseEffectDemo, {
  loader as useEffectDemoLoader,
  action as useEffectDemoAction,
} from "../components/concepts/UseEffectDemo";

import UseTransitionDemo, {
  loader as useTransitionDemoLoader,
  action as useTransitionDemoAction,
} from "../components/concepts/UseTransitionDemo";

import UseRefDemo, {
  loader as useRefDemoLoader,
  action as useRefDemoAction,
} from "../components/concepts/UseRefDemo";

import CountriesList, {
  loader as countriesListLoader,
  action as countriesListAction,
} from "../components/CountriesList/CountriesList";

import Accordion, {
  loader as accordionLoader,
  action as accordionAction,
} from "../components/course/Accordion/App-v1";

import Advice, {
  loader as adviceLoader,
  action as adviceAction,
} from "../components/course/Advice/Advice";

import CurrencyConverter, {
  loader as currencyConverterLoader,
  action as currencyConverterAction,
} from "../components/course/CurrencyConverter/CurrencyConverter";

import DateCountApp, {
  loader as dateCountAppLoader,
  action as dateCountAppAction,
} from "../components/course/DateCountApp/DateCountApp";

import EatAndSplit, {
  loader as eatAndSplitLoader,
  action as eatAndSplitAction,
} from "../components/course/EatAndSplit/EatAndSplit-v1";

import FlashCardApp, {
  loader as flashCardAppLoader,
  action as flashCardAppAction,
} from "../components/course/FlashCardApp/FlashCardApp";

import PizzaApp, {
  loader as pizzaAppLoader,
  action as pizzaAppAction,
} from "../components/course/PizzaApp/PizzaApp";

import ReactQuiz, {
  loader as reactQuizLoader,
  action as reactQuizAction,
} from "../components/course/ReactQuiz/ReactQuiz";

import ScoreCard, {
  loader as scoreCardLoader,
  action as scoreCardAction,
} from "../components/course/ScoreCard/ScoreCard";

import Steps, {
  loader as stepsLoader,
  action as stepsAction,
} from "../components/course/Steps/App-v1";

import TipNSplit, {
  loader as tipNSplitLoader,
  action as tipNSplitAction,
} from "../components/course/TipNSplit/TipNSplitv1";

import {
  TodoList,
  loader as todoListLoader,
  action as todoListAction,
} from "../components/course/TodoList/TodoList";

import TravelList, {
  loader as travelListLoader,
  action as travelListAction,
} from "../components/course/TravelList/TravelList";

import UseGeoLocation, {
  loader as useGeoLocationLoader,
  action as useGeoLocationAction,
} from "../components/course/UseGeoLocation/UseGeoLocation";

import UsePopcorn, {
  loader as usePopcornLoader,
  action as usePopcornAction,
} from "../components/course/UsePopcorn/App-v3";

import DEQuiz, {
  loader as dEQuizLoader,
  action as dEQuizAction,
} from "../components/DEQuiz/DEQuiz";

import DEFlashCardApp, {
  loader as dEFlashCardLoader,
  action as dEFlashCardAction,
} from "../components/DEFlashCardApp/DEFlashCardApp";

import BankAccount, {
  loader as bankAccountLoader,
  action as bankAccountAction,
} from "../components/course/BankAccount/BankAccount";

/* 
  // Context in Same file
  import AtomicPosts, {
    loader as atomicPostsLoader,
    action as atomicPostsAction,
  } from '../components/course/AtomicPosts/App';
*/

/* After refactoring Context in to its own file */
import AtomicPosts, {
  loader as atomicPostsLoader,
  action as atomicPostsAction,
} from "../components/course/AtomicPosts/v1/App-v1";

import Index from "./routes/index";
import ErrorPage from "./error-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />

        {/* <Route
          path="profile"
          element={<Profile />}
          errorElement={<ErrorPage />}
        ></Route>
        <Route
          path="login"
          element={<Login />}
          errorElement={<ErrorPage />}
        ></Route>
        <Route
          path="logout"
          element={<Logout />}
          errorElement={<ErrorPage />}
        ></Route> */}

        <Route
          path="about"
          element={<About />}
          loader={aboutLoader}
          action={aboutAction}
          errorElement={<ErrorPage />}
        ></Route>

        <Route
          path="privacy"
          element={<PrivacyPolicy />}
          loader={privacyLoader}
          action={privacyAction}
          errorElement={<ErrorPage />}
        ></Route>

        <Route
          path="terms"
          element={<TermsOfService />}
          loader={termsLoader}
          action={termsAction}
          errorElement={<ErrorPage />}
        ></Route>

        <Route
          path="atomic-posts"
          element={<AtomicPosts />}
          loader={atomicPostsLoader}
          action={atomicPostsAction}
        />
        <Route path="drag-and-drop" element={<DragDrop />} />

        <Route
          path="bank-account"
          element={<BankAccount />}
          loader={bankAccountLoader}
          action={bankAccountAction}
        />

        <Route path="css" element={<CSS />} />
        <Route
          path="de-flashcard"
          element={<DEFlashCardApp />}
          loader={dEFlashCardLoader}
          action={dEFlashCardAction}
        />

        <Route
          path="de-quiz"
          element={<DEQuiz />}
          loader={dEQuizLoader}
          action={dEQuizAction}
        />

        {/* api */}
        <Route
          path="fetch-api"
          element={<FetchAPI />}
          loader={fetchLoader}
          action={fetchAction}
        />
        <Route
          path="github-fetch"
          element={<GitHubFetch login="sirajudheenam" />}
          loader={gitHubFetchLoader}
          action={gitHubFetchAction}
        />
        <Route
          path="dog-data"
          element={<DogData />}
          loader={dogDataLoader}
          action={dogDataAction}
        />

        <Route
          path="blocknote"
          element={<BlockNote />}
          loader={blockNoteLoader}
          action={blockNoteAction}
        />
        <Route
          path="blog"
          element={<BlogCommentApp />}
          loader={blogLoader}
          action={blogAction}
        />

        <Route
          path="clock"
          element={<ClockApp />}
          loader={clockLoader}
          action={clockAction}
        />

        <Route
          path="class-component-demo"
          element={<ClassComponentDemo />}
          loader={classComponentDemoLoader}
          action={classComponentDemoAction}
        />
        <Route
          path="concepts"
          element={<Concepts />}
          loader={conceptsDemoLoader}
          action={conceptsDemoAction}
        />
        <Route
          path="conditional-rendering"
          element={<ConditionalRendering />}
          loader={conditionalRenderingLoader}
          action={conditionalRenderingAction}
        />

        <Route
          path="use-effect-demo"
          element={<UseEffectDemo />}
          loader={useEffectDemoLoader}
          action={useEffectDemoAction}
        />

        <Route
          path="use-transition-demo"
          element={<UseTransitionDemo />}
          loader={useTransitionDemoLoader}
          action={useTransitionDemoAction}
        />
        <Route
          path="use-ref-demo"
          element={<UseRefDemo />}
          loader={useRefDemoLoader}
          action={useRefDemoAction}
        />
        <Route
          path="countries-list"
          element={<CountriesList />}
          loader={countriesListLoader}
          action={countriesListAction}
        />
        {/* course */}
        <Route
          path="accordion"
          element={<Accordion />}
          loader={accordionLoader}
          action={accordionAction}
        />

        <Route
          path="advice"
          element={<Advice />}
          loader={adviceLoader}
          action={adviceAction}
        />
        <Route
          path="currency-converter"
          element={<CurrencyConverter />}
          loader={currencyConverterLoader}
          action={currencyConverterAction}
        />

        <Route
          path="date-count-app"
          element={<DateCountApp />}
          loader={dateCountAppLoader}
          action={dateCountAppAction}
        />
        <Route
          path="eat-n-split"
          element={<EatAndSplit />}
          loader={eatAndSplitLoader}
          action={eatAndSplitAction}
        />
        <Route
          path="flash-card-app"
          element={<FlashCardApp />}
          loader={flashCardAppLoader}
          action={flashCardAppAction}
        />
        {/* already done */}
        <Route
          path="pizza"
          element={<PizzaApp />}
          loader={pizzaAppLoader}
          action={pizzaAppAction}
        />
        <Route
          path="react-quiz"
          element={<ReactQuiz />}
          loader={reactQuizLoader}
          action={reactQuizAction}
        />
        <Route
          path="score-card"
          element={<ScoreCard />}
          loader={scoreCardLoader}
          action={scoreCardAction}
        />
        <Route
          path="steps"
          element={<Steps />}
          loader={stepsLoader}
          action={stepsAction}
        />
        <Route
          path="tip-n-split"
          element={<TipNSplit />}
          loader={tipNSplitLoader}
          action={tipNSplitAction}
        />
        <Route
          path="todo-list"
          element={<TodoList />}
          loader={todoListLoader}
          action={todoListAction}
        />
        <Route
          path="travel-list"
          element={<TravelList />}
          loader={travelListLoader}
          action={travelListAction}
        />
        <Route
          path="use-geo-location"
          element={<UseGeoLocation />}
          loader={useGeoLocationLoader}
          action={useGeoLocationAction}
        />
        <Route
          path="use-popcorn"
          element={<UsePopcorn />}
          loader={usePopcornLoader}
          action={usePopcornAction}
        />
      </Route>
    </Route>
  )
);

export const RoutedApp = function () {
  return <RouterProvider router={router} />;
};
