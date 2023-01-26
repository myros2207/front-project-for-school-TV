import React from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import StartPageComponent from "./Components/StartPageComponent";
import LoginComponent from "./Components/LoginComponent";
import LessonsComponent from './Components/LessonsComponent';
import LessonTest from "./Components/LessonTestFomatinInfo";

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
        <Route path ={"/lesson"} element={<LessonsComponent/>}></Route>
        <Route path ={"/test"} element={<LessonTest/>}></Route>

    </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
