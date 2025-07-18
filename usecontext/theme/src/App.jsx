import React from "react";
import Themebtn from "./components/Themebtn";
import Card from "./components/card";

function App() {
  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"><Themebtn/></div>

        <div className="w-full max-w-sm mx-auto"><Card/></div>
      </div>
    </div>
  );
}

export default App;
