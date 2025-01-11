import axios from "axios";
import ENV from "../../config/ENV.js";
class GameController {
    static async createGame(req, res) {
        try {
            const pokRes = await axios.get(`${ENV.POKE_API_URL}/pokemon?limit=200`);
            const pokemons = pokRes?.data?.results;
            // Trying to generate 3 random number to get random pokemon for game
            let randomPokemons = [];
            while (randomPokemons.length < 3) {
                const randomIndex = Math.floor(Math.random() * pokemons.length);
                if (!randomPokemons.includes(randomIndex)) {
                    randomPokemons.push(randomIndex);
                }
            }
            const selectedPokemons = await Promise.all(randomPokemons.map(async (index) => {
                const pokDetails = await axios.get(pokemons[index].url);
                const pokAbilities = await pokDetails.data.abilities.map((a) => a.ability.name);
                const image = `${ENV.POKE_IMG_URL}/${pokDetails.data.id}.svg`;
                return {
                    name: pokDetails.data.name,
                    id: pokDetails.data.id,
                    abilities: pokAbilities,
                    image,
                };
            }));
            const question = selectedPokemons.map((p) => {
                return {
                    id: p.id,
                    name: p.name,
                    image: p.image,
                };
            });
            const options = selectedPokemons.flatMap((p) => p.abilities);
            return res.status(200).json({ question, options });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async submitGame(req, res) {
        try {
            const { gameId, answer, question } = req.body;
            const getAnswerOfQuestion = await axios.get(`${ENV.POKE_API_URL}/pokemon/${question.id}`);
            const correctAnswer = getAnswerOfQuestion?.data?.abilities?.map((a) => a?.ability?.name);
            const correct = [];
            const wrong = [];
            answer.forEach((ans) => {
                if (correctAnswer.includes(ans)) {
                    correct.push(ans);
                }
                else {
                    wrong.push(ans);
                }
            });
            const selected = answer;
            const score = correct.length > 0
                ? (correct?.length / correctAnswer?.length) * 100
                : 0;
            return res.status(200).json({
                id: gameId,
                correct,
                wrong,
                selected,
                score,
                question,
                status: "completed",
                answer: correctAnswer,
            });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
export default GameController;
