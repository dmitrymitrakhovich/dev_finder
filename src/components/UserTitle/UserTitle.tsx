import { LocalGuthubUser } from '../../types';
import styles from './UserTitle.module.scss';

interface UserTitleProps
  extends Pick<LocalGuthubUser, 'login' | 'name' | 'created'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.userTitle} data-testid='UserTitle'>
      <h2>{name ?? "Name isn't available"}</h2>
      <a href={`https://github.com/${login}`} target='_blank' rel='noreferrer'>
        <h3>{login}</h3>
      </a>
      <span>{joinedDate}</span>
    </div>
  );
};
