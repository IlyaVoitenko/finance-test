import style from './style.module.css';

const ListItem = ({ item }) => {
  const { change, ticker, price, dividend } = item;
  return (
    <div className={style.container}>
      <div className={style.tickerAndPrice}>
        <span className={style.nameTicker}>{ticker}</span>
        <span className={style.priceTicker}>{price}</span>
      </div>
      <div className={style.changeAndDividend}>
        <span className={style.changeTicker}>{change}</span>
        <span className={style.dividend}>{dividend}</span>
      </div>
    </div>
  );
};
export default ListItem;
