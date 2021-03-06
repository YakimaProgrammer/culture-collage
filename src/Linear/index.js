import style from "./index.module.css";
import sharedStyle from "../shared.module.css";

import hallway1 from "./resources/webp/hallway1.webp";
import hallway2 from "./resources/webp/hallway2.webp";
import hallway3 from "./resources/webp/hallway3.webp";
import keyboard from "./resources/webp/keyboard.webp";
import lockers from "./resources/webp/lockers.webp";
import wall from "./resources/webp/wall.webp";
import wall2 from "./resources/webp/wall2.webp";
import track from "./resources/webp/track.webp";

export function Linear() {
  return (
    <div>
      <h1 className={sharedStyle.title}>Linear</h1>
      <div className={style.linearContainer}>
        <img src={hallway1} alt="" />
        <img src={hallway2} alt="" />
        <img src={hallway3} alt="" />
        <img src={keyboard} alt="" />
        <img src={lockers} alt="" />
        <img src={wall} alt="" />
        <img src={wall2} alt="" />
        <img src={track} alt="" />
      </div>
    </div>
  )
}