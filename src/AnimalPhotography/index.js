import Masonry from "react-responsive-masonry"
import style from "./index.module.css";
import sharedStyle from "../shared.module.css";

import bird from "./resources/bird.jpg";
import chipmunk from "./resources/chipmunk.jpg";
import furgus from "./resources/furgus.jpg";
import glowing_eyes from "./resources/glowing-eyes.jpg";
import intense_stare from "./resources/intense-stare.jpg";
import leia from "./resources/leia.jpg";
import mud from "./resources/mud.jpg";
import pondering from "./resources/pondering.jpg";
import porter2 from "./resources/porter2.jpg";
import porter from "./resources/porter.jpg";
import rope from "./resources/rope.jpg";
import rosco from "./resources/rosco.jpg";
import rosco_shake1 from "./resources/rosco-shake1.jpg";
import rosco_shake2 from "./resources/rosco-shake2.jpg";
import rosco_stare from "./resources/rosco-stare.jpg";
import sleep1 from "./resources/sleep1.jpg";
import sleep3 from "./resources/sleep3.jpg";
import sleep4 from "./resources/sleep4.jpg";
import sleep5 from "./resources/sleep5.jpg";
//import sleep from "./resources/sleep.jpg";
import staring_into_the_fog from "./resources/staring-into-the-fog.jpg";
import staring_off_into_the_distance from "./resources/staring-off-into-the-distance.jpg";
import toy from "./resources/toy.jpg";
import water from "./resources/water.jpg";
import staring_out_the_window from "./resources/window.jpg";

const images = [rosco_shake1, staring_out_the_window, sleep5, porter2, sleep3, staring_off_into_the_distance, glowing_eyes, water, sleep4, furgus, rosco, leia, rope, chipmunk, intense_stare, sleep1, rosco_shake2, mud, staring_into_the_fog, pondering, toy, bird, porter, rosco_stare];

export function AnimalPhotography() {
  return (
    <div>
      <h1 className={sharedStyle.title}>Animal Photography</h1>
      <Masonry columnsCount={Math.max(1, Math.floor(window.innerWidth / 300))}>
        {images.map((url, i) => <img src={url} key={i} alt="" className={style.masonry_image} />)}
      </Masonry>
    </div>
  )
}