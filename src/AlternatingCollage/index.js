import { cloneElement } from "react";
import style from "./index.module.css";

export function AlternatingCollage(props) {
  return (
    <table className={style.collageTable}>
      <tbody>
        {props.children.map((c, i) => cloneElement(c, {index: i}))}
      </tbody>
    </table>
  );
}

export function CollageRow(props) {
  const text = (
    <td className={style.collageRow}>
      <pre className={style.rowText}>
        {props.text}
      </pre>
    </td>
  );

  const img = (
    <td className={style.collageRow}>
      <img src={props.img} className={style.rowImg} alt="" />
    </td>
  );
  
  if (!!(props.index % 2)) {
    return (
      <tr>
        {img}
        {text}
      </tr>
    );
  } else {
    return (
      <tr>
        {text}
        {img}
      </tr>
    );
  }
}