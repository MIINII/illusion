import styles from '@/components/CheckBox/CheckBox.module.scss';

export const CheckBox = ({ radioValue }) => {
  return (
    <div className={styles.radioStyle}>
      <label htmlFor={radioValue}>
        <input type='radio' id={radioValue} />
        {radioValue}
      </label>
    </div>
  );
};
