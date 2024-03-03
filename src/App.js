import "./App.css";
import { SettingsPage } from "./components/SettingsPage";
import { Timer } from "./components/Timer";
import React, { useState } from "react";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main className="App">
      <h1 style={{marginBottom:'50px'}}>Pomodoro Counter</h1>
      <SettingsContext.Provider value={{ workMinutes, breakMinutes, showSettings, setWorkMinutes, setBreakMinutes, setShowSettings}}>
        {showSettings ? <SettingsPage /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
