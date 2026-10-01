# React All-in-One

A showcase of React concepts, patterns, and mini-apps — built as a learning playground.

**Live site:** https://technotipstoday.github.io/react-all-in-one/

---

## Getting started

```bash
# Install dependencies
make install

# Start dev server (http://localhost:3000)
make start
```

## Available commands

| Command | Description |
|---|---|
| `make install` | Install dependencies |
| `make start` | Dev server on port 3000 |
| `make build` | Production build into `./build` |
| `make test` | Run test suite |
| `make deploy` | Build and publish to GitHub Pages |
| `make deploy-pages` | Publish existing `./build` without rebuilding |
| `make storybook` | Storybook dev server on port 6006 |
| `make storybook-build` | Static Storybook build |
| `make server-de` | json-server for DE questions (port 9001) |
| `make server-verbs` | json-server for German verbs (port 9002) |
| `make server-nouns` | json-server for German nouns (port 9003) |
| `make clean` | Remove `./build` |

## Deploying to GitHub Pages

The app is deployed to the `gh-pages` branch of this repo and served at:

```
https://technotipstoday.github.io/react-all-in-one/
```

To publish a new version:

```bash
make deploy
```

This runs `pnpm build` then `npx gh-pages -d build`. GitHub Pages picks up the
`gh-pages` branch automatically (configure in repo Settings → Pages → Branch: `gh-pages`).

The app uses `createHashRouter` so all client-side routes work without a custom
404 redirect on GitHub Pages.

## Project structure

```
src/
  App.js              — router config (createHashRouter)
  Layout.jsx/css      — persistent top navbar wrapper
  Home.jsx/css        — categorised card-grid home page
  components/
    API/              — fetch demos (Dog, GitHub, generic)
    concepts/         — core hooks demos
    course/           — course project mini-apps
    DragDrop/         — react-dnd drag-and-drop
    Expenses/         — CRUD expense tracker
    ReduxStoreDemo/   — Redux Toolkit demo
    zustandDemo/      — Zustand state demo
    ...
  data/               — local JSON fixtures
```

## References

- [Jonas Schmedtmann — Ultimate React Course](https://github.com/jonasschmedtmann/ultimate-react-course)
- [Moon Highway — Learning React](https://github.com/MoonHighway/learning-react)
- [React Router tutorial](https://reactrouter.com/en/main/start/tutorial)
