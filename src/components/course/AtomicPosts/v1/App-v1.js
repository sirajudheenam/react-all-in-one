import { useEffect, useState } from 'react';
import { PostProvider, usePosts } from './PostContext';
import { faker } from '@faker-js/faker';

import styles from '../AtomicPosts.module.css';
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  // const x = usePosts();
  // console.log(x);
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      // document.documentElement.classList.toggle('fake-dark-mode');
      document.documentElement.classList.toggle(styles.fakeDarkMode);
    },
    [isFakeDark]
  );

  return (
    <section className={styles.atomicSection}>
      <Button setIsFakeDark={setIsFakeDark}>{isFakeDark ? '☀️' : '🌙'}</Button>
      {/*  2) PROVIDE VALUE TO CHILD COMPONENTS */}
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

function Button({ setIsFakeDark, children }) {
  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      // className="btn-fake-dark-mode"
      className={styles.btnFakeDarkMode}
    >
      {children}
    </button>
  );
}
function Header() {
  const { onClearPosts } = usePosts();
  return (
    <header className={styles.atomicHeader}>
      <h1 className={styles.atomicHeading1}>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts} className={styles.atomicButton}>
          Clear posts
        </button>
      </div>
    </header>
  );
}

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
      className={styles.atomicInput}
    />
  );
}

function Results() {
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
}

function Main() {
  return (
    <main className={styles.atomicMain}>
      <FormAddPost />
      <Posts />
    </main>
  );
}

function Posts() {
  return (
    <section className={styles.atomicSection}>
      <List />
    </section>
  );
}

function FormAddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { onAddPost } = usePosts();
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.atomicForm}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        className={styles.atomicInput}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
        className={styles.atomicTextArea}
      />
      <button className={styles.atomicButton}>Add post</button>
    </form>
  );
}

function List() {
  const { posts } = usePosts();
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          {/* 3) Utilize the Context */}
          <h3 className={styles.atomicHeading3}>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

function Archive() {
  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);
  const { onAddPost } = usePosts();
  return (
    <aside className={styles.atomicAside}>
      <h2 className={styles.atomicHeading2}>Post archive</h2>
      <button
        onClick={() => setShowArchive((s) => !s)}
        className={styles.atomicButton}
      >
        {showArchive ? 'Hide archive posts' : 'Show archive posts'}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button
                onClick={() => onAddPost(post)}
                className={styles.atomicButton}
              >
                Add as new post
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function Footer() {
  return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

export default App;
