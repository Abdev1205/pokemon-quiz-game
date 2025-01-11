export type QuestionType = {
  id: number;
  image: string;
  name: string;
};

export type AnswerType = {
  id: string;
  status: "playing" | "completed";
  correct: string[];
  wrong: string[];
  selected: string;
  score: number;
  question: QuestionType;
  answer: string[];
};
