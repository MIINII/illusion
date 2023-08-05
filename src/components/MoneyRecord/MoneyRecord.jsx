import styles from '@/components/MoneyRecord/MoneyRecord.module.scss';

// icons
import company from '@/assets/icon-company.svg';

export const MoneyRecord = ({ inOrOut, kindOfIcon, income_name, money, date }) => {
  const icons = {
    company,
  };

  const koMoney = money.toLocaleString('ko-KR');

  return (
    <div className={styles.wrapper}>
      <div className={inOrOut === 1 || inOrOut === 2 ? styles.inIcon : styles.outIcon}>
        <img src={icons[kindOfIcon]} alt='sds' width='20px' />
      </div>

      <h4 className={styles.moneyName}>{income_name}</h4>
      <span className={styles.date}>{date}</span>
      <span className={styles.money}>{koMoney}</span>
    </div>
  );
};
