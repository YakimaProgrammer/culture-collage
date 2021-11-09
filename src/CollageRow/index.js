import style from "./index.module.css";

export function CollageRow(props) {
  const text = (
    <td className={style.collageRow}>
      <pre className={style.rowText}>
        {props.text}
      </pre>
    </td>
  )

  const img = (
    <td className={style.collageRow}>
      <img src={props.img} className={style.rowImg} alt="" />
    </td>
  )

  if (!!(props.index % 2)) {
    return (
      <tr>
        {text}
        {img}
      </tr>
    )
  } else {
    return (
      <tr>
        {img}
        {text}
      </tr>
    )
  }
}