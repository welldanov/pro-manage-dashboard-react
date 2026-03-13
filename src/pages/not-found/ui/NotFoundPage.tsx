import { Link } from 'react-router-dom';

import { PageTitle } from '@src/shared/components/text';

import cls from '../styles/NotFound.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={cls.notFoundContainer}>
      <PageTitle title={'Page not found'} />
      <div className={cls.notFoundJump}>
        <span>Please go to the </span>
        <Link to={'/board'}>main page!</Link>
      </div>
    </div>
  );
};
