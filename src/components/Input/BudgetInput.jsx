import styles from '@/components/Input/BudgetInput.module.scss';

// icons
import { FaArrowRight } from 'react-icons/fa';

export const BudgetInput = () => {
  return (
    <>
      <form className={styles.budgeInput} action='submit'>
        <label htmlFor='budget'></label>
        <input id='budget' type='number' required placeholder='이번달에 사용할 금액을 적어주세요!' />
        <button className={styles.submitBtn} type='submit'>
          <FaArrowRight />
        </button>
      </form>
    </>
  );
};
