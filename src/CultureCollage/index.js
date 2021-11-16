import { CollageRow } from "./CollageRow";
import style from "./index.module.css";

import rock from "./resources/rock.jpg";
import leia from "./resources/leia.jpg";
import ubuntuMoment from "./resources/hackerMan1.png";
import moon from "./resources/moon2.jpg";
import hailMary from "./resources/hailMary.jpg";
import volleyball from "./resources/volleyball.jpg";
import printer from "./resources/3dPrinter.jpg";
import omam from "./resources/songs2.png";
import hoplite from "./resources/hoplite.jpg";
import crazed from "./resources/crazed.jpg";

const collage = [
  ["Who am I\nExplain I try\nUse verse to converse", rock],
  ["Nature and wonder\nHike and explore\nAlways more", leia],
  ["Type type type\nPattern of dots\nMakes people nervous", ubuntuMoment],
  ["Looking from above\nSoar to the sky\nReach higher", moon],
  ["Far from now\nAnd far away\nExplore other worlds", hailMary],
  ["Stories to be shared\nFriendly faces\nLoud noises", volleyball],
  ["Spinning blade\nProblems to solve\nRevelations shared", printer],
  ["Faceted meaning\nLyrics with depth\nAnd neat beat", omam],
  ["Camouflage?\nI’m unafraid\nI need no mirage", hoplite],
  ["Use verse to converse\nExplain I try\nWho am I", crazed]
]

export function CultureCollage() {
  return (
    <div>
      <h1 className={style.collageTitle}>Culture Collage</h1>
      <table className={style.collageTable}>
        <tbody>
          {collage.map((e,i) => 
            <CollageRow
              text={e[0]}
              img={e[1]}
              index={i}
              key={i}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}
