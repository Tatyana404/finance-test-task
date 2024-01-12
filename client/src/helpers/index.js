import style from './../Components/FinanceTable/styles.module.css'

export const styleTickers = value => {
  if (['FB'].includes(value)) {
    return style.blue
  } else if (['TSLA'].includes(value)) {
    return style.red
  } else if (['AMZN'].includes(value)) {
    return style.orange
  } else if (['MSFT'].includes(value)) {
    return style.gray
  } else if (['GOOGL'].includes(value)) {
    return style.bright_red
  } else {
    return style.bright_gray
  }
}
