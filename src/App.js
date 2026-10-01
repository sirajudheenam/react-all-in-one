import React, { Suspense, lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';

const Loading = () => <p style={{ padding: '2rem' }}>Loading…</p>;
const wrap = (el) => <Suspense fallback={<Loading />}>{el}</Suspense>;

// API & Data
const DogData = lazy(() => import('./components/API/DogData'));
const GitHubFetch = lazy(() => import('./components/API/GitHubFetch'));
const FetchAPI = lazy(() => import('./components/API/FetchAPI'));

// Core Concepts
const Vehicle = lazy(() => import('./components/concepts/ClassComponentDemo'));
const Concepts = lazy(() => import('./components/concepts/Concepts'));
const ConditionalRendering = lazy(() => import('./components/concepts/ConditionalRendering'));
const UseEffectDemo = lazy(() => import('./components/concepts/UseEffectDemo'));
const UseTransitionDemo = lazy(() => import('./components/concepts/UseTransitionDemo'));

// Course projects
const Accordion = lazy(() => import('./components/course/Accordion/App'));
const EatAndSplit = lazy(() => import('./components/course/EatAndSplit/EatAndSplit-v1'));
const ReactQuiz = lazy(() => import('./components/course/ReactQuiz/ReactQuiz'));
const Steps = lazy(() => import('./components/course/Steps/App-v1'));
const TravelList = lazy(() => import('./components/course/TravelList/App'));
const UsePopcorn = lazy(() => import('./components/course/UsePopcorn/App-v3'));
const Advice = lazy(() => import('./components/course/Advice/Advice'));
const CurrencyConverter = lazy(() => import('./components/course/CurrencyConverter/CurrencyConverter'));
const DateCountApp = lazy(() => import('./components/course/DateCountApp/DateCountApp'));
const FlashCardApp = lazy(() => import('./components/course/FlashCardApp/FlashCardApp'));
const PizzaApp = lazy(() => import('./components/course/PizzaApp/PizzaApp'));
const ScoreCard = lazy(() => import('./components/course/ScoreCard/ScoreCard'));
const TipNSplit = lazy(() => import('./components/course/TipNSplit/TipNSplitv1'));
const UseGeoLocation = lazy(() => import('./components/course/UseGeoLocation/UseGeoLocation'));
const BankAccount = lazy(() => import('./components/course/BankAccount/BankAccount'));

// Other components
const CountriesList = lazy(() => import('./components/CountriesList/CountriesList'));
const BlockNote = lazy(() => import('./components/BlockNote/BlockNote'));
const BlogCommentApp = lazy(() => import('./components/blog/BlogCommentApp'));
const HemisphereApp = lazy(() => import('./components/Hemisphere/HemisphereApp'));
const ImageListApp = lazy(() => import('./components/imageList/ImageListApp'));
const ClockApp = lazy(() => import('./components/clock/ClockApp'));

// State management
const ZustandDemo = lazy(() => import('./components/zustandDemo/App'));
const ReduxStoreDemo = lazy(() => import('./components/ReduxStoreDemo/ReduxStoreDemo'));

// Apps & Tools
const DragDrop = lazy(() => import('./components/DragDrop/DragDrop'));
const Expenses = lazy(() => import('./components/Expenses/App'));

// Brand pages — named exports, so each gets its own lazy wrapper
const About = lazy(() =>
  import('./components/BrandCosmetics/Corporate').then((m) => ({ default: m.About }))
);
const PrivacyPolicy = lazy(() =>
  import('./components/BrandCosmetics/Corporate').then((m) => ({ default: m.PrivacyPolicy }))
);

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: wrap(<Home />) },

      // Brand pages
      { path: 'about', element: wrap(<About />) },
      { path: 'privacy', element: wrap(<PrivacyPolicy />) },

      // API & Data
      { path: 'api/dog-data', element: wrap(<DogData />) },
      { path: 'api/github-fetch', element: wrap(<GitHubFetch login="sirajudheenam" />) },
      { path: 'api/fetch-api', element: wrap(<FetchAPI />) },

      // Core Concepts
      { path: 'concepts/classcomponent', element: wrap(<Vehicle />) },
      { path: 'concepts', element: wrap(<Concepts />) },
      { path: 'concepts/conditional-rendering', element: wrap(<ConditionalRendering />) },
      { path: 'concepts/use-effect-demo', element: wrap(<UseEffectDemo />) },
      { path: 'concepts/UseTransitionDemo', element: wrap(<UseTransitionDemo />) },

      // Course projects
      { path: 'course/accordion', element: wrap(<Accordion />) },
      { path: 'course/eat-n-split', element: wrap(<EatAndSplit />) },
      { path: 'course/react-quiz', element: wrap(<ReactQuiz />) },
      { path: 'course/steps', element: wrap(<Steps />) },
      { path: 'course/travel-list', element: wrap(<TravelList />) },
      { path: 'course/use-popcorn', element: wrap(<UsePopcorn />) },
      { path: 'course/advice', element: wrap(<Advice />) },
      { path: 'course/currency-converter', element: wrap(<CurrencyConverter />) },
      { path: 'course/date-count-app', element: wrap(<DateCountApp />) },
      { path: 'course/flash-card-app', element: wrap(<FlashCardApp />) },
      { path: 'course/pizza', element: wrap(<PizzaApp />) },
      { path: 'course/score-card', element: wrap(<ScoreCard />) },
      { path: 'course/tip-n-split', element: wrap(<TipNSplit />) },
      { path: 'course/use-geo-location', element: wrap(<UseGeoLocation />) },
      { path: 'course/bank-account', element: wrap(<BankAccount />) },

      // Other
      { path: 'countries-list', element: wrap(<CountriesList />) },
      { path: 'blocknote', element: wrap(<BlockNote />) },
      { path: 'blog', element: wrap(<BlogCommentApp />) },
      { path: 'hemisphere', element: wrap(<HemisphereApp />) },
      { path: 'imagelist', element: wrap(<ImageListApp />) },
      { path: 'clock', element: wrap(<ClockApp />) },

      // State management
      { path: 'zustand', element: wrap(<ZustandDemo />) },
      { path: 'redux', element: wrap(<ReduxStoreDemo />) },

      // Apps & Tools
      { path: 'drag-drop', element: wrap(<DragDrop />) },
      { path: 'expenses', element: wrap(<Expenses />) },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
