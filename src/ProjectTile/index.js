import style from "./index.module.css";

export function ProjectTile(props) {
  return (
    <div className={style.tileContainer}>
      <div className={style.tile}>
        <img src={props.img} className={style.coverImg} alt="" />
        <div className={style.description}><b>{props.description}</b></div>
      </div>
    </div>
  )
}