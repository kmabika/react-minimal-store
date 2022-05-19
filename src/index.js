import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'Component/App';
import './fonts/fonts.css';
import './style/index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
