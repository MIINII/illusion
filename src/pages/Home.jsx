import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';

// img
import pig from '@/assets/money-pig.svg';
import goneMoney from '@/assets/hand-coins.svg';

// style
import styles from '@/styles/Home.module.scss';

// components
import { BudgetButton, MoneyRecord, AssetModal } from '@/components';
import { useModal } from '@/hooks';

const Home = () => {
  const [modalOption, showModal] = useModal();

  const incomeOption = {
    show: true,
    type: ['용돈', '월급', '줍줍', '기타'],
    title: '놀랍게도 수입이 있어요!🥰',
    placeholder: '혹시나 들어온 돈이 있나요?',
    btnTitle: '돈이 들어왔따!ㅋㅋ',
    onSubmit: () => {},
    element: null,
  };

  const outOption = {
    show: true,
    type: ['외식', '쇼핑', '선물', '기타'],
    title: '돈을 또 어디다 쓰셨나요 🤮 ',
    placeholder: '에휴 또 얼마나 쓰셨어요',
    btnTitle: '카드값 확인 부탁드립니다.',
    onSubmit: () => {},
    element: null,
  };

  const onClick = useCallback(() => {
    const selectionStatus = { ...incomeOption }; // 선택 상태를 복사

    showModal(selectionStatus);
  }, [showModal]);

  /** useEffect(() => {
    document.body.style = `overflow:hidden`;
    return () => (document.body.style = `overflow:auto`);
  }, []); */

  return (
    <Fragment>
      <div className={styles.BtnWrapper}>
        <div>
          <BudgetButton
            btnClick={onClick}
            btnImg={pig}
            btnName={'혹시나 들어온 돈'}
            btnNameEng={'Income'}
            btnAlt={'들어온돈'}
          />
          <AssetModal modalOption={modalOption} />
        </div>

        <div>
          <BudgetButton
            btnClick={onClick}
            btnImg={goneMoney}
            btnName={'내 손을 떠난 돈'}
            btnNameEng={'Expenditure'}
            btnAlt={'나간돈'}
          />
          <AssetModal modalOption={modalOption} />
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
