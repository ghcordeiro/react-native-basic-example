import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView>
        <Routes />
      </SafeAreaView>
    </>
  );
}
