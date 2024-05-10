"use client";

import { useQuery } from "@tanstack/react-query";

import { useGlobalContext } from "@/app/context/TriviaContext";
import { getQuestions } from "@/app/fetchers/questions";

const QuestionsPage = () => {
  const { triviaParams } = useGlobalContext();

  const amount = triviaParams[0];
  const category = triviaParams[1];
  const difficulty = triviaParams[2];

  const { data: questions } = useQuery({
    queryKey: ["questions"],
    queryFn: () => getQuestions({ amount, category, difficulty }),
  });

  return (
    <div className="text-white">
      QuestionsPage
      {questions?.map((question) => (
        <p key={question.question}>{question.question}</p>
      ))}
    </div>
  );
};

export default QuestionsPage;