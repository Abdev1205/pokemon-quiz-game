import { QuestionType } from "@/types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export type Game = {
  id: string;
  question: QuestionType;
  answer: string[];
  score: number;
  options?: string[];
  selected?: string[];
  wrong?: string[];
  correct?: string[];
  status: "playing" | "completed";
};

export type GameStore = {
  games: Game[];
  setGame: (game: Game) => void;
  updateGame: (id: string, game: Game) => void;
};

export const useGameStore = create<GameStore>()(
  devtools(
    persist(
      (set) => ({
        games: [] as Game[],
        setGame: (game: Game) =>
          set((state) => ({ games: [...state.games, game] })),
        updateGame: (id: string, game: Game) =>
          set((state) => ({
            games: state.games.map((g) => (g.id === id ? game : g)),
          })),
      }),
      {
        name: "game-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
