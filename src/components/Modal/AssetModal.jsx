import styles from '@/components/Modal/AssetModal.module.scss';

// components
import { BudgetInput, CheckBox, PrimaryButton, SecondButton } from '@/components';

// img
import Logo from '@/assets/logo.svg';

export const AssetModal = (props) => {
  const { modalTitle, modalPlaceholder, btnName, close } = props;

  return (
    // <div className={open ? 'styles.Modal styles.ModalOpen ' : 'styles.Modal'}>
    <div className={styles.Modal}>
      <div className={styles.ModalBox}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={Logo} width={'150px'} />
          <h3>{modalTitle}</h3>
        </div>
        <BudgetInput placeHolder={modalPlaceholder} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '50%',
            marginTop: '20px',
          }}
        >
          <CheckBox radioValue={'월급'} />
          <CheckBox radioValue={'용돈'} />
          <CheckBox radioValue={'줍줍'} />
          <CheckBox radioValue={'기타'} />
        </div>

        <div className={styles.BtnWrapper}>
          <PrimaryButton BtnName={btnName} />
          <SecondButton BtnName={'취소'} onClick={close} />
        </div>
      </div>
    </div>
  );
};
