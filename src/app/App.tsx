import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { RouterApp } from '@src/app/routes';
import { store } from '@src/app/store.ts';

import '@src/app/index.scss';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>
  );
}
