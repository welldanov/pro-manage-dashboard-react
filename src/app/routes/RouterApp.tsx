import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from '@src/app/layouts';
import { Board } from '@src/pages/public/board';
import { NotFoundPage } from '@src/pages/not-found';
import { Stub } from '@src/pages/public/stub';

export const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/dashboard'} element={<Stub />} />
        <Route path={'/board'} element={<Board />} />
        <Route path={'/analytics'} element={<Stub />} />
        <Route path={'/settings'} element={<Stub />} />
      </Route>
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
};
