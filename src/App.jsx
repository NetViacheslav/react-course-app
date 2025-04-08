// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { HomePage } from './pages/HomePage';
import { QuestionPage } from './pages/QuestionPage';
import { AddQuestionPage } from './pages/AddQuestionPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    // <>
    //   <MainLayout />
    // </>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<div>forbidden !!!</div>} />
          <Route path="/addquestion" element={<AddQuestionPage />} />
          <Route path="/question/:id" element={<QuestionPage />} />

          <Route path="*" element={<NotFoundPage />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
