// components
import { BudgetInput } from '@/components';

// img
import Logo from '@/assets/white_illusion.svg';

// styles
import styles from '@/components/Header/Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <h1>
        <img src={Logo} alt='일루전 로고' width='357' />
      </h1>
      <span>환상속의 돈들을 실체화 시켜봐요</span>
      <BudgetInput placeHolder={'이번달에 사용할 금액을 적어주세요!!ㅎㅎ'} />
    </div>
  );
};
