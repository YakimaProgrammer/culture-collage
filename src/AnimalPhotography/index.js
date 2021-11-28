import Masonry from "react-responsive-masonry"
import style from "./index.module.css";

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
import sleep from "./resources/sleep.jpg";
import staring_into_the_fog from "./resources/staring-into-the-fog.jpg";
import staring_off_into_the_distance from "./resources/staring-off-into-the-distance.jpg";
import toy from "./resources/toy.jpg";
import water from "./resources/water.jpg";
import window from "./resources/window.jpg";

//https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const images = shuffle([bird, chipmunk, furgus, glowing_eyes, intense_stare, leia, mud, pondering, porter2, porter, rope, rosco, rosco_shake1, rosco_shake2, rosco_stare, sleep1, sleep3, sleep4, sleep5, sleep, staring_into_the_fog, staring_off_into_the_distance, toy, water, window]);

/*
export class AnimalPhotography extends Component {
  constructor(props) {
    super(props);

    this.imagesRemaining = images.length;
    this.onImageLoad = this.onImageLoad.bind(this);
    this.collageRef = createRef();
    this.masonry = null; //defined later, once all the images are loaded
  }

  render() {
    return (
      <div ref={this.collageRef}>
        {images.map((url, i) => (
          <img 
            src={url} 
            key={i} 
            alt="" 
            className={style.grid_item}
            onLoad={this.onImageLoad} 
            />
        ))}
      </div>
    )
  }

  onImageLoad() {
    this.imagesRemaining -= 1;

    if (this.imagesRemaining === 0) {
      this.masonry = new Masonry(this.collageRef, {
        itemSelector: style.grid_item,
        columnWidth: 200
      });
    }
  }
}
*/

export function AnimalPhotography() {
  return (
    <Masonry columnsCount={Math.floor(window.clientWidth / 300)}>
      {images.map((url, i) => <img src={url} key={i} alt="" className={style.masonry_image} />)}
    </Masonry>
  )
}