import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
