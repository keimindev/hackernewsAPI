import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router';
import styled from "styled-components"

import Board from "./pages/Board";
import Main from "./pages/Main";
import Detail from "./pages/Detail";


function App() {
  return (
    <Wrap>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board/:id" element={<Board/>} />
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
width: 60%;
margin: 0 auto;
`;