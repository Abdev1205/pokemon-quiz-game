import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const QuestionCardShimmer: React.FC = () => {
  return (
    <Skeleton className="w-[20rem] h-[20rem] gap-[1rem] cursor-pointer flex flex-col items-center rounded-xl justify-center ">
      <Skeleton className="w-full h-full" />
    </Skeleton>
  );
};

export default QuestionCardShimmer;
