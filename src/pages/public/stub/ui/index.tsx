import { Link } from 'react-router-dom';

import { PageTitle } from '@src/shared/components/text';

import cls from '../styles/Stub.module.scss';

export const Stub = () => {
  return (
    <div className={cls.stubContainer}>
      <PageTitle title={'Will be later'} />
      <div className={cls.stubJump}>
        <span>You can go to the </span>
        <Link to={'/board'}>board page!</Link>
      </div>
    </div>
  );
};
