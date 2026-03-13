import BellIcon from '@src/shared/assets/icons/header/bell.svg?react';
import QuestionIcon from '@src/shared/assets/icons/header/question.svg?react';
import ProfileIcon from '@src/shared/assets/icons/header/profile.svg?react';

import cls from './Header.module.scss';

export const Header = () => {
  return (
    <header className={cls.header}>
      <a
        href={'#'}
        style={{ width: 18, height: 20 }}
        className={cls.iconContainer}
      >
        <BellIcon />
      </a>
      <a
        href={'#'}
        style={{ width: 20, height: 20 }}
        className={cls.iconContainer}
      >
        <QuestionIcon />
      </a>
      <a
        href={'#'}
        style={{ width: 32, height: 32 }}
        className={cls.iconContainer}
      >
        <ProfileIcon />
      </a>
    </header>
  );
};
