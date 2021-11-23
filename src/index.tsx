import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { useReduxStore } from 'store/store';
import { Router } from 'router/router';

function Root() {
  const store = useReduxStore();

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

function createApp() {
  const rootElement = document.getElementById('root');
  render(
    <StrictMode>
      <Root />
    </StrictMode>,
    rootElement,
  );
}

createApp();
