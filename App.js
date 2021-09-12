import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ProductNavigator from './navigation/ProductNavigator';

export default function App() {

  const [loaded] = useFonts({
    PoppinsRegular: require ('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require ('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) return <AppLoading/>


  return (
    <ProductNavigator/>
  );
}

const styles = StyleSheet.create({

});
