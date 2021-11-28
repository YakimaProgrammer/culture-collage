import { AlternatingCollage, CollageRow } from "../AlternatingCollage";
import sharedStyle from "../shared.module.css";

import rock from "./resources/webp/rock.webp";
import leia from "./resources/webp/leia.webp";
import ubuntuMoment from "./resources/originals/hackerMan1.png";
import moon from "./resources/webp/moon2.webp";
import hailMary from "./resources/webp/hailMary.webp";
import volleyball from "./resources/webp/volleyball.webp";
import printer from "./resources/webp/3dPrinter.webp";
import omam from "./resources/originals/songs2.png";
import hoplite from "./resources/webp/hoplite.webp";
import crazed from "./resources/originals/crazed.jpg";

export function CultureCollage() {
  return (
    <div>
      <h1 className={sharedStyle.title}>Culture Collage</h1>
      <AlternatingCollage>
        <CollageRow
          text={"Who am I\nExplain I try\nUse verse to converse"}
          img={rock}
        />

        <CollageRow
          text={"Nature and wonder\nHike and explore\nAlways more"}
          img={leia}
        />

        <CollageRow
          text={"Type type type\nPattern of dots\nMakes people nervous"}
          img={ubuntuMoment}
        />

        <CollageRow
          text={"Looking from above\nSoar to the sky\nReach higher"}
          img={moon}
        />

        <CollageRow
          text={"Far from now\nAnd far away\nExplore other worlds"}
          img={hailMary}
        />

        <CollageRow
          text={"Stories to be shared\nFriendly faces\nLoud noises"}
          img={volleyball}
        />

        <CollageRow
          text={"Hot plastic\nProblems to solve\nRevelations shared"}
          img={printer}
        />

        <CollageRow
          text={"Faceted meaning\nLyrics with depth\nAnd neat beat"}
          img={omam}
        />

        <CollageRow
          text={"Camouflage?\nI’m unafraid\nI need no mirage"}
          img={hoplite}
        />

        <CollageRow
          text={"Use verse to converse\nExplain I try\nWho am I"}
          img={crazed}
        />
      </AlternatingCollage>
    </div>
  )
}
