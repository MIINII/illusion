import React, { Fragment, useEffect, useRef, useState } from 'react';

// img
import pig from '@/assets/money-pig.svg';
import goneMoney from '@/assets/hand-coins.svg';

// style
import styles from '@/styles/Home.module.scss';

// components
import { BudgetButton, MoneyRecord, AssetModal } from '@/components';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    document.body.style = `overflow:hidden`;
    return () => (document.body.style = `overflow:auto`);
  }, []);

  return (
    <Fragment>
      <div className={styles.BtnWrapper}>
        <div>
          <BudgetButton
            btnClick={openModal}
            btnImg={pig}
            btnName={'혹시나 들어온 돈'}
            btnNameEng={'Income'}
            btnAlt={'들어온돈'}
          />
          {modalOpen && (
            <AssetModal
            modalType={income}
              modalTitle={'놀랍게도 수입이 있어요!🥰'}
              modalPlaceholder={'혹시나 들어온 돈이 있나요?'}
              btnName={'돈이 들어왔따!ㅋㅋ'}
              close={closeModal}
            />
          )}
        </div>

        <div>
          <BudgetButton
            btnClick={openModal}
            btnImg={goneMoney}
            btnName={'내 손을 떠난 돈'}
            btnNameEng={'Expenditure'}
            btnAlt={'나간돈'}
          />
          {modalOpen && (
            <AssetModal
              modalTitle={'어디다 썼어요..?😶'}
              modalPlaceholder={'얼마나 나갔는지 말해주세요'}
              btnName={'돈나감요 ㅠ'}
              close={closeModal}
            />
          )}
        </div>
      </div>

      <main className={styles.moneyRecord}>
        <h2>1월</h2>

        <section className={styles.incomeWrapper}>
          <div>
            <section className={styles.kindOfIncome}>
              <h3 className={styles.kindOfMoney}>💰 고정으로 들어오는 돈</h3>
              <span className={styles.incomeMoney}>2,400,000원</span>
            </section>
            <MoneyRecord inOrOut={'in'} kindOfIcon={'company'} />
          </div>

          <div>
            <section className={styles.kindOfIncome}>
              <h3 className={styles.kindOfMoney}>🍀 혹여나 들어온 돈</h3>
              <span className={styles.incomeMoney}>2,400,000원</span>
            </section>
            <MoneyRecord inOrOut={'in'} kindOfIcon={'company'} />
            <MoneyRecord inOrOut={'in'} kindOfIcon={'company'} />
            <MoneyRecord inOrOut={'in'} kindOfIcon={'company'} />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
