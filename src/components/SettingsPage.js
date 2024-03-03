import React, { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import { BackButton } from "./BackButton";

export const SettingsPage = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        min={1}
        max={120}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
      />
      <label>Break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        min={1}
        max={60}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
      />
      <div style={{textAlign:"center" ,marginTop:"20px"}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
      </div>
    </div>
  );
};
