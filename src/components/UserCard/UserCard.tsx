import { LocalGuthubUser } from '../../types';
import { UserInfo } from '../UserInfo';
import { UserStat } from '../UserStat';
import { UserTitle } from '../UserTitle';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGuthubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard} data-testid='UserCard'>
    <img
      src={props.avatar}
      alt={props.login}
      className={styles.avatar}
      loading='lazy'
    />
    <UserTitle created={props.created} login={props.login} name={props.name} />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || "This profile hasn't bio"}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
