import type { FC } from 'react';

import { PageTitle } from '@src/shared/components/text';

import ArrowIcon from '@src/shared/assets/icons/ui/arrow.svg?react';
import cls from './HeroSection.module.scss';

interface HeroSectionProps {
  title: string;
}

export const HeroSection: FC<HeroSectionProps> = ({ title }) => {
  return (
    <section className={cls.hero}>
      <PageTitle title={title} />
      <div className={cls.heroFilter}>
        <span className={cls.heroText}>This week</span>
        <div className={cls.heroIcon}>
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
};
