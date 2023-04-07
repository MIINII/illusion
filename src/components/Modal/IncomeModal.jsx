import styles from '@/components/Modal/IncomeModal.module.scss';

// components
import { BudgetInput, PrimaryButton, SecondButton } from '@/components';

export const IncomeModal = () => {
  const onCome = () => {
    console.log('zzz');
  };

  const closeModal = () => {
    console.log('취소');
  };

  return (
    <>
      <div className={styles.ModalBox}>
        <BudgetInput />
        <div className={styles.BtnWrapper}>
          <PrimaryButton BtnName={'돈이 들어왔다!'} onClick={onCome} />
          <SecondButton BtnName={'취소'} onClick={closeModal} />
        </div>
      </div>
    </>
  );
};
