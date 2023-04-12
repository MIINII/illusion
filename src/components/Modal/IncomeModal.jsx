import styles from '@/components/Modal/IncomeModal.module.scss';

// components
import { BudgetInput, PrimaryButton, SecondButton } from '@/components';

// img
import Logo from '@/assets/logo.svg';

export const IncomeModal = () => {
  const onCome = () => {
    console.log('zzz');
  };

  const closeModal = () => {
    console.log('취소');
  };

  return (
    <>
      <div className={styles.Modal}>
        <div className={styles.ModalBox}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Logo} width={'150px'} />
            <h3>놀랍게도 수입이 있어요!🥰</h3>
          </div>
          <BudgetInput placeHolder={'혹시나 들어온 돈이 있나요?'} />
          <div className={styles.BtnWrapper}>
            <PrimaryButton BtnName={'돈이 들어왔다!'} onClick={onCome} />
            <SecondButton BtnName={'취소'} onClick={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
};
