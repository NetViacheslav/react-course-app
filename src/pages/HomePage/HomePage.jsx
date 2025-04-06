import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader';
import { QuestionCardList } from '../../components/QuestionCardList';
import { SearchInput } from '../../components/SearchInput';
import { API_URL } from '../../constants';
import { useFetch } from '../../hooks/useFetch';
import cls from './HomePage.module.css';

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();
    setQuestions(questions);

    return questions;
  });

  useEffect(() => {
    getQuestions('react');
  }, []);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className={cls.controlsContainer}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </>
  );
};
