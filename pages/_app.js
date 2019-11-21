import React from 'react';
import App from 'next/app';
import stores from '../stores';
import { Provider } from 'mobx-react';
import Top from '../components/top';
import './app.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={stores}>
        {/*props로 고치기*/}
        <Top/>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
