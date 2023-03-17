import React from 'react'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from "./components/Redux/Store"


const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </Provider>
)
