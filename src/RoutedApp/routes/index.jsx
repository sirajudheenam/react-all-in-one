import { NavLink } from "react-router-dom";

const CATEGORIES = [
  {
    title: "Core Concepts",
    cls: "cat-concepts",
    demos: [
      { name: "Concepts",              path: "concepts",            desc: "useState, useEffect, useReducer, useRef, useMemo" },
      { name: "Class Component",       path: "class-component-demo",desc: "Classic class-based component — Vehicle example" },
      { name: "Conditional Rendering", path: "conditional-rendering",desc: "Patterns for conditionally rendering elements" },
      { name: "useEffect Demo",        path: "use-effect-demo",     desc: "Side effects, cleanup, dependency arrays" },
      { name: "useTransition Demo",    path: "use-transition-demo", desc: "Deferred state updates with useTransition" },
      { name: "useRef Demo",           path: "use-ref-demo",        desc: "DOM refs and persisted mutable values" },
    ],
  },
  {
    title: "Course Projects",
    cls: "cat-course",
    demos: [
      { name: "Accordion",          path: "accordion",        desc: "Collapsible sections with shared state" },
      { name: "Steps",              path: "steps",            desc: "Multi-step wizard with next/prev navigation" },
      { name: "Travel List",        path: "travel-list",      desc: "Pack items for a trip — add, toggle, delete" },
      { name: "Eat & Split",        path: "eat-n-split",      desc: "Split a restaurant bill with friends" },
      { name: "Tip & Split",        path: "tip-n-split",      desc: "Tip calculator and bill splitter" },
      { name: "Pizza App",          path: "pizza",            desc: "Pizza menu with open/closed hours" },
      { name: "React Quiz",         path: "react-quiz",       desc: "Quiz app built with useReducer" },
      { name: "usePopcorn",         path: "use-popcorn",      desc: "Movie search and watchlist via OMDB API" },
      { name: "Score Card",         path: "score-card",       desc: "Score tracking with controlled inputs" },
      { name: "Advice",             path: "advice",           desc: "Fetch a random piece of advice" },
      { name: "Currency Converter", path: "currency-converter",desc: "Live currency conversion via API" },
      { name: "Date Count App",     path: "date-count-app",   desc: "Count days forward/backward from today" },
      { name: "Flash Card App",     path: "flash-card-app",   desc: "React concept flashcards — click to reveal" },
      { name: "useGeoLocation",     path: "use-geo-location", desc: "Get current GPS position via browser API" },
      { name: "Bank Account",       path: "bank-account",     desc: "Deposit, withdraw, and loan with useReducer" },
      { name: "Atomic Posts",       path: "atomic-posts",     desc: "Context API — posts with search and archive" },
    ],
  },
  {
    title: "API & Data",
    cls: "cat-api",
    demos: [
      { name: "Dog Data",       path: "dog-data",       desc: "Random dog images from the Dog CEO API" },
      { name: "GitHub Fetch",   path: "github-fetch",   desc: "Fetch a GitHub user profile via the API" },
      { name: "Fetch API",      path: "fetch-api",      desc: "Raw fetch() with loading and error states" },
      { name: "Countries List", path: "countries-list", desc: "Browse countries with country-region-data" },
    ],
  },
  {
    title: "State Management",
    cls: "cat-state",
    demos: [
      { name: "DE Flashcard", path: "de-flashcard", desc: "German nouns and verbs flashcard deck" },
      { name: "DE Quiz",      path: "de-quiz",      desc: "Leben-in-Deutschland style quiz" },
    ],
  },
  {
    title: "Apps & Tools",
    cls: "cat-tools",
    demos: [
      { name: "Expenses",      path: "expenses",      desc: "CRUD expense tracker with login and sorting" },
      { name: "Drag & Drop",   path: "drag-and-drop", desc: "Reorder items with react-dnd" },
      { name: "Clock",         path: "clock",         desc: "Live digital clock" },
      { name: "BlockNote",     path: "blocknote",     desc: "Rich-text block editor (BlockNote)" },
      { name: "Blog Comments", path: "blog",          desc: "Nested comment thread with add/delete" },
      { name: "Form Handling", path: "form-handling", desc: "Controlled form inputs and validation" },
      { name: "CSS Demos",     path: "css",           desc: "CSS Grid, canvas and drawing experiments" },
    ],
  },
  {
    title: "Brand Pages",
    cls: "cat-brand",
    demos: [
      { name: "About",   path: "about",   desc: "Sample corporate About page" },
      { name: "Privacy", path: "privacy", desc: "Sample Privacy Policy page" },
      { name: "Terms",   path: "terms",   desc: "Sample Terms of Service page" },
    ],
  },
];

export default function Index() {
  return (
    <>
      <div className="home-hero">
        <h1>React All-in-One</h1>
        <p>A curated showcase of React concepts, patterns, and mini-apps built while learning.</p>
      </div>

      {CATEGORIES.map((cat) => (
        <section key={cat.title} className={`home-section ${cat.cls}`}>
          <h2>{cat.title}</h2>
          <div className="card-grid">
            {cat.demos.map((demo) => (
              <NavLink key={demo.path} to={demo.path} className="demo-card">
                <h3>{demo.name}</h3>
                <p>{demo.desc}</p>
              </NavLink>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
