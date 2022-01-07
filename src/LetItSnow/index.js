import { Component } from "react";
import { AlternatingCollage, CollageRow } from "../AlternatingCollage";
import style from "./index.module.css";
import sharedStyle from "../shared.module.css";
import collageStyle from "../AlternatingCollage/index.module.css";

import buriedInTheSnow from "./resources/webp/BuriedInTheSnow.webp";
import icicle from "./resources/webp/CROPPED_Icicle.webp";
import desolateSteets from "./resources/webp/desolate_streets.webp";
import iciclesFromBelow from "./resources/webp/IciclesFromBelow.webp";
import icicles from "./resources/webp/Icicles.webp";
import newRecord from "./resources/webp/NewRecordIThink.webp";
import proudOfHisWork from "./resources/webp/ProudOfHisWork.webp";
import smile from "./resources/webp/Smile.webp";
import snowyRoad from "./resources/webp/snowy_road.webp";
import snowCar from "./resources/webp/TheySaidItWasForWinterDriving.webp";
import waterslide from "./resources/webp/Waterslide.webp";
import another8Inches from "./resources/webp/Another8Inches.webp";
import lookOutBelow from "./resources/webp/LookOutBelow.webp";
import snowyBranches from "./resources/webp/SnowyBranches.webp";
import winterCityscape from "./resources/webp/WinterCityscape.webp";

class Snowflake extends Component {
  constructor(props) {
    super(props);

    this.state = {isHovered: false, invisible: false, timeout: -1};

    this.mouseIn = () => {
      this.setState({
        invisible: true, 
        lock: true, 
        timeout: setTimeout(() => this.setState({isHovered: true, invisible: false, timeout: -1}), 500)
      });
    }

    this.mouseOut = () => {
      if (this.state.timeout !== -1) {
        clearTimeout(this.state.timeout);
        this.setState({isHovered: false, invisible: false, timeout: -1});
      } else {
        this.setState({invisible: true});
        setTimeout(() => this.setState({isHovered: false, invisible: false}), 500);
      }
    }
  }

  render() {
    return (
      <img 
        src={this.props.src} 
        className={
          collageStyle.rowImg + " " + style.opacityTransition + " " + 
          (this.state.isHovered ? "" : style.snowflake) + " " +
          (this.state.invisible ? style.invisible : "")
        } 
        onMouseEnter={this.mouseIn}
        onMouseLeave={this.mouseOut}
        alt="" 
      />
    )
  }
}

export function LetItSnow() {
  return (
    <div className={style.overflowHandler}>
      <h1 className={sharedStyle.title}>Let it snow!</h1>

      <AlternatingCollage>
        <CollageRow>
          <Snowflake src={snowyRoad} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={desolateSteets} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={newRecord} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={snowCar} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={waterslide} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={icicles} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={iciclesFromBelow} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={icicle} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={another8Inches} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={lookOutBelow} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={snowyBranches} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={winterCityscape} />
        </CollageRow>
{/*
        <CollageRow>
          <Snowflake src={buriedInTheSnow} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={proudOfHisWork} />
        </CollageRow>

        <CollageRow>
          <Snowflake src={smile} />
        </CollageRow>
*/}
      </AlternatingCollage>
    </div>
  )
}