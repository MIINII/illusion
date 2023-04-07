import styles from '@/components/Button/SecondButton.module.scss';

export const SecondButton = ({ BtnName, onClick }) => {
  return (
    <button type='button' className={styles.BtnWrapper} onClick={onClick}>
      <span>{BtnName}</span>
    </button>
  );
};
