// import { ReactComponent as CloseIcon } from 'assets/icon-close.svg';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';

import { Button } from '../Button';
import styles from './Search.module.scss';

interface SearchProps {
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ onSubmit }: SearchProps) => {
  // const handleReset = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.currentTarget.form?.reset();
  // };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <form
      data-testid='Search'
      onSubmit={handleSubmit}
      autoComplete='off'
      data-lpignore='true'
    >
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type='text'
          className={styles.textField}
          id='search'
          autoComplete='off'
          name='username'
          placeholder='Search GitHub username...'
          data-testid='Search'
        />

        {/* <button
          type='button'
          className={styles.closeButton}
          onClick={handleReset}
        >
          <CloseIcon />
        </button> */}

        <Button>Search</Button>
      </div>
    </form>
  );
};
