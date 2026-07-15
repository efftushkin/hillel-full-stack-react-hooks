# Memoization Lab

Memoization Lab is a React application that demonstrates how memoization can reduce unnecessary calculations and component re-renders.

The app displays the same product catalog in two panels:

- **Baseline catalog** recalculates the filtered product list and statistics on every render.
- **Optimized catalog** uses `useMemo` for calculated data, `useCallback` for event handlers, and `React.memo` for product list components.

The toolbar includes search, category and sorting filters, an in-stock filter, favorites, and an unrelated counter. Calculation counters make the performance difference visible when the unrelated counter is changed.

## Technologies

- React
- Vite
- React Hooks: `useMemo`, `useCallback`, `useState`
- `React.memo`

## Installation

Install the project dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173/`.

## Other Commands

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```
