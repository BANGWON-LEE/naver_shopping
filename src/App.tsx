import './App.css';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path="/" />
          <Route element={<MainPage />} path="/main" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
