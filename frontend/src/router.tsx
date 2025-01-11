import { createBrowserRouter } from "react-router-dom";
import ConfigProvider from "./provider/ConfigProvider";
import App from "./App";
import GamePage from "./pages/Game/Game";
import PlayGame from "./pages/Game/PlayGame";
import GameStatsPage from "./pages/Stats/GameStatsPage";
import StatsPage from "./pages/Stats/StatsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ConfigProvider>
        <App />
      </ConfigProvider>
    ),
  },
  {
    path: "/game",
    element: (
      <ConfigProvider>
        <GamePage />
      </ConfigProvider>
    ),
  },
  {
    path: "/game/:gameId/play",
    element: (
      <ConfigProvider>
        <PlayGame />
      </ConfigProvider>
    ),
  },
  {
    path: "/game/:gameId/stats",
    element: (
      <ConfigProvider>
        <GameStatsPage />
      </ConfigProvider>
    ),
  },
  {
    path: "/stats",
    element: (
      <ConfigProvider>
        <StatsPage />
      </ConfigProvider>
    ),
  },
]);

export default router;
