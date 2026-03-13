import { type FC } from 'react';

import type { IBaseBtnType } from '@src/shared/types/ui/BtnType.ts';

import { combineClass } from '@src/shared/lib/CombineClass.ts';
import cls from './SimpleButton.module.scss';

interface ButtonProps extends IBaseBtnType {
  title: string;
  variety?: 'blue';
}

export const SimpleButton: FC<ButtonProps> = ({
  title,
  onClick,
  variety = 'blue',
}) => {
  return (
    <button
      className={combineClass([cls.simpleButton, cls[variety]])}
      onClick={onClick}
      type={'button'}
    >
      <span className={cls.simpleButtonTitle}>{title}</span>
    </button>
  );
};
