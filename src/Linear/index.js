import { Carousel } from "../Carousel";
import sharedStyle from "../shared.module.css";
import hallway1 from "./resources/hallway1.jpg";
import hallway2 from "./resources/hallway2.jpg";
import hallway3 from "./resources/hallway3.jpg";
import keyboard from "./resources/keyboard.jpg";
import lockers from "./resources/lockers.jpg";
import wall from "./resources/wall.jpg";

export function Linear() {
  return (
    <div>
      <h1 className={sharedStyle.title}>Linear</h1>
      <Carousel>
        <img src={hallway1} alt="" />
        <img src={hallway2} alt="" />
        <img src={hallway3} alt="" />
        <img src={keyboard} alt="" />
        <img src={lockers} alt="" />
        <img src={wall} alt="" />
      </Carousel>
    </div>
  )
}