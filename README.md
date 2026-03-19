# HERO.IO — App Store

A modern app store web application where users can browse, search and install apps. Built with React and React Router, featuring live search, install/uninstall functionality with localStorage persistence and a fully responsive UI.

**Live Demo: https://heroio-apps-store.netlify.app/**

---

## Features

* **Browse & Discover:** View all available apps complete with download counts and average ratings.
* **Live Search:** Instantly filter apps by title as you type.
* **Smart Sorting:** Sort your installed apps by download count (High to Low or Low to High).
* **Interactive Installation:** Install and uninstall apps easily, accompanied by beautiful toast notifications.
* **Data Persistence:** Installed apps are saved in your browser's `localStorage`, keeping your data safe across page refreshes.
* **Seamless Navigation:** * Active route highlighting in the navigation bar.
    * Route-based loading states featuring a full-height loader.
    * A custom 404 error page catching unknown routes and invalid app IDs.
* **Fully Responsive:** Optimized for a great experience on mobile, tablet and desktop devices.

---

## Technologies

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core UI library |
| **React Router v7** | Client-side routing, data loaders and outlet context for state sharing |
| **Tailwind CSS v4** | Utility-first CSS framework for rapid styling |
| **DaisyUI** | Tailwind component library for pre-built UI elements |
| **React Hot Toast** | Elegant toast notifications for user actions |
| **React Icons** | Comprehensive SVG icon library |
| **Recharts** | Rendering dynamic ratings visualizations |
| **Vite** | Blazing fast build tool and development server |
| **localStorage** | Browser API for persisting installed app data across sessions |
| **Netlify** | Platform for hosting and deployment |

---

## Project Structure

src/
├── assets/               # Images and icons
├── components/
│   ├── Banner/           # Hero section with stats
│   ├── Header/           # Sticky navbar with active NavLinks
│   ├── Footer/           # Footer
│   ├── Loader/           # Loading spinner
│   ├── RatingChart/      # Recharts rating visualization
│   ├── SingleAppCard/    # App card for grid view
│   ├── InstalledAppCard/ # App card for installation page
│   └── TrendingApps/     # Top rated apps section
├── Layouts/
│   └── Layouts.jsx       # Root layout with shared state
├── pages/
│   ├── Apps/             # All apps with live search
│   ├── AppDetails/       # Single app detail page
│   ├── Installation/     # Installed apps with sort
│   └── NotFound/         # Custom 404 page
├── Home.jsx              # Home page
└── main.jsx              # Router config and app entry
