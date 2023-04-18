import styles from '@/components/MoneyRecord/MoneyRecord.module.scss';

// icons
import company from '@/assets/icon-company.svg';

export const MoneyRecord = ({ inOrOut, kindOfIcon }) => {
  const icons = {
    company: { company },
  };

  return (
    <div className={styles.wrapper}>
      <div className={inOrOut === 'in' ? styles.inIcon : styles.outIcon}>
        <img src={icons.kindOfIcon} alt='sds' width='20px' />
      </div>
      <h4 className={styles.moneyName}>월급</h4>
      <span>[매월10일]</span>
      <span>2,400,000원</span>
    </div>
  );
};
