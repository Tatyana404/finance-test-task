import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { setTickers } from "../../store/tickersSlice";
import { getTickers } from "../../store/selector";
import FinanceThead from "./FinanceThead";
import FinanceItem from "./FinanceItem";
import style from "./styles.module.css";

const socket = io("http://localhost:4000");

export default function FinanceTable() {
  const tickers = useSelector(getTickers);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit("start");

    const dispatchTickers = (data) => dispatch(setTickers(data));

    socket.on("ticker", dispatchTickers);

    return () => socket.off("ticker", dispatchTickers);
  }, [dispatch]);

  const sortTickers = tickers.slice().sort((a, b) => b.price - a.price);

  return (
    <div>
      <table className={style.table}>
        <FinanceThead />

        <tbody className={style.tbody}>
          {sortTickers.map((ticker) => (
            <FinanceItem ticker={ticker} key={uuidv4()} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
