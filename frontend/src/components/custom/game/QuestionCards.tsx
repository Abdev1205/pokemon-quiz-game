import React from "react";
import Image from "../Image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { QuestionSelected } from "./DisplayQuestion";

interface QuestionCardsProps {
  data: {
    id: number;
    image: string;
    name: string;
  };
  questionselected: QuestionSelected;
  selectQuestion: (id: number) => void;
}

const QuestionCards: React.FC<QuestionCardsProps> = ({
  data,
  questionselected,
  selectQuestion,
}) => {
  return (
    <div onClick={() => selectQuestion(data.id)}>
      <CardContainer containerClassName="py-0">
        <CardBody
          key={data.id}
          className={`w-[20rem] h-[20rem] gap-[1rem] cursor-pointer flex flex-col items-center justify-center bg-gray-50 relative group/card   hover:shadow-emerald-500/[0.1]   border-black/[0.1]  rounded-xl  border hover:border-primary duration-200 ${
            questionselected.id === data.id
              ? "border-primary border-[2px] "
              : ""
          }   `}
        >
          <CardItem translateZ="80">
            <Image
              src={data.image}
              alt={data.name}
              className=" w-full h-[15rem] object-contain   "
            />
          </CardItem>

          <CardItem>
            <p className=" font-montserrat font-[500] capitalize  ">
              {data.name}
            </p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default QuestionCards;
