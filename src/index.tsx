import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<h1><App /></h1>)
