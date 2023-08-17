import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";

export const Context = createContext();

export const API = "https://api.dictionaryapi.dev/api/v2/entries/en";

const AppWrapper = () => {
  const [res, setRes] = useState(null); //this is for storing the user data of logged in user which is used in app.jsx file to not logged out when reloading the page
  const [showTabs, setShowTabs] = useState(false);
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState("noun");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Context.Provider
      value={{
        res,
        setRes,
        showTabs,
        setShowTabs,
        selectedPartOfSpeech,
        setSelectedPartOfSpeech,
        isPlaying,
        setIsPlaying,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
