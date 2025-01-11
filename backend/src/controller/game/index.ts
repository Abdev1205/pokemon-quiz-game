import axios from "axios";
import { Request, Response } from "express";
import ENV from "../../config/ENV.js";

class GameController {
  static async createGame(req: Request, res: Response) {
    try {
      const pokRes = await axios.get(`${ENV.POKE_API_URL}/pokemon?limit=1302`);

      const pokemons = pokRes?.data?.results;

      // Trying to generate 3 random number to get random pokemon for game
      let randomPokemons = [];
      while (randomPokemons.length < 3) {
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        if (!randomPokemons.includes(randomIndex)) {
          randomPokemons.push(randomIndex);
        }
      }

      const selectedPokemons = await Promise.all(
        randomPokemons.map(async (index) => {
          const pokDetails = await axios.get(pokemons[index].url);
          const pokAbilities = await pokDetails.data.abilities.map(
            (a) => a.ability.name
          );
          const image = `${ENV.POKE_IMG_URL}/${pokDetails.data.id}.svg`;

          return {
            name: pokDetails.data.name,
            id: pokDetails.data.id,
            abilities: pokAbilities,
            image,
          };
        })
      );

      const question = selectedPokemons.map((p) => {
        return {
          id: p.id,
          name: p.name,
          image: p.image,
        };
      });
      const options = selectedPokemons.flatMap((p) => p.abilities);

      return res.status(200).json({ question, options });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default GameController;
