import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
