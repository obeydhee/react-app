# React App

A basic React app built with **TypeScript**, **Vite** and **Bootstrap 5**.

## Components

Reusable, typed components live in `src/components/`:

- `Alert` – Bootstrap alert with a `variant` and optional dismiss (`onClose`).
- `Button` – Bootstrap button with `variant`, `outline` and `disabled` props.
- `ListGroup` – selectable list that reports the chosen item via `onSelectItem`.
- `Calculator` – add / subtract / multiply / divide two numbers, showing the
  result or validation errors with `Alert`.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint     # lint with oxlint
npm run preview  # preview the production build
```
