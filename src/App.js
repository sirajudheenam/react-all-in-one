import React, { Suspense, lazy } from 'react';
import {
  Router,
  Routes,
  Route,
  useParams,
  Link,
  Outlet,
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

// const ComponentSelector = lazy(() => import('./components/ComponentSelector'));
// const StepsContainer = lazy(() => import('./components/StepsContainer'));
// const Pokemon = lazy(() => import('./components/Pokemon'));
// const FormValidation = lazy(() => import('./components/FormValidation/App'));
// const TestTravelApp = lazy(() =>
//   import('./components/API/amadeus/TestTravelApp')
// );
// const GPSApp = lazy(() => import('./components/course/UseGeoLocation.js'));
// const Products = lazy(() => import('./components/Products'));
// const RiddleEinstein = lazy(() =>
//   import('./components/RiddleEinstein/RiddleEinstein')
// );
// const RiddleReactAI = lazy(() => import('./components/RiddleReactAI'));

/* implemented already */
const DogData = lazy(() => import('./components/API/DogData'));
const { GitHubFetch } = lazy(() => import('./components/API/GitHubFetch'));
const { FetchAPI } = lazy(() => import('./components/API/FetchAPI'));

const Vehicle = lazy(() => import('./components/concepts/ClassComponentDemo'));
const Concepts = lazy(() => import('./components/concepts/Concepts'));
const ConditionalRendering = lazy(() =>
  import('./components/concepts/ConditionalRendering')
);
const UseEffectDemo = lazy(() => import('./components/concepts/UseEffectDemo'));
const UseTransitionDemo = lazy(() =>
  import('./components/concepts/UseTransitionDemo')
);

const { Kitchen } = lazy(() => import('./components/Kitchen/Kitchen'));

const Game = lazy(() => import('./components/Game/App'));

/* course */
const Accordion = lazy(() => import('./components/course/Accordion/App'));
const EatAndSplit = lazy(() =>
  import('./components/course/EatAndSplit/EatAndSplit-v1')
);
const ReactQuiz = lazy(() => import('./components/course/ReactQuiz/ReactQuiz'));
const Steps = lazy(() => import('./components/course/Steps/App-v1'));
const TravelList = lazy(() => import('./components/course/TravelList/App'));
const UsePopcorn = lazy(() => import('./components/course/UsePopcorn/App-v3'));
const Advice = lazy(() => import('./components/course/Advice/Advice'));
const CurrencyConverter = lazy(() =>
  import('./components/course/CurrencyConverter/CurrencyConverter')
);
const DateCountApp = lazy(() =>
  import('./components/course/DateCountApp/DateCountApp')
);
const FlashCardApp = lazy(() =>
  import('./components/course/FlashCardApp/FlashCardApp')
);
const PizzaApp = lazy(() => import('./components/course/PizzaApp/PizzaApp'));
const ScoreCard = lazy(() => import('./components/course/ScoreCard/ScoreCard'));
const TipNSplit = lazy(() =>
  import('./components/course/TipNSplit/TipNSplitv1')
);
const UseGeoLocation = lazy(() =>
  import('./components/course/UseGeoLocation/UseGeoLocation')
);
/* course */

const CountriesList = lazy(() =>
  import('./components/CountriesList/CountriesList')
);
const { RouterDemo } = lazy(() => import('./components/RouterDemo/RouterDemo'));
const BlockNote = lazy(() => import('./components/BlockNote/BlockNote'));
const LoadingIndicator = lazy(() =>
  import('./components/LoadingIndicator/LoadingIndicator')
);
const ZustandDemo = lazy(() => import('./components/zustandDemo/App'));

const BlogCommentApp = lazy(() => import('./components/blog/BlogCommentApp'));
const HemisphereApp = lazy(() =>
  import('./components/Hemisphere/HemisphereApp')
);
const ImageListApp = lazy(() => import('./components/imageList/ImageListApp'));
const ClockApp = lazy(() => import('./components/clock/ClockApp'));

const { About, PrivacyPolicy, TermsOfService } = lazy(() =>
  import('./components/BrandCosmetics/Corporate')
);

// const './App.css';
function Links() {
  return (
    <div className="links">
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/api/singapore-weather-data">Singapore Weather Data</Link>
        </li>
        <li>
          <Link to="/api/github-fetch">GitHubFetch</Link>
        </li>
        <li>
          <Link to="/api/fetch-api">FetchAPI</Link>
        </li>
        <li>
          <Link to="/concepts/classcomponent">Class Component (Vehicle)</Link>
        </li>
        <li>
          <Link to="/concepts">Concepts</Link>
        </li>
        <li>
          <Link to="/concepts/conditional-rendering">ConditionalRendering</Link>
        </li>
        <li>
          <Link to="/concepts/use-effect-demo">UseEffectDemo</Link>
        </li>
        <li>
          <Link to="/concepts/use-transition-demo">UseTransitionDemo</Link>
        </li>
        <li>
          <Link to="/countries-list">CountriesList</Link>
        </li>
        <li>
          <Link to="/course/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/course/eat-n-split">EatAndSplit</Link>
        </li>
        <li>
          <Link to="/course/react-quiz">ReactQuiz</Link>
        </li>
        <li>
          <Link to="/course/steps">Steps</Link>
        </li>
        <li>
          <Link to="/course/travel-list">TravelList</Link>
        </li>
        <li>
          <Link to="/course/use-popcorn">UsePopcorn</Link>
        </li>
        <li>
          <Link to="/course/advice">Advice</Link>
        </li>
        <li>
          <Link to="/course/currency-converter">CurrencyConverter</Link>
        </li>
        <li>
          <Link to="/course/date-count-app">DateCountApp</Link>
        </li>
        <li>
          <Link to="/course/flash-card-app">FlashCardApp</Link>
        </li>
        <li>
          <Link to="/course/pizza">PizzaApp</Link>
        </li>
        <li>
          <Link to="/course/score-card">ScoreCard</Link>
        </li>
        <li>
          <Link to="/course/tip-n-split">TipNSplit</Link>
        </li>
        <li>
          <Link to="/course/use-geo-location">UseGeoLocation</Link>
        </li>
      </ul>
    </div>
  );
}

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<>loading</>}>
        <Links />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<>loading</>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: '/privacy',
    element: (
      <Suspense fallback={<>loading</>}>
        <PrivacyPolicy />
      </Suspense>
    ),
  },
  {
    path: '/api/dog-data',
    element: (
      <Suspense fallback={<>loading</>}>
        <DogData />
      </Suspense>
    ),
  },
  {
    path: '/api/github-fetch',
    element: (
      <Suspense fallback={<>loading</>}>
        <GitHubFetch login="sirajudheenam" />
      </Suspense>
    ),
  },
  {
    path: '/api/fetch-api',
    element: (
      <Suspense fallback={<>loading</>}>
        <FetchAPI />
      </Suspense>
    ),
  },
  {
    path: '/blog',
    element: (
      <Suspense fallback={<>loading</>}>
        <BlogCommentApp />
      </Suspense>
    ),
  },

  {
    path: '/concepts/classcomponent',
    element: (
      <Suspense fallback={<>loading</>}>
        <Vehicle />
      </Suspense>
    ),
  },
  {
    path: '/concepts',
    element: (
      <Suspense fallback={<>loading</>}>
        <Concepts />
      </Suspense>
    ),
  },
  {
    path: '/concepts/conditional-rendering',
    element: (
      <Suspense fallback={<>loading</>}>
        <ConditionalRendering />
      </Suspense>
    ),
  },
  {
    path: '/concepts/use-effect-demo',
    element: (
      <Suspense fallback={<>loading</>}>
        <UseEffectDemo />
      </Suspense>
    ),
  },
  {
    path: '/concepts/UseTransitionDemo',
    element: (
      <Suspense fallback={<>loading</>}>
        <UseTransitionDemo />
      </Suspense>
    ),
  },
  {
    path: '/clock',
    element: (
      <Suspense fallback={<>loading</>}>
        <ClockApp />
      </Suspense>
    ),
  },
  {
    path: '/countries-list',
    element: (
      <Suspense fallback={<>loading</>}>
        <CountriesList />
      </Suspense>
    ),
  },
  {
    path: '/course/accordion',
    element: (
      <Suspense fallback={<>loading</>}>
        <Accordion />
      </Suspense>
    ),
  },
  {
    path: '/course/eat-n-split',
    element: (
      <Suspense fallback={<>loading</>}>
        <EatAndSplit />
      </Suspense>
    ),
  },

  {
    path: '/course/react-quiz',
    element: (
      <Suspense fallback={<>loading</>}>
        <ReactQuiz />
      </Suspense>
    ),
  },
  {
    path: '/course/steps',
    element: (
      <Suspense fallback={<>loading</>}>
        <Steps />
      </Suspense>
    ),
  },
  {
    path: '/course/travel-list',
    element: (
      <Suspense fallback={<>loading</>}>
        <TravelList />
      </Suspense>
    ),
  },
  {
    path: '/course/use-popcorn',
    element: (
      <Suspense fallback={<>loading</>}>
        <UsePopcorn />
      </Suspense>
    ),
  },
  {
    path: '/course/advice',
    element: (
      <Suspense fallback={<>loading</>}>
        <Advice />
      </Suspense>
    ),
  },
  {
    path: '/course/currency-converter',
    element: (
      <Suspense fallback={<>loading</>}>
        <CurrencyConverter />
      </Suspense>
    ),
  },
  {
    path: '/course/date-count-app',
    element: (
      <Suspense fallback={<>loading</>}>
        <DateCountApp />
      </Suspense>
    ),
  },
  {
    path: '/course/flash-card-app',
    element: (
      <Suspense fallback={<>loading</>}>
        <FlashCardApp />
      </Suspense>
    ),
  },
  {
    path: '/course/pizza',
    element: (
      <Suspense fallback={<>loading</>}>
        <PizzaApp />
      </Suspense>
    ),
  },
  {
    path: '/course/score-card',
    element: (
      <Suspense fallback={<>loading</>}>
        <ScoreCard />
      </Suspense>
    ),
  },
  {
    path: '/course/tip-n-split',
    element: (
      <Suspense fallback={<>loading</>}>
        <TipNSplit />
      </Suspense>
    ),
  },
  {
    path: '/course/use-geo-location',
    element: (
      <Suspense fallback={<>loading</>}>
        <UseGeoLocation />
      </Suspense>
    ),
  },
  {
    path: '/hemisphere',
    element: (
      <Suspense fallback={<>loading</>}>
        <HemisphereApp />
      </Suspense>
    ),
  },
  {
    path: '/imagelist',
    element: (
      <Suspense fallback={<>loading</>}>
        <ImageListApp />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      // style={{
      //   width: 300,
      //   margin: '0 auto',
      //   border: '1px solid var(--beige-10)',
      //   borderRadius: 8,
      //   backgroundColor: 'var(--charcoal)',
      //   padding: 24,
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      //   gap: '16px',
      //   textAlign: 'center',
      // }}
    />
  );
}

export default App;
