import styles from '@/components/Modal/AssetModal.module.scss';

// components
import { BudgetInput, CheckBox, PrimaryButton, SecondButton } from '@/components';

// lib
import { v4 as uuidv4 } from 'uuid';

// img
import Logo from '@/assets/logo.svg';

export const AssetModal = (props) => {
  const { modalType, modalTitle, modalPlaceholder, btnName, open, close } = props;

  const income = ['용돈', '월급', '줍줍', '기타'];
  const out = ['외식', '쇼핑', '선물', '기타'];

  return (
    <div style={{ display: open ? 'block' : 'none' }}>
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
            {/* {modalType.map((list) => (
            <CheckBox radioValue={list} key={uuidv4()} />
          ))} */}
          </div>

          <div className={styles.BtnWrapper}>
            <PrimaryButton BtnName={btnName} />
            <SecondButton BtnName={'취소'} onClick={close} />
          </div>
        </div>
      </div>
    </div>
  );
};
