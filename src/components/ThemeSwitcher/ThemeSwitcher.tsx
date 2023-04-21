import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';

import styles from './ThemeSwitcher.module.scss';

const currentTheme = (): boolean => {
  return JSON.parse(window.localStorage.getItem('isDark') || 'false');
};

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(() => currentTheme());
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    window.localStorage.setItem('isDark', String(isDark));
  }, [isDark]);

  return (
    <div
      className={styles.switcher}
      data-testid='ThemeSwitcher'
      onClick={() => setDark(!isDark)}
    >
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
