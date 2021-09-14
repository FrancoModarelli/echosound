import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ProductNavigator from './navigation/ProductNavigator';
import { Provider } from 'react-redux'
import store from './store'

export default function App() {

  const [loaded] = useFonts({
    PoppinsRegular: require ('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require ('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) return <AppLoading/>


  return (
    <Provider store={store}>
      <ProductNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
