
🛍️ Product Explorer – Interactive Data Explorer

A responsive web application built as part of the Frontend Developer Take-Home Assignment.
The app fetches product data from the DummyJSON API
, allows browsing, filtering, sorting, and viewing detailed product information with smooth animations.


Features

Product Listing

Fetches products from the DummyJSON API.

Displays in a responsive grid layout.

Pagination with next/previous controls.

Product Detail View

Opens in a modal with fade-in / fade-out animations.

Shows description, rating, stock, brand, category, and price.

Fetches fresh data per product ID.

Filtering

Filter products by category.

Uses live categories from API.

Sorting

Sort products by Price (Low→High / High→Low) or Title (A–Z / Z–A).

Loading & Error States

Skeleton loaders for product grid.

Inline "Loading..." indicator in modal.

Graceful error handling.

Animations (Framer Motion)

Fade & slide-in product cards.

Smooth modal open/close transitions.

Micro-interactions on hover.

Responsive Design

Works seamlessly on mobile, tablet, and desktop.


Tech Stack

React + Vite → fast frontend framework & bundler

Tailwind CSS → utility-first responsive styling

Axios → API requests

Framer Motion → animations & transitions


Installation & Setup

Clone the repository and install dependencies:

git clone <your-repo-link>
cd product-explorer
npm install


Run the development server:

npm run dev

The app will be available at:

http://localhost:5173


Project Structure

src/
  components/       # UI components (cards, modal, filters, sort menu, loader)
  hooks/            # Custom React hooks
  pages/            # Main pages (Home)
  App.jsx           # Root app component
  main.jsx          # Vite entry point

Notes

Assignment completed within the core requirements.

Code is clean, modular, and responsive.

Animations are purposeful (UX-enhancing, not distracting).