import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import '@fontsource/cairo/800.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <HashRouter>
      <App />
    </HashRouter>
);
reportWebVitals();
