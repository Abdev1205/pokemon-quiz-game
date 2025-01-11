import GameActions from "@/actions/game";
import { useQuery } from "@tanstack/react-query";
import QuestionCards from "./QuestionCards";
import { Button } from "@/components/ui/button";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionCardShimmer from "./QuestionCardShimmer";
import LoadingModel from "../modal/LoadingModel";
import { v4 as uuidV4 } from "uuid";
import { useGameStore } from "@/store/gameStore";

export type QuestionSelected = {
  id: number;
  index: number;
};

const DisplayQuestion = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [questionselected, setQuestionSelected] = useState<QuestionSelected>({
    id: -1,
    index: -1,
  });
  const [, setShowModel] = useState(true);
  const { setGame } = useGameStore();

  const {
    data: game,
    isLoading,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: GameActions.createGame,
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  useEffect(() => {
    refetch();
  }, [pathname]);

  const handleGameCreation = () => {
    if (
      !questionselected ||
      questionselected.id === -1 ||
      questionselected.index === -1
    )
      return;

    const id = uuidV4();
    setGame({
      id,
      question: game?.question[questionselected.index],
      answer: game?.answer,
      score: 0,
      options: game?.options,
      status: "playing",
    });

    navigate(`${id}/play?${questionselected.id}`);
  };

  return (
    <div className=" flex flex-col  justify-center gap-[1rem] items-center ">
      <LoadingModel
        visible={isLoading || isFetching}
        onClose={() => setShowModel(false)}
      />
      <h2 className=" font-openSans font-[600] mt-[3rem] text-[1.7rem] ">
        Select your Fav Pokemons
      </h2>
      {isLoading || isFetching ? (
        <div className=" flex w-full h-fit justify-evenly gap-[1rem] mt-[3rem]   ">
          {[1, 2, 3].map((q: any) => (
            <QuestionCardShimmer key={q} />
          ))}
        </div>
      ) : (
        <div className=" flex w-full h-fit justify-evenly gap-[1rem] mt-[3rem]   ">
          {game?.question?.map((q: any, index: number) => (
            <QuestionCards
              key={q.id}
              data={q}
              questionselected={questionselected}
              selectQuestion={(id: number) =>
                setQuestionSelected({
                  id,
                  index,
                })
              }
            />
          ))}
        </div>
      )}
      <Button
        onClick={() => handleGameCreation()}
        className=" w-[10rem] bg-primary hover:bg-primary/70 rounded-full font-openSans mt-[2.5rem] "
      >
        Play Game
        <IoArrowForwardOutline />
      </Button>
    </div>
  );
};

export default DisplayQuestion;
