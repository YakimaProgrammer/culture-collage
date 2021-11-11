import { CollageRow } from "../CollageRow";
import style from "./index.module.css";

import rock from "../resources/rock.webp";
import leia from "../resources/leia.webp";
import ubuntuMoment from "../resources/hackerMan1.webp";
import moon from "../resources/moon2.webp";
import hailMary from "../resources/hailMary.webp";
import volleyball from "../resources/volleyball.webp";
import printer from "../resources/3dPrinter.webp";
import omam from "../resources/songs2.webp";
import hoplite from "../resources/hoplite.webp";
import crazed from "../resources/crazed.webp";

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

export function App() {
  return (
    <div>
      <h1 className={style.collageTitle}>Magnus Fulton</h1>
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
