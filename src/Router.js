import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './views/Characters';
import Game from './views/Game';

const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Characters />}></Route>
            <Route exact path="/game" element={<Game />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  export default Router;