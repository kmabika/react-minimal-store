import React from 'react';
import { createRoot } from 'react-dom/client';
import 'Style/index.css';
import 'Style/normalizer.css'
import App from "Component/App"

// let's register service-worker
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);