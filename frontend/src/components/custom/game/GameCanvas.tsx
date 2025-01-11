import { useState } from "react";

import Image from "../Image";
import { Game, useGameStore } from "@/store/gameStore";
import { useNavigate, useParams } from "react-router-dom";
import { QuestionType } from "@/types";
import { IoClose } from "react-icons/io5";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import GameActions from "@/actions/game";
import LoadingModel from "../modal/LoadingModel";

const GameCanvas = () => {
  const { games, updateGame } = useGameStore();
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [optionSelected, setOptionSelected] = useState<string[]>([]);
  const [showPokemonLoader, setShowPokemonLoader] = useState(false);
  const gameMutation = useMutation({
    mutationFn: GameActions.submitGame,
    onMutate: () => {
      setShowPokemonLoader(true);
    },
    onSuccess: (data) => {
      setShowPokemonLoader(false);

      if (data) {
        updateGame(gameId as string, data);
        navigate(`/game/${gameId}/stats`);
      }
    },
    onError: () => {
      setShowPokemonLoader(false);
    },
  });

  const currentGame = games.find((game) => game.id === gameId) as Game;
  const currentQuestion = currentGame?.question as QuestionType;
  const currentOptions = currentGame?.options;

  const handleAddOption = (option: string) => {
    setOptionSelected([...optionSelected, option]);
  };

  const handleRemoveOption = (option: string) => {
    const newOptions = optionSelected.filter((opt) => opt !== option);
    setOptionSelected(newOptions);
  };

  const isOptionSelcted = (option: string) => {
    return optionSelected.includes(option);
  };

  const handleSubmitGame = () => {
    if (optionSelected.length === 0) return;

    const data = {
      gameId,
      answer: optionSelected,
      question: currentQuestion,
    };

    gameMutation.mutate(data);
  };

  return (
    <div className="flex items-center w-full gap-[2rem] h-[calc(100vh-4rem)]  ">
      {/* Question Cards */}
      <LoadingModel
        visible={showPokemonLoader}
        onClose={() => setShowPokemonLoader(false)}
      />
      <div
        className={`w-[25rem] shrink-0 h-[25rem] gap-[1rem] cursor-pointer flex flex-col items-center justify-center bg-gray-50 relative group/card   hover:shadow-emerald-500/[0.1]   border-black/[0.1]  rounded-xl  border hover:border-primary duration-200    `}
      >
        <div>
          <Image
            src={currentQuestion?.image}
            alt={currentQuestion?.name}
            className="object-contain w-full h-[18rem] "
          />
        </div>

        <div>
          <p className=" font-montserrat font-[500] capitalize  ">
            {currentQuestion?.name}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[1rem] py-[2rem] ">
        <h2 className=" font-montserrat font-[600] text-[1.7rem] ">
          Choose Correct Ability for the Pokemon
        </h2>
        {/* options */}
        <div className=" flex flex-wrap gap-[1rem] mt-[1rem] ">
          {currentOptions?.map((option) => {
            return (
              <div
                onClick={() => {
                  if (isOptionSelcted(option)) return;
                  handleAddOption(option);
                }}
                className={` cursor-pointer active:scale-[.95] select-none duration-300  border-[1px]  w-fit px-[.5rem] py-[.3rem] rounded-full ${
                  isOptionSelcted(option)
                    ? "bg-gray-50 text-black border-gray-600 opacity-40"
                    : "bg-blue-50/70 border-blue-600 text-blue-800 "
                } `}
              >
                {option}
              </div>
            );
          })}
        </div>

        <hr className=" bg-gray-400 h-[1px] " />

        <h2 className=" font-montserrat font-[500] text-[.97rem] ">
          Selcted Ability for the Pokemon
        </h2>
        {/* options */}
        <div className=" flex flex-wrap gap-[1rem] min-h-[6rem] mt-[1rem] ">
          {optionSelected?.map((option) => {
            return (
              <div
                className={`  flex items-center gap-[.3rem] active:scale-[.95] select-none duration-300  border-[1px]  w-fit px-[.9rem] hover:opacity-[.7] pr-[2.2rem] relative h-fit  py-[.3rem] rounded-full bg-green-600 text-white  border-gray-600`}
              >
                {option}
                <IoClose
                  onClick={() => handleRemoveOption(option)}
                  className="cursor-pointer mt-[.1rem] text-[1.3rem] absolute right-[.4rem] "
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-end gap-[1rem] mt-[1rem] ">
          <Button
            onClick={() => handleSubmitGame()}
            className="bg-primary hover:bg-primary/70 py-[1.4rem] px-[1.5rem] text-[1.12rem] w-fit active:scale-[.95] float-end text-white rounded-full mt-[1rem] "
          >
            <BsFillRocketTakeoffFill className="text-white" />
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCanvas;
