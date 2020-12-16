import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/home/index';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import "./css/global.css"
import "./assets/font/iconfont.css"

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
