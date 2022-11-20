import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter } from "react-router-dom";
import Combinations from "./pages/Combinations"
import Food from "./pages/Food"
import Materials from "./pages/Materials"
import Rooms from "./pages/Rooms"
import Sets from "./pages/Sets"
import Home from "./pages/Home"
import Mask from "./pages/Mask"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="combinations" element={<Combinations />} />
        <Route path="food" element={<Food />} />
        <Route path="materials" element={<Materials />} />
        <Route path="sets" element={<Sets />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="mask" element={<Mask />} />
        
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
