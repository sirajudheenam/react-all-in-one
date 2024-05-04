import { forwardRef, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import "./UseRefDemo.css";
export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

// Same Component with useRef
function RefSameComponent() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="RefSameComponent">
      <input ref={inputRef} />
      <button onClick={handleClick}>
        {" "}
        Focus the input (Same Component - useRef){" "}
      </button>
      <hr />
    </div>
  );
}

// Different Component with forwardRef

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

function RefDiffComponent() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="RefDiffComponent">
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input (Different Component - forwardRef)
      </button>
    </div>
  );
}

// Moving the focus between focus using useRef & scrollIntoView
function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div className="catContainer">
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div className="catFriends">
        <ul className="catUL">
          <li className="catLI">
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li className="catLI">
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li className="catLI">
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

function TodoList() {
  const listRef = useRef(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd() {
    /* which adds a new todo and scrolls the screen down to the
     * last child of the list. Notice how, for some reason,
     * it always scrolls to the todo that was just before
     * the last added one.
     *
     * Usually, this is what you want. However, here it causes a problem
     * because setTodos does not immediately update the DOM.
     * So the time you scroll the list to its last element,
     * the todo has not yet been added. This is why scrolling always
     * “lags behind” by one item.
     * To fix this issue, you can force React to update (“flush”)
     * the DOM synchronously. To do this, import flushSync
     * from react-dom and wrap the state update into a flushSync call*
     * */
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText("");
      setTodos([...todos, newTodo]);
    });
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <>
      <div className="todoList">
        <button onClick={handleAdd}>Add</button>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <ul ref={listRef}>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "Todo #" + (i + 1),
  });
}

function Counter() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div className="counterUseRef">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}
      >
        Remove from the DOM
      </button>
      {show && <p ref={ref}>HELLO WORLD</p>}
    </div>
  );
}

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
  }

  return (
    <div className="videoPlayer">
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <br />
      <video width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

function VideoPlayerTwo({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline width="250" />;
}

function VideoPlayerTwoWrapper() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="videoPlayer2">
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayerTwo
        isPlaying={isPlaying}
        // Video by Kelly     from Pexels: https://www.pexels.com/video/19959745/
        src="pexels-kelly-19959745-720p.mp4"
      />
    </div>
  );
}

export default function useRefDemo() {
  return (
    <div className="useRefWrapper">
      <RefSameComponent />
      <RefDiffComponent />
      <CatFriends />
      <TodoList />
      <Counter />
      <VideoPlayer />
      <VideoPlayerTwoWrapper />
    </div>
  );
}
