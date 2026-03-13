import { type FC, useState, useRef, useEffect } from 'react';

import type { ActionItem } from '@src/shared/components/action-menu/types.ts';
import { combineClass } from '@src/shared/lib/CombineClass.ts';
import MoreIcon from '@src/shared/assets/icons/ui/more.svg?react';

import cls from './ActionMenu.module.scss';

interface ActionMenuProps {
  actions: ActionItem[];
}

export const ActionMenu: FC<ActionMenuProps> = ({ actions }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={cls.actionMenuWrapper} ref={ref}>
      <button
        className={cls.actionMenuIcon}
        onClick={() => setOpen((prev) => !prev)}
        type={'button'}
      >
        <MoreIcon />
      </button>

      {open && (
        <div className={cls.actionMenu}>
          {actions.map((action, index) => {
            return (
              <div key={index}>
                <button
                  className={combineClass([
                    cls.actionMenuLabel,
                    action.danger ? cls.danger : '',
                  ])}
                  onClick={() => {
                    action.onClick();
                    setOpen(false);
                  }}
                  type={'button'}
                >
                  {action.label}
                </button>
                {index !== actions.length - 1 && (
                  <div className={cls.actionMenuSeparator} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
