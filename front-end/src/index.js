import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { configureStore } from '@reduxjs/toolkit';


const rootReducer=combineReducers({
  form:formReducer
})

const store=configureStore({
  reducer:rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <BrowserRouter>
 <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
