import { useLocation, Link } from 'react-router-dom'

import style from "./index.module.css";
import arrow from "./resources/arrow-left-square-fill.svg";

function BackButtonButton() {
  return (
    <Link to="">
      <div className={style.backButton}>
        <img src={arrow} alt="Go back"/>
      </div>
    </Link>
  )
}

//HOC
export function BackButton() {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  } else {
    return <BackButtonButton />
  }
}