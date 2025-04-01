import { useState, useEffect } from 'react';
import { QuestionCardList } from '../../components/QuestionCardList';
import { Loader } from '../../components/Loader';
import { API_URL } from '../../constants';
// import cls from './HomePage.module.css';

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      const questions = await response.json();

      setQuestions(questions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      <Loader />
      <QuestionCardList cards={questions} />
    </>
  );
};
