import React from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import StartPageComponent from "./Components/StartPageComponent";
import LoginComponent from "./Components/LoginComponent";

function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
        <Route path={"/"} element={
            <StartPageComponent/>
        }>
        </Route>
        <Route path={"/login"} element={<LoginComponent/>}></Route>
    </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
