// img
import Logo from '@/assets/logo.svg';

// icons
import { GiChargedArrow } from 'react-icons/gi';

// styles
import { styles } from '@/components/Header/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <h1>
        <img src={Logo} alt='일루전 로고' width='357' />
      </h1>
      <span>환상속의 돈들을 실체화 시켜봐요</span>
      <form action='submit'>
        <label htmlFor='budget'></label>
        <input id='budget' type='number' required placeholder='이번달에 사용할 금액을 적어주세요!' />
        <button type='submit'>
          <GiChargedArrow />
        </button>
      </form>
    </div>
  );
};

export default Header;
