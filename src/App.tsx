import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import "./App.css";
import { Toaster } from "react-hot-toast";
import EditorPage from "./pages/edittor_page";
function App() {
  return (
    <>
      <div>
        <Toaster></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/realtime-editor" element={<HomePage />}></Route>
          <Route path="/realtime-editor/editor/:roomId" element={<EditorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
