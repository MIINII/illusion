import React, { Fragment } from 'react';

// img
import pig from '@/assets/money-pig.svg';
import goneMoney from '@/assets/hand-coins.svg';

// style
import styles from '@/styles/Home.module.scss';

// components
import BudgetButton from '@/components/Button/BudgetButton';
import MoneyRecord from '@/components/MoneyRecord/MoneyRecord';

const Home = () => {
  return (
    <Fragment>
      <div className={styles.BtnWrapper}>
        <BudgetButton btnImg={pig} btnName={'혹시나 들어온 돈'} btnNameEng={'Income'} btnAlt={'들어온돈'} />
        <BudgetButton btnImg={goneMoney} btnName={'내 손을 떠난 돈'} btnNameEng={'Expenditure'} btnAlt={'나간돈'} />
      </div>

      <main className={styles.moneyRecord}>
        <h2>1월</h2>

        <div>
          <section className={styles.incomeWrapper}>
            <h3 className={styles.kindOfMoney}>💰 고정으로 들어오는 돈</h3>
            <span className={styles.incomeMoney}>2,400,000원</span>
          </section>
          <MoneyRecord inOrOut={'in'} kindOfIcon={'company'} />
        </div>

        <div>
          <section className={styles.incomeWrapper}>
            <h3 className={styles.kindOfMoney}>🍀 혹여나 들어온 돈</h3>
            <span className={styles.incomeMoney}>2,400,000원</span>
          </section>
          <MoneyRecord inOrOut={'in'} kindOfIcon={'company'} />
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
