import { Link } from 'react-router-dom';
import './Home.css';

const CATEGORIES = [
  {
    title: 'Core Concepts',
    demos: [
      { name: 'Concepts', path: '/concepts', desc: 'useState, useEffect, useReducer, useRef, useMemo in one place' },
      { name: 'Class Component', path: '/concepts/classcomponent', desc: 'Classic class-based component (Vehicle example)' },
      { name: 'Conditional Rendering', path: '/concepts/conditional-rendering', desc: 'Patterns for conditionally rendering elements' },
      { name: 'useEffect Demo', path: '/concepts/use-effect-demo', desc: 'Side effects, cleanup, and dependency arrays' },
      { name: 'useTransition Demo', path: '/concepts/UseTransitionDemo', desc: 'Deferred state updates with useTransition' },
    ],
  },
  {
    title: 'Course Projects',
    demos: [
      { name: 'Accordion', path: '/course/accordion', desc: 'Collapsible sections with shared state' },
      { name: 'Steps', path: '/course/steps', desc: 'Multi-step wizard with next/prev navigation' },
      { name: 'Travel List', path: '/course/travel-list', desc: 'Pack items for a trip — add, toggle, delete' },
      { name: 'Eat & Split', path: '/course/eat-n-split', desc: 'Split a restaurant bill with friends' },
      { name: 'Tip & Split', path: '/course/tip-n-split', desc: 'Tip calculator and bill splitter' },
      { name: 'Pizza App', path: '/course/pizza', desc: 'Pizza menu with open/closed hours' },
      { name: 'React Quiz', path: '/course/react-quiz', desc: 'Quiz app built with useReducer' },
      { name: 'usePopcorn', path: '/course/use-popcorn', desc: 'Movie search and watchlist with OMDB API' },
      { name: 'Score Card', path: '/course/score-card', desc: 'Score tracking with controlled inputs' },
      { name: 'Advice', path: '/course/advice', desc: 'Fetch a random piece of advice' },
      { name: 'Currency Converter', path: '/course/currency-converter', desc: 'Live currency conversion via API' },
      { name: 'Date Count App', path: '/course/date-count-app', desc: 'Count days forward/backward from today' },
      { name: 'Flash Card App', path: '/course/flash-card-app', desc: 'React concept flashcards — click to reveal' },
      { name: 'useGeoLocation', path: '/course/use-geo-location', desc: 'Get current GPS position via browser API' },
      { name: 'Bank Account', path: '/course/bank-account', desc: 'Deposit, withdraw, and loan with useReducer' },
    ],
  },
  {
    title: 'API & Data',
    demos: [
      { name: 'Dog Data', path: '/api/dog-data', desc: 'Fetch random dog images from the Dog CEO API' },
      { name: 'GitHub Fetch', path: '/api/github-fetch', desc: 'Fetch a GitHub user profile via the API' },
      { name: 'Fetch API', path: '/api/fetch-api', desc: 'Raw fetch() with loading and error states' },
      { name: 'Countries List', path: '/countries-list', desc: 'Browse countries with the country-region-data package' },
      { name: 'Image List', path: '/imagelist', desc: 'Unsplash-style image search results' },
      { name: 'Hemisphere', path: '/hemisphere', desc: 'Show northern/southern hemisphere based on input' },
    ],
  },
  {
    title: 'State Management',
    demos: [
      { name: 'Zustand Demo', path: '/zustand', desc: 'Bears and todos managed with Zustand store' },
      { name: 'Redux Demo', path: '/redux', desc: 'Redux Toolkit with users, cards, routing' },
    ],
  },
  {
    title: 'Apps & Tools',
    demos: [
      { name: 'Expenses', path: '/expenses', desc: 'Expense tracker with add, edit, delete and login' },
      { name: 'Drag & Drop', path: '/drag-drop', desc: 'Reorder items with react-dnd' },
      { name: 'Clock', path: '/clock', desc: 'Live digital clock' },
      { name: 'BlockNote', path: '/blocknote', desc: 'Rich-text block editor (BlockNote)' },
      { name: 'Blog Comments', path: '/blog', desc: 'Nested comment thread with add/delete' },
    ],
  },
  {
    title: 'Brand Pages',
    demos: [
      { name: 'About', path: '/about', desc: 'Sample corporate About page' },
      { name: 'Privacy Policy', path: '/privacy', desc: 'Sample Privacy Policy page' },
    ],
  },
];

export default function Home() {
  return (
    <div className="home">
      <h1>React All-in-One</h1>
      <p className="subtitle">A showcase of React concepts, patterns, and mini-apps.</p>
      {CATEGORIES.map((cat) => (
        <section key={cat.title} className="home-section">
          <h2>{cat.title}</h2>
          <div className="card-grid">
            {cat.demos.map((demo) => (
              <Link key={demo.path} to={demo.path} className="demo-card">
                <h3>{demo.name}</h3>
                <p>{demo.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
