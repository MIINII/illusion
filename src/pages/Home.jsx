import React, { Fragment, useEffect, useRef, useState } from 'react';

// img
import pig from '@/assets/money-pig.svg';
import goneMoney from '@/assets/hand-coins.svg';

// style
import styles from '@/styles/Home.module.scss';

// components
import { BudgetButton, MoneyRecord, AssetModal } from '@/components';
import { getIncome } from '@/firebase';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const [date, setDate] = useState({});

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    document.body.style = `overflow:hidden`;

    getIncome().then((income) => {
      let incomeData = income;
      const formattedDates = [];

      // 날짜변경
      for (let i = 0; i < incomeData.length; i++) {
        const incomeDate = incomeData[i].income_date.toDate();

        const year = incomeDate.getFullYear();
        const month = ('0' + (incomeDate.getMonth() + 1)).slice(-2);
        const day = ('0' + incomeDate.getDate()).slice(-2);

        const formattedDate = `${year}-${month}-${day}`;
        formattedDates.push({ income_id: incomeData[i].income_id, date: formattedDate });
      }

      setIncomes(incomeData.filter((item) => item.money_type == 1));
      setDate(formattedDates);

    });

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
          <AssetModal
            modalTitle={'놀랍게도 수입이 있어요!🥰'}
            modalPlaceholder={'혹시나 들어온 돈이 있나요?'}
            btnName={'돈이 들어왔따!ㅋㅋ'}
            open={modalOpen}
            close={closeModal}
          />
        </div>

        <div>
          <BudgetButton
            btnClick={openModal}
            btnImg={goneMoney}
            btnName={'내 손을 떠난 돈'}
            btnNameEng={'Expenditure'}
            btnAlt={'나간돈'}
          />
          <AssetModal
            modalTitle={'어디다 썼어요..?😶'}
            modalPlaceholder={'얼마나 나갔는지 말해주세요'}
            btnName={'돈나감요 ㅠ'}
            close={closeModal}
          />
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
          </div>

          <div>
            <section className={styles.kindOfIncome}>
              <h3 className={styles.kindOfMoney}>🍀 혹여나 들어온 돈</h3>
              <span className={styles.incomeMoney}>2,400,000원</span>
            </section>

            {incomes.map((income) => (
              <MoneyRecord
                key={income.income_id}
                kindOfIcon='company'
                income_name={income.income_name}
                money={income.money}
                inOrOut={income.money_type}
                date={date.find((d) => d.income_id === income.income_id).date}
              />
            ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
