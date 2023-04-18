// style
import styles from '@/components/Button/Budget.module.scss';

// icons
import { BsPlusCircleFill } from 'react-icons/bs';

export const BudgetButton = ({ btnImg, btnName, btnNameEng, btnAlt, btnClick }) => {
  return (
    <section className={styles.border}>
      <button onClick={btnClick} className={styles.buttonWrapper} type='submit'>
        <img src={btnImg} alt={btnAlt} width='80px' height='80px' />
        <div>
          <p>{btnName}</p>
          <span>{btnNameEng}</span>
        </div>
        <BsPlusCircleFill
          size={30}
          style={{
            color: '#6AA5FF',
            marginLeft: '140px',
          }}
        />
      </button>
    </section>
  );
};
