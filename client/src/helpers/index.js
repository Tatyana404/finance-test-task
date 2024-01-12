import style from "./../components/FinanceTable/styles.module.css";

export const backgroundTicker = (value) => {
  switch (true) {
    case ["FB"].includes(value):
      return style.blue;
    case ["TSLA"].includes(value):
      return style.red;
    case ["AMZN"].includes(value):
      return style.orange;
    case ["MSFT"].includes(value):
      return style.gray;
    case ["GOOGL"].includes(value):
      return style.bright_red;
    default:
      return style.bright_gray;
  }
};
