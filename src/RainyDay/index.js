import { Component, createRef } from "react";
import style from "./index.module.css";
import sharedStyle from "../shared.module.css";

import details from "./resources/webp/details.webp";
import drop from "./resources/webp/drop.webp";
import hand from "./resources/webp/hand.webp";
import leaf from "./resources/webp/leaf.webp";
import rainbow from "./resources/webp/rainbow.webp";

//https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const images = shuffle([details, drop, hand, leaf, rainbow]);

class RainDrop extends Component {
  constructor(props) {
    super(props);

    this.state = {ready: false};

    const columnWidth = window.innerWidth / props.total;

    this.styleStart = {
      opacity: 0,
      left: columnWidth / 2 * Math.random() + columnWidth * props.pos + "px",
      width: columnWidth / 4 + (columnWidth / 2) * Math.random() + "px",
      height: "auto",
      top: 0
    };

    this.onImgLoad = this.onImgLoad.bind(this);
    this.imgRef = createRef();
  }

  onImgLoad() {
    this.setState({ready: true});

    this.styleStop = {
      top: (window.innerHeight - this.imgRef.current.height - 100) * Math.random() + 100 + "px",
      opacity: 1
    };
  }

  render() {
    return (
      <img 
        src={this.props.src} 
        style={{...this.styleStart, ...(this.state.ready && this.styleStop)}} 
        className={style.rainDrop}
        onLoad={this.onImgLoad}
        ref={this.imgRef}
        alt=""
        />
    )
  }
}

export function RainyDay() {
  return (
    <div>
      <h1 className={sharedStyle.title}>Rainy Day</h1>
      {images.map((url, i) => <RainDrop src={url} pos={i} total={images.length} key={i} />)}
    </div>
  )
}