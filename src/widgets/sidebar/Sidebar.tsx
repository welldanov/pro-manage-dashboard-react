import { type FC, type ReactNode } from 'react';

import { MenuItem } from '@src/widgets/menu-item';

import cls from '@src/widgets/sidebar/Sidebar.module.scss';

import GridIcon from '@src/shared/assets/icons/sidebar/grid.svg?react';
import BoardIcon from '@src/shared/assets/icons/sidebar/board.svg?react';
import DatabaseIcon from '@src/shared/assets/icons/sidebar/database.svg?react';
import SettingsIcon from '@src/shared/assets/icons/sidebar/settings.svg?react';
import { combineClass } from '@src/shared/lib/CombineClass.ts';

interface IMenuItem {
  icon: ReactNode;
  text: string;
  path: string;
}

const menuItems: IMenuItem[] = [
  { icon: <GridIcon />, text: 'Dashboard', path: '/dashboard' },
  { icon: <BoardIcon />, text: 'Board', path: '/board' },
  { icon: <DatabaseIcon />, text: 'Analytics', path: '/analytics' },
  { icon: <SettingsIcon />, text: 'Settings', path: '/settings' },
];

interface SidebarProps {
  onNavigate: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ onNavigate }) => {
  return (
    <>
      <nav className={combineClass([cls.sidebar])}>
        <div className={cls.titleContainer}>
          <h1>Pro Manage</h1>
        </div>
        <div className={cls.menuList}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              icon={item.icon}
              text={item.text}
              path={item.path}
              onClick={onNavigate}
            />
          ))}
        </div>
      </nav>
    </>
  );
};
