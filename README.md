# Vite + React + TypeScript Project

This project was created using Vite for fast development and easy publishing.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at the local address shown in the terminal (usually http://localhost:5173).

3. **Build for production:**
   ```sh
   npm run build
   ```
   The output will be in the `dist` folder.

## Custom Build Scripts
If you had a custom build script (like `scripts/build.mjs`), migrate its logic into Vite's config or npm scripts. Vite handles most build and preview tasks out of the box.

## Migrating Existing Code
- Move your existing React components, pages, and styles into the new Vite project structure (`src/`).
- Update imports as needed.

## Learn More
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
