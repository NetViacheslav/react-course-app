// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { HomePage } from './pages/HomePage';
import { QuestionPage } from './pages/QuestionPage';
import { AddQuestionPageLazy } from './pages/AddQuestionPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { EditQuestionPageLazy } from './pages/EditQuestionPage';
import { useAuth } from './hooks/useAuth';
import { AuthProvider } from './auth/AuthProvider';
import { ForbiddenPage } from './pages/ForbiddenPage';

const ProtectedRoutes = () => {
  const { isAuth } = useAuth();
  const location = useLocation;

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/forbidden" state={{ from: location.pathname }} replace />
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/forbidden" element={<ForbiddenPage />} />
            <Route path="/addquestion" element={<AddQuestionPageLazy />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/question/:id" element={<QuestionPage />} />
              <Route
                path="/editquestion/:id"
                element={<EditQuestionPageLazy />}
              />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
