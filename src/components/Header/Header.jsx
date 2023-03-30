// img
import Logo from '@/assets/white_illusion.svg';

// icons
import { GiChargedArrow } from 'react-icons/gi';
import { FaArrowRight } from 'react-icons/fa';

// styles
import styles from '@/components/Header/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <h1>
        <img src={Logo} alt='일루전 로고' width='357' />
      </h1>
      <span>환상속의 돈들을 실체화 시켜봐요</span>
      <form className={styles.budgeInput} action='submit'>
        <label htmlFor='budget'></label>
        <input id='budget' type='number' required placeholder='이번달에 사용할 금액을 적어주세요!' />
        <button className={styles.submitBtn} type='submit'>
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Header;
