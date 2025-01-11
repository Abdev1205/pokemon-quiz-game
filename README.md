# Pokemon Game Dashboard

A Pokemon Game Dashboard built using React.js, Zustand for state management (with persistence in local storage), React Query, and the PokeAPI for real-time data fetching. The application also includes a stats page to provide detailed game statistics.

## Features

- **Real-Time Data**: Fetch Pokemon data using the [PokeAPI](https://pokeapi.co/).
- **State Management**: Utilizes Zustand for efficient state management with local storage persistence.
- **Interactive UI**: Modern UI with reusable components, animations, and loaders.
- **Stats Page**: Displays detailed game statistics.

## Folder Structure

```
📦 
├─ backend
│  ├─ dist
│  │  ├─ api/v1/game
│  │  │  └─ index.js
│  │  ├─ config
│  │  │  ├─ ENV.js
│  │  │  ├─ config.database.js
│  │  │  └─ config.env.js
│  │  ├─ controller/game/index.js
│  │  ├─ middleware/morgan.middleware.js
│  │  └─ utils/logger.js
│  ├─ src
│  │  ├─ api/v1/game/index.ts
│  │  ├─ config/ENV.ts
│  │  ├─ controller/game/index.ts
│  │  ├─ middleware/morgan.middleware.ts
│  │  └─ utils/logger.ts
│  └─ tsconfig.json
└─ frontend
   ├─ src
   │  ├─ App.tsx
   │  ├─ actions/game.ts
   │  ├─ assets
   │  │  ├─ animation/loading-pokemon.json
   │  │  ├─ common (images and assets)
   │  ├─ components
   │  │  ├─ animation/loadingAnimation.tsx
   │  │  ├─ custom (reusable components)
   │  │  ├─ game (game-specific components)
   │  │  └─ ui (UI primitives)
   │  ├─ config/ENV.ts
   │  ├─ pages
   │  │  ├─ Game (Game and PlayGame components)
   │  │  ├─ Home (Home page component)
   │  │  └─ Stats (GameStatsPage and StatsPage components)
   │  ├─ store/gameStore.ts
   │  └─ utils/axiosInstance.ts
   ├─ public
   ├─ tailwind.config.js
   ├─ tsconfig.json
   ├─ vite.config.ts
   └─ vercel.json
```

## Tech Stack

### Frontend
- **React.js**: Library for building user interfaces.
- **Zustand**: Lightweight state management library with persistence.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Lightning-fast build tool.
- **TypeScript**: Strongly typed programming language for better development experience.

### Backend
- **Node.js**: JavaScript runtime.
- **Morgan**: HTTP request logger middleware.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdev1205/pokemon-quiz-game
   cd <repository-folder>
   ```

2. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```bash
   cd ../backend
   npm install
   ```

### Running the Project

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   - this will give error first time so close server and start again
   ```

2. Start the frontend server:
   ```bash
   cd ../frontend
   npm run dev
   ```



## Demo
![image](https://github.com/user-attachments/assets/ec84fe9c-6f8c-4f80-8e38-429fff04e63d)

![image](https://github.com/user-attachments/assets/07c5a513-0377-4d60-bd17-8b4352ff967d)

![image](https://github.com/user-attachments/assets/6571cefe-a6e3-4cad-b31f-a98cbf25ca42)

![image](https://github.com/user-attachments/assets/c2e01380-4ad9-4bac-beaa-3b749d41f455)

![image](https://github.com/user-attachments/assets/ddf3fbc8-d82c-4c2c-bd24-220d3a577ed4)

![image](https://github.com/user-attachments/assets/6e63af20-5c27-4ba1-85f9-23e5ff33f1d3)






