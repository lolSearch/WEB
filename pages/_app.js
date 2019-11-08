import React from 'react';
import App from 'next/app';
import stores from '../stores';
import { Provider } from 'mobx-react';
import './app.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={stores}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
