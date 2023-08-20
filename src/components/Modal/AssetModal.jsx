import styles from '@/components/Modal/AssetModal.module.scss';

// components
import { BudgetInput, CheckBox, PrimaryButton, SecondButton } from '@/components';

// lib
import { v4 as uuidv4 } from 'uuid';

// img
import Logo from '@/assets/logo.svg';

export const AssetModal = ({ modalOption }) => {
  console.log('🚀 ⁝ AssetModal ⁝ modalOption:', modalOption)
  return (
    <>
      {modalOption?.show && (
        <div className={styles.Modal} onClick={modalOption.onClose}>
          <div className={styles.ModalBox}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={Logo} width={'150px'} />
              <h3>{modalOption.show.title}</h3>
            </div>

            <BudgetInput placeHolder={modalOption.show.placeholder} />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '50%',
                marginTop: '20px',
              }}
            >
              {modalOption.show.type.map((list) => (
                <CheckBox radioValue={list} key={uuidv4()} />
              ))}
            </div>

            <div className={styles.BtnWrapper}>
              <PrimaryButton BtnName={modalOption.show.btnTitle} />
              <SecondButton BtnName={'취소'} onClick={modalOption.onClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
