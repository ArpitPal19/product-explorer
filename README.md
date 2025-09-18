
🛍️ Product Explorer – Interactive Data Explorer

A responsive web application built as part of the Frontend Developer Take-Home Assignment.
The app fetches product data from the DummyJSON API
, allows browsing, filtering, sorting, and viewing detailed product information with smooth animations.

# 📌 Submission Info
- Name: Arpit Pal
- Assignment: Frontend Developer Take-Home – Interactive Data Explorer
- Live Demo: https://product-explorer-inky.vercel.app/
- GitHub Repo: https://github.com/ArpitPal19/product-explorer


🚀Features

--Product Listing

1.Fetches products from the DummyJSON API.

2.Displays in a responsive grid layout.

3.Pagination with next/previous controls.

--Product Detail View

1.Smooth fade-in/fade-out animation

2.Displays description, rating, brand, category, stock, and price

3.Fresh API fetch per product

--Filtering

1.Filter products by category.

Uses live categories from API.

--Sorting

1.Price: Low → High / High → Low

2.Title: A → Z / Z → A

--Search

1.Global search across all products by title

2.Clear (“×”) button for quick reset

--Loading & Error States

1.Skeleton loaders while fetching

2.Inline loader in modal

3.Graceful error messages

--Animations (Framer Motion)

1.Fade & slide-in product cards

2.Smooth modal transitions

--Responsive Design

1.Works seamlessly on desktop, tablet, and mobile


 🚀Tech Stack

React + Vite → fast frontend framework & bundler
Tailwind CSS → utility-first responsive styling
Axios → API requests
Framer Motion → animations & transitions

🚀Project Structure

src/
  components/       # UI components (cards, modal, filters, sort menu, loader)
  hooks/            # Custom React hooks
  pages/            # Main pages (Home)
  App.jsx           # Root app component
  main.jsx          # Vite entry point


🚀Installation & Setup

Clone the repository and install dependencies:

git clone https://github.com/ArpitPal19/product-explorer.git
cd product-explorer
npm install


🚀Run the development server:

npm run dev

--Build for production:

npm run build
npm run preview

--The app will be available at:

http://localhost:5173


Notes

1.Assignment completed within the core requirements.

2.Code is clean, modular, and responsive.

3.Animations are purposeful (UX-enhancing, not distracting).


🌍 Deployment
Deployed with Vercel

1.Build command: npm run build
2.Output directory: dist/

✨ Bonus Features

🔍 Global Search across all products

❌ Clear button inside search bar

🎨 Polished UI with hover & modal animations