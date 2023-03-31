// style
import styles from '@/components/Button/Budget.module.scss';

// icons
import { BsPlusCircleFill } from 'react-icons/bs';

const BudgetButton = ({ btnImg, btnName, btnNameEng, btnAlt }) => {
  const onClick = () => {
    console.log('클릭');
  };

  return (
    <section className={styles.border}>
      <button onClick={onClick} className={styles.buttonWrapper} type='submit'>
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

export default BudgetButton;
