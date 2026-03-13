import { type FC, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { combineClass } from '@src/shared/lib/CombineClass.ts';
import cls from '@src/widgets/menu-item/MenuItem.module.scss';

interface IMenuItem {
  icon: ReactNode;
  text: string;
  path: string;
  onClick?: () => void;
}

export const MenuItem: FC<IMenuItem> = ({ icon, text, path, onClick }) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        combineClass([cls.menuItem, isActive ? cls.menuItemActive : ''])
      }
    >
      <div className={cls.menuItemIconContainer}>{icon}</div>
      <div className={cls.menuItemTitle}>{text}</div>
    </NavLink>
  );
};
