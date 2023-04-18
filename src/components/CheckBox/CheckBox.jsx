import styles from '@/components/CheckBox/CheckBox.module.scss';

export const CheckBox = ({ radioValue }) => {
  return (
    <div className={styles.radioStyle}>
      <input type='radio' name={'zzx'} id={radioValue} />
      <label className={styles.radio} htmlFor={radioValue}>
        {radioValue}
      </label>
    </div>
  );
};
