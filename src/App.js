import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './components/layout/Main';
import Home from './components/page/Home';
import About from './components/page/About';
import Privacy from './components/page/Privacy';
import Login from './components/page/Login';
import ProtectedRoute from './components/page/ProtectedRoute';

function App() {
  const theme = useSelector((state) => state.themeState.value);

  return (
    <div className={`${theme ? 'dark' : ''} `}>
      <div className="w-screen h-screen bg-base dark:bg-dark flex flex-col transition-all duration-300">
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
