import styles from './Spinner.module.scss';

export const Spinner = () => (
  <div className={styles.posCenter}>
    <div className={styles.spinner} data-testid='Spinner'></div>
  </div>
);
