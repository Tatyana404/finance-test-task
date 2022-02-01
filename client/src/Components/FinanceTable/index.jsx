import { useSelector, useDispatch } from 'react-redux'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { setTickers } from '../../store/tickersSlice'
import { getTickers } from '../../store/selector'
import FinanceItem from './FinanceItem'
import style from './styles.module.css'

const socket = io('http://localhost:4000')

export default function FinanceTable () {
  const tickers = useSelector(getTickers)
  const dispatch = useDispatch()

  useEffect(() => {
    socket.emit('start')
    socket.on('ticker', data => dispatch(setTickers(data)))
  }, [dispatch])

  const prepareTickers = tickers.slice().sort((a, b) => b.price - a.price)

  return (
    <table className={style.table}>
      <tbody className={style.tbody}>
        {prepareTickers.map(ticker => (
          <FinanceItem ticker={ticker} />
        ))}
      </tbody>
    </table>
  )
}
