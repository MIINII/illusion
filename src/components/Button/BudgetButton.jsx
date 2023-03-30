import pig from '@/assets/money-pig.svg';

import styles from '@/components/Button/Budget.module.scss';

const BudgetButton = ({ btnName, btnNameEng }) => {
  return (
    <>
      <button className={styles.buttonWrapper} type='submit'>
        <img src={pig} alt='들어온 돈 입력' width='80px' />
        <div>
          <p>{btnName}</p>
          <span>{btnNameEng}</span>
        </div>
      </button>
    </>
  );
};

export default BudgetButton;
