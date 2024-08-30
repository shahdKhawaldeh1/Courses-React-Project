import './App.css';
import './variables.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';
import Layout from './layout/Layout.jsx';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { FavoritesVisibilityProvider } from './context/FavoritesVisibilityContext';

function App() {

  return (
    <ThemeProvider>
       <FavoritesProvider>
       <FavoritesVisibilityProvider>
        <Router>
          <div className="App">
              <Layout >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Details />} />
                  </Routes>
              </Layout>
          </div>
        </Router>
        </FavoritesVisibilityProvider>
        </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
