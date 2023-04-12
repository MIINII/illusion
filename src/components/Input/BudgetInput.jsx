import styles from '@/components/Input/BudgetInput.module.scss';

// icons
import { FaArrowRight } from 'react-icons/fa';

export const BudgetInput = ({ placeHolder }) => {
  return (
    <>
      <form className={styles.budgeInput} action='submit'>
        <label htmlFor='budget'></label>
        <input id='budget' type='number' required placeholder={placeHolder} />
        <button className={styles.submitBtn} type='submit'>
          <FaArrowRight />
        </button>
      </form>
    </>
  );
};
