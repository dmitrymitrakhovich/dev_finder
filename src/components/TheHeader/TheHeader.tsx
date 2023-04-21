import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './TheHeader.module.scss';

export const TheHeader = () => (
  <div className={styles.header} data-testid='TheHeader'>
    <div className={styles.logo}>dev_finder</div>
    <ThemeSwitcher />
  </div>
);
