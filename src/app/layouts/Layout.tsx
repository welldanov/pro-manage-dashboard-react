import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '@src/widgets/sidebar';
import { Header } from '@src/widgets/header';

import { combineClass } from '@src/shared/lib/CombineClass.ts';

import BurgerIcon from '@src/shared/assets/icons/ui/burger.svg?react';
import ExitIcon from '@src/shared/assets/icons/ui/exit.svg?react';

import cls from './Layout.module.scss';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <div className={cls.layoutWrapper}>
      <div
        className={combineClass([
          cls.sidebarContainer,
          isOpen ? cls['open'] : undefined,
        ])}
      >
        <button className={cls.closeSidebar} onClick={() => setIsOpen(false)}>
          <div className={cls.closeSidebarIconWrapper}>
            <ExitIcon />
          </div>
        </button>
        <Sidebar onNavigate={() => setIsOpen(false)} />
      </div>
      <div className={cls.mainContentWrapper}>
        <div className={cls.mainContentContainer}>
          <div className={cls.headerContainer}>
            <button className={cls.burger} onClick={() => setIsOpen(true)}>
              <div className={cls.burgerIconWrapper}>
                <BurgerIcon />
              </div>
            </button>
            <Header />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
