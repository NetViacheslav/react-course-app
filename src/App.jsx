// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';

function App() {
  return (
    // <>
    //   <MainLayout />
    // </>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="/forbidden" element={<div>forbidden !!!</div>} />
          <Route path="/addquestion" element={<div>add question</div>} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
