import Masonry from "react-responsive-masonry"
import style from "./index.module.css";
import sharedStyle from "../shared.module.css";

import bird from "./resources/webp/bird.webp";
import chipmunk from "./resources/webp/chipmunk.webp";
import furgus from "./resources/webp/furgus.webp";
import glowing_eyes from "./resources/webp/glowingEyes.webp";
import intense_stare from "./resources/webp/intenseStare.webp";
import leia from "./resources/webp/leia.webp";
import mud from "./resources/webp/mud.webp";
import pondering from "./resources/webp/pondering.webp";
import porter2 from "./resources/webp/porter2.webp";
import porter from "./resources/webp/porter.webp";
import rope from "./resources/webp/rope.webp";
import rosco from "./resources/webp/rosco.webp";
import rosco_shake1 from "./resources/webp/roscoShake1.webp";
import rosco_shake2 from "./resources/webp/roscoShake2.webp";
import rosco_stare from "./resources/webp/roscoStare.webp";
import sleep1 from "./resources/webp/sleep1.webp";
import sleep3 from "./resources/webp/sleep3.webp";
import sleep4 from "./resources/webp/sleep4.webp";
import sleep5 from "./resources/webp/sleep5.webp";
import staring_into_the_fog from "./resources/webp/staringIntoTheFog.webp";
import staring_off_into_the_distance from "./resources/webp/staringOffIntoTheDistance.webp";
import toy from "./resources/webp/toy.webp";
import blackandwhite from "./resources/originals/blackandwhite.png"; //This is a black and white png. Any conversion to .webp is not worth the artifacts
import staring_out_the_window from "./resources/webp/window.webp";

const images = [rosco_shake1, pondering, sleep5, porter2, sleep3, staring_off_into_the_distance, glowing_eyes, blackandwhite, sleep4, furgus, rosco, leia, rope, chipmunk, intense_stare, sleep1, rosco_shake2, mud, staring_into_the_fog, staring_out_the_window, toy, bird, porter, rosco_stare];

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