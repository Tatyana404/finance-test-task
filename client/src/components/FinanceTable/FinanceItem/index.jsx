import { backgroundTicker } from "../../../helpers";
import style from "./../styles.module.css";

export default function FinanceItem({ ticker }) {
  return (
    <tr className={style.tr}>
      <td className={backgroundTicker(ticker.ticker)}>{ticker.ticker}</td>
      <td>{ticker.exchange}</td>
      <td>{ticker.price} $</td>
      <td>{ticker.change} $</td>
      <td>{ticker.change_percent} %</td>
      <td>{ticker.dividend} %</td>
      <td>{ticker.yield} %</td>
    </tr>
  );
}
