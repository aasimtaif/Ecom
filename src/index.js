import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from './redux/index';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div>
  <Provider store={store}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </div>
);