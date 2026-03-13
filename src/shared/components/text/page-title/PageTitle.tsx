import { type FC } from 'react';

import cls from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return <h2 className={cls.pageTitle}>{title}</h2>;
};
