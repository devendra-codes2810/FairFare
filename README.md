# FairFare – Smart Travel Price Guide

> A web application that helps tourists visiting Varanasi know the **real and fair prices** of auto/taxi fares, hotels, street food and tourist attractions — so they are never overcharged.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Problem Statement](#problem-statement)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [Project Architecture](#project-architecture)
6. [Folder Structure](#folder-structure)
7. [Setup & Installation](#setup--installation)
8. [How to Run](#how-to-run)
9. [How to Build for Production](#how-to-build-for-production)
10. [API Integration](#api-integration)
11. [Authentication System](#authentication-system)
12. [Key React Concepts Used](#key-react-concepts-used)
13. [Screenshots](#screenshots)
14. [Interview Preparation](#interview-preparation)
15. [Future Enhancements](#future-enhancements)
16. [Developer](#developer)

---

## Project Overview

**FairFare** is a responsive single-page web application (SPA) built using **React.js**. It acts as a trusted price guide for tourists in Varanasi by providing:

- Verified auto-rickshaw and taxi fare ranges for popular routes
- Hotel listings by budget category
- Famous street food spots with actual price ranges
- Tourist attraction entry ticket prices (Indian vs foreign pricing)
- Common tourist scam alerts with avoidance tips
- A traveler review system for community price reporting
- Google Maps integration for route visualization
- User authentication (Login/Signup)

---

## Problem Statement

Tourists visiting Varanasi often face:

- Auto-rickshaw drivers charging **3–5× the normal fare**
- Unlicensed guides charging high commissions
- Confusion about entry ticket prices at temples and museums
- No single reliable source of local price information

**FairFare solves this** by providing a single verified platform where travelers can check fair prices before they travel.

---

## Features

| Feature | Description |
|---|---|
| Fare Calculator | Select from/to location + vehicle type → shows fair price range and max limit |
| Google Maps Route | Live Google Maps embed that updates with every route selection |
| Hotel Guide | 10 hotels with filter by budget/mid/premium |
| Street Food Guide | 10 famous spots with prices and location |
| Tourist Places | 8 top attractions with timings, auto fare and distance |
| Ticket Prices | Entry fees for all major places — Indian vs foreign pricing |
| Scam Alerts | 8 real scams with how to avoid them |
| Traveler Reviews | Submit price reports, read others' experiences |
| Login / Signup | User authentication with localStorage |
| Responsive Design | Works perfectly on mobile, tablet, and desktop |

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework — component-based architecture |
| React Router v6 | Client-side routing — navigation between pages |
| Context API | Global state management — auth state shared across app |
| React Hooks | `useState`, `useEffect`, `useContext`, `useNavigate` |
| CSS3 | Styling — Flexbox, Grid, CSS Variables, media queries |
| Google Fonts | Typography — Syne (headings) + DM Sans (body) |

### APIs Used
| API | Purpose | Cost |
|---|---|---|
| Google Maps Embed API | Show route and location maps | Free (no API key for embed) |

### Storage
| Technology | Purpose |
|---|---|
| localStorage | Store user accounts and session (client-side) |

---

## Project Architecture

```
User Browser
    │
    ▼
React App (Single Page Application)
    │
    ├── React Router v6         ← handles all page navigation
    │       └── Routes (/, /transport, /hotels, etc.)
    │
    ├── AuthContext (Context API) ← global auth state
    │       └── user, login(), signup(), logout()
    │
    ├── Components
    │       ├── Navbar          ← shows login/user state
    │       ├── Footer          ← links across app
    │       └── MapEmbed        ← reusable Google Maps iframe
    │
    ├── Pages
    │       ├── Home            ← hero, search, feature cards
    │       ├── Transport       ← fare calculator + map + reviews
    │       ├── Hotels          ← hotel grid with filter
    │       ├── Food            ← food cards
    │       ├── Places          ← tourist place cards
    │       ├── Tickets         ← entry fee tables
    │       ├── Scam            ← scam alert cards
    │       ├── Login           ← login form
    │       └── Signup          ← registration form
    │
    └── Data (src/data/)
            ├── fareData.js     ← all fare routes and vehicle data
            └── appData.js      ← hotels, food, places, scams, tickets
```

---

## Folder Structure

```
fairfare-react/
│
├── public/
│   └── index.html              ← HTML entry point (React mounts here)
│
├── src/
│   ├── index.js                ← React entry point (renders App inside BrowserRouter)
│   ├── App.jsx                 ← Main component with all Routes defined
│   │
│   ├── context/
│   │   └── AuthContext.jsx     ← Context API – login/signup/logout + global user state
│   │
│   ├── components/
│   │   ├── Navbar.jsx          ← Sticky navbar with NavLink and auth state
│   │   └── Footer.jsx          ← Footer + reusable MapEmbed component
│   │
│   ├── pages/
│   │   ├── Home.jsx            ← Landing page with hero, search, cards
│   │   ├── Transport.jsx       ← Fare calculator + Google Maps + Reviews
│   │   ├── Hotels.jsx          ← Hotels with filter (budget/mid/premium)
│   │   ├── Food.jsx            ← Street food guide
│   │   ├── Places.jsx          ← Tourist places
│   │   ├── Tickets.jsx         ← Entry ticket prices
│   │   ├── Scam.jsx            ← Scam alerts
│   │   ├── Auth.jsx            ← Login and Signup components
│   │   ├── Login.jsx           ← Re-exports Login from Auth.jsx
│   │   └── Signup.jsx          ← Re-exports Signup from Auth.jsx
│   │
│   ├── data/
│   │   ├── fareData.js         ← fareDB object, route lists, vehicle options
│   │   └── appData.js          ← hotels, food, places, scam, ticket data
│   │
│   └── styles/
│       └── global.css          ← All CSS — variables, layout, components, responsive
│
├── package.json                ← Dependencies and scripts
└── README.md                   ← This file
```

---

## Setup & Installation

### Prerequisites

Make sure you have these installed on your computer:

```
Node.js   version 16 or higher  →  https://nodejs.org
npm       version 8 or higher   →  comes with Node.js
```

Check your versions:
```bash
node --version
npm --version
```

### Step 1 — Download the project

If you downloaded the ZIP:
```bash
unzip fairfare-react.zip
cd fairfare-react
```

If you cloned from GitHub:
```bash
git clone https://github.com/yourusername/fairfare.git
cd fairfare
```

### Step 2 — Install dependencies

```bash
npm install
```

This will install React, React Router, and all other packages listed in `package.json`.
It creates a `node_modules` folder (never push this to GitHub).

---

## How to Run

### Start development server

```bash
npm start
```

- Opens automatically at **http://localhost:3000**
- Hot reload — changes appear instantly without refreshing
- Press `Ctrl + C` to stop

### Demo Login Credentials

```
Email    :  demo@fairfare.in
Password :  demo123
```

---

## How to Build for Production

When your project is ready to deploy:

```bash
npm run build
```

This creates an optimized `build/` folder with:
- Minified JavaScript
- Optimized CSS
- Static HTML

### Deploy to Netlify (free hosting)

1. Run `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `build/` folder
4. Your site goes live in seconds with a public URL like `https://fairfare.netlify.app`

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/fairfare",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

---

## API Integration

### Google Maps Embed API

FairFare uses the **Google Maps Embed API** which is **free and requires no API key** for basic usage.

**How it works in the code:**

The `MapEmbed` component in `src/components/Footer.jsx`:

```jsx
// src/components/Footer.jsx

export function MapEmbed({ query, height = 380, note }) {
  // Encode the search query for the URL
  const encoded = encodeURIComponent(query);
  
  // Build the Google Maps embed URL
  const src = `https://maps.google.com/maps?q=${encoded}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="map-embed-wrapper">
      <iframe
        src={src}
        title={`Map – ${query}`}
        width="100%"
        height={height}
        style={{ border: 0, borderRadius: '12px', display: 'block' }}
        allowFullScreen
        loading="lazy"
      />
      {note && <p className="map-note">📍 {note}</p>}
    </div>
  );
}
```

**How the map updates dynamically on the Transport page:**

```jsx
// src/pages/Transport.jsx

// The map query changes based on selected from/to
const mapQuery = `${from} to ${to} varanasi`;

// This string is passed to MapEmbed
// When user selects a new route, React re-renders MapEmbed
// with the new query, and the map shows the new route
<MapEmbed query={mapQuery} height={330} note="Map updates based on your selected route" />
```

### How to add Google Maps JavaScript API (for future upgrades)

If you want real-time distance and fare calculation:

1. Go to https://console.cloud.google.com
2. Create a project → Enable "Maps JavaScript API" and "Distance Matrix API"
3. Create an API key
4. Add to `.env` file:
```
REACT_APP_GOOGLE_MAPS_KEY=your_api_key_here
```
5. Access it in code:
```js
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;
```

**Important:** Never hardcode API keys in your source code. Always use `.env` files and add `.env` to `.gitignore`.

---

## Authentication System

FairFare uses **React Context API + localStorage** for authentication.

### Why Context API?

Without Context API, you would need to pass user data as props from App → Navbar → every page. Context API makes user state globally available to any component without prop drilling.

### How it works:

```jsx
// src/context/AuthContext.jsx

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create a Provider component that wraps the whole app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // On app load, restore session from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ff_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Login function
  const login = (email, password) => {
    // Check credentials → set user → save to localStorage
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('ff_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook — any component can call useAuth() to get user state
export function useAuth() {
  return useContext(AuthContext);
}
```

**Using auth in any component:**

```jsx
// In Navbar.jsx
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  
  return (
    <nav>
      {user ? (
        <>
          <span>Hi, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
```

---

## Key React Concepts Used

| Concept | Where Used | Why |
|---|---|---|
| `useState` | Transport.jsx, Hotels.jsx, Auth.jsx | Track form inputs, filter state, fare results |
| `useEffect` | AuthContext.jsx | Restore user session from localStorage on app load |
| `useContext` | Navbar, Login, Signup pages | Access global auth state without prop drilling |
| `useNavigate` | Login.jsx, Signup.jsx, Navbar.jsx | Redirect after login/logout |
| `NavLink` | Navbar.jsx | Auto-adds `active` class to current page link |
| `Routes/Route` | App.jsx | Define all page routes in one place |
| Context API | AuthContext.jsx | Share user state across all components |
| Props | MapEmbed component | Pass query, height, note to reusable component |
| Conditional rendering | Navbar, Transport | Show login button OR user name based on state |
| Array `.map()` | All pages | Render lists of hotels, food, scams from data arrays |
| `.filter()` | Hotels.jsx | Filter hotels by budget/mid/premium category |

---

## Screenshots

```
Home Page    →  Hero with search, 6 feature cards, Varanasi map
Transport    →  Fare calculator + live route map + traveler reviews
Hotels       →  10 hotels with budget filter
Food         →  10 street food spots with prices
Places       →  8 tourist attractions with timings and auto fare
Tickets      →  Entry fees table (Indian vs foreign)
Scam Alerts  →  8 scam descriptions with avoidance tips
Login        →  Email/password form with demo credentials
Signup       →  Registration form with validation
```

---

## Interview Preparation

### How to explain this project in interviews:

> *"I developed FairFare — a Smart Travel Price Guide for tourists visiting Varanasi. The problem I solved was that tourists get overcharged by auto-rickshaw drivers, fake guides and boat operators because they don't know local prices. I built a React.js single-page application where travelers can check fair auto fares for 20+ routes, see nearby hotels by budget, discover street food spots with real prices, and read scam alerts. I used React Router for navigation, Context API for authentication state management, and integrated Google Maps to show live route maps. The app is fully responsive and works on mobile."*

### Common interview questions for this project:

**Q: Why did you use React instead of plain HTML/CSS/JS?**
> React makes it easier to manage complex UI state — for example, when the user selects a route, the map automatically updates because React re-renders only the MapEmbed component. With plain JS I would manually query the DOM and update the iframe src. React handles this automatically through state.

**Q: What is the Context API and why did you use it?**
> Context API lets me share data globally without prop drilling. The `user` state in AuthContext is needed in Navbar, Login, Signup and potentially every page. Instead of passing it as props through every component, I wrapped the app in AuthProvider and any component can access it with `useAuth()`.

**Q: What is the difference between `useState` and `useEffect`?**
> `useState` manages data that can change — like selected from/to locations or filter state. `useEffect` runs side effects — I use it in AuthContext to check localStorage when the app first loads and restore any saved user session.

**Q: How does React Router work?**
> React Router intercepts URL changes and renders the matching component without actually loading a new HTML page from the server. I defined all routes in App.jsx — when the user clicks a NavLink, the URL changes and React Router renders the corresponding page component.

**Q: How would you connect this to a real backend?**
> I would replace the localStorage auth with API calls using `fetch()` or `axios`. For example, the login function would call `POST /api/auth/login` with email and password. The backend (Node.js + Express + MongoDB) would verify credentials and return a JWT token. I would store the token in localStorage and send it in the `Authorization` header of future API requests. The fare data and reviews would come from a database instead of hardcoded JS files.

---

## Future Enhancements

- [ ] Backend API with Node.js + Express + MongoDB
- [ ] JWT-based authentication with refresh tokens
- [ ] Real-time crowdsourced price updates by travelers
- [ ] More cities — Delhi, Agra, Jaipur, Goa
- [ ] AI chatbot powered by OpenAI API
- [ ] PWA (Progressive Web App) — installable on phone like a native app
- [ ] Push notifications for scam alerts in nearby areas
- [ ] Google Maps JavaScript API for real distance-based fare calculation
- [ ] Admin dashboard to manage price data

---

## Developer

**Name:** Devendra  
**Degree:** B.Tech CSE (Final Year)  
**Project Type:** Final Year Major Project  
**Year:** 2024–25

---

## License

This project is built for educational purposes as a B.Tech CSE final year project.
