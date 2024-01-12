import style from "./../styles.module.css";

export default function FinanceThead() {
  return (
    <thead className={style.thead}>
      <tr className={style.tr}>
        <th>Ticker</th>
        <th>Exchange</th>
        <th>Price</th>
        <th>Change</th>
        <th>Change percent</th>
        <th>Dividend</th>
        <th>Yield</th>
      </tr>
    </thead>
  );
}
