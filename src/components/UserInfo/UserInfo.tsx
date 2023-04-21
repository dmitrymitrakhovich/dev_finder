import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';

import { LocalGuthubUser } from '../../types';
import { InfoItem, InfoItemProps } from '../InfoItem';
import styles from './UserInfo.module.scss';

type UserInfoProps = Pick<
  LocalGuthubUser,
  'blog' | 'company' | 'location' | 'twitter'
>;

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    { icon: <LocationIcon />, text: location },
    { icon: <BlogIcon />, text: blog, isLink: true },
    { icon: <TwitterIcon />, text: twitter },
    { icon: <CompanyIcon />, text: company },
  ];

  return (
    <div className={styles.userInfo} data-testid='UserInfo'>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
