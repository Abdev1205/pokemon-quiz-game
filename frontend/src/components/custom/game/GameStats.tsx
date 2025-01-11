import { Game, useGameStore } from "@/store/gameStore";
import { QuestionType } from "@/types";

import { useState } from "react";
import { useParams } from "react-router-dom";
import LoadingModel from "../modal/LoadingModel";
import Image from "../Image";
import SubmissionPieChart from "../charts/SubmissionPieChart";

const GameStats = () => {
  const { games } = useGameStore();
  const { gameId } = useParams();
  const [showPokemonLoader, setShowPokemonLoader] = useState(false);

  const currentGame = games.find(
    (game) => (game.id as string) === gameId
  ) as Game;
  const currentQuestion = currentGame?.question as QuestionType;
  const wrongOptions = currentGame?.wrong;
  const correctOptions = currentGame?.correct;
  const answer = currentGame?.answer;

  return (
    <div className="flex items-center justify-center w-full gap-[2rem] h-[calc(100vh-4rem)]  ">
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
          Your Submission
        </h2>
        {/* options */}
        <div className=" flex flex-wrap gap-[1rem] mt-[rem] ">
          {correctOptions?.map((option) => {
            return (
              <div
                className={` cursor-pointer active:scale-[.95] select-none duration-300  border-[1px]  w-fit px-[.5rem] py-[.3rem] rounded-full bg-green-100 text-green-600
                } `}
              >
                {option}
              </div>
            );
          })}

          {wrongOptions?.map((option) => {
            return (
              <div
                className={` cursor-pointer active:scale-[.95] select-none duration-300  border-[1px]  w-fit px-[.5rem] py-[.3rem] rounded-full bg-red-100 text-red-500
                } `}
              >
                {option}
              </div>
            );
          })}
        </div>
        <hr className=" bg-gray-400 h-[1px] " />
        <h2 className=" font-montserrat font-[600] text-[1.7rem] ">Answers</h2>
        <div className=" flex flex-wrap gap-[1rem] mt-[rem] ">
          {answer?.map((option) => {
            return (
              <div
                className={` cursor-pointer active:scale-[.95] select-none duration-300  border-[1px]  w-fit px-[.5rem] py-[.3rem] rounded-full bg-green-100 text-green-600
                } `}
              >
                {option}
              </div>
            );
          })}
        </div>

        <div>
          <SubmissionPieChart
            correct={correctOptions?.length || 0}
            wrong={wrongOptions?.length || 0}
            total={answer?.length}
          />
        </div>
      </div>
    </div>
  );
};

export default GameStats;
