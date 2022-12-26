import React from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="lg:absolute flex lg:flex-row flex-col lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[940px] lg:h-[600px] lg:bg-white lg:rounded-2xl lg:p-4">
        <SideBar />
        <Main />
      </div>
    </ContextProvider>
  );
}

export default App;
