import { useState } from 'react';

import './accordion.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

export default function App() {
  return (
    <div>
      <header className="demo-header">
        <div className="demo-header__badge">useState</div>
        <h1 className="demo-header__title">Accordion</h1>
        <p className="demo-header__desc">Demonstrates useState to toggle open/closed state on collapsible FAQ panels.</p>
      </header>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={el.title}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={22}
        title="Starting React"
        key="Starting React"
      >
        <p>Allows React developers to</p>
        <ul>
          <li>Break up UI elements in to component</li>
          <li>Make components reuseable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    // setCurOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  }
  return (
    <div
      className={`accordion-item ${isOpen ? 'open' : ''}`}
      onClick={handleToggle}
    >
      <p className="accordion-number">{num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p className="accordion-title">{title}</p>
      <p className="accordion-icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="accordion-content-box">{children}</div>}
    </div>
  );
}
