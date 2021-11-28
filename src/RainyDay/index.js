import { Component } from "react";
import style from "./index.module.css";
import sharedStyle from "../shared.module.css";

import details from "./resources/webp/details.webp";
import drop from "./resources/webp/drop.webp";
import hand from "./resources/webp/hand.webp";
import leaf from "./resources/webp/leaf.webp";
import rainbow from "./resources/webp/rainbow.webp";

class RainDrop extends Component {
  constructor(props) {
    super(props);

    this.state = {ready: false};

    this.styleStart = {
      opacity: 0,
      left: window.innerWidth * Math.random(),
      width: 15 + Math.random() * 10 + "%",
      height: "auto",
      top: 0
    };

    this.styleStop = {
      top: (window.innerHeight / 4 * 3) * Math.random(),
      opacity: 1
    };

    this.onImgLoad = this.onImgLoad.bind(this);
  }

  onImgLoad() {
    this.setState({ready: true});
  }

  render() {
    return (
      <img 
        src={this.props.src} 
        style={{...this.styleStart, ...(this.state.ready && this.styleStop)}} 
        className={style.rainDrop}
        onLoad={this.onImgLoad}
        alt=""
        />
    )
  }
}

export function RainyDay() {
  return (
    <div>
      <h1 className={sharedStyle.title}>Rainy Day</h1>
      <RainDrop src={details} />
      <RainDrop src={drop} />
      <RainDrop src={hand} />
      <RainDrop src={leaf} />
      <RainDrop src={rainbow} />
    </div>
  )
}