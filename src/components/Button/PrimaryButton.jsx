import styles from '@/components/Button/PrimaryButton.module.scss';

export const PrimaryButton = ({ BtnName, onClick }) => {
  return (
    <button type='button' className={styles.BtnWrapper} onClick={onClick}>
      <span>{BtnName}</span>
    </button>
  );
};
