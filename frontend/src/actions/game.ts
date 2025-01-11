import api from "@/utils/axiosInstance";

class GameActions {
  static async createGame() {
    try {
      const res = await api.get("/game/create");
      return res.data;
    } catch (error) {
      return error;
    }
  }

  static async submitGame(data: any) {
    try {
      const res = await api.post("/game/submit", data);
      return res.data;
    } catch (error) {
      return error;
    }
  }
}

export default GameActions;
