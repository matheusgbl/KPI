import Question from 'components/Question';
import QuestionTextArea from 'components/QuestionTextArea';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'firebase-config';
import React, { useEffect, useState } from 'react';

import { questions, write_question } from '../../data.json';
import { Container } from './styles';

export default function Questions() {
  let sum = 2;
  const questionsLength = questions.filter((item) => item.answers).length;

  const [titleIndex, setTitleIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(1);
  const [count, setCount] = useState(0);

  const [isFinal, setIsFinal] = useState(false);

  const [title, setTitle] = useState(questions[titleIndex]['title']);
  const [answer, setAnswer] = useState(questions[questionIndex]['answers']);

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const finalQuestionTitle = write_question[0]['title'];

  const answersCollectionRef = collection(db, 'answered_questions');

  const storeAnswer = async () => {
    await addDoc(answersCollectionRef, {
      answer: selectedAnswer,
    });

    setTitleIndex((prevState) => prevState + sum);
    setQuestionIndex((prevState) => prevState + sum);

    setCount((prevState) => prevState + 1);
    setSelectedAnswer('');
  };

  const storeAndFinalize = async () => {
    await addDoc(answersCollectionRef, { answer: selectedAnswer });
  };

  useEffect(() => {
    if (count === questionsLength - 1) {
      setIsFinal(true);
    } else {
      setTitle(questions[titleIndex]['title']);
      setAnswer(questions[questionIndex]['answers']);
    }
  }, [storeAnswer, storeAndFinalize]);

  const handleChange = (e: any) => {
    setSelectedAnswer(e.target.value);
  };

  return (
    <Container>
      {!isFinal ? (
        <Question
          answers={answer!}
          title={title!}
          disabled={selectedAnswer === '' ? true : false}
          onChange={handleChange}
          onClick={storeAnswer}
          button_text="Próxima pergunta"
        />
      ) : (
        <QuestionTextArea
          button_text="Finalizar questionário e visualizar resultados"
          title={finalQuestionTitle}
          onClick={storeAnswer}
          onChange={handleChange}
        />
      )}
    </Container>
  );
}
