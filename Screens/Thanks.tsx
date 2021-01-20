import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CommonStyleSheets from '../Utilities/CommonStyleSheets';
import Header from '../Components/Header';
import Button from '../Components/Button';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const Thanks = () => {
  const navigation = useNavigation();
  const registerData = useSelector((state: { register: any }) => state.register);
  
  return (
    <SafeAreaView style={CommonStyleSheets.container}>
      <Header title={'Welcome ' + registerData.name} />
      <View style={CommonStyleSheets.body}>
        <Button
          onButtonPress={() => navigation.goBack()}
          buttonCaption="Go Back"
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  button: {
    width: '50%',
    height: '50rem',
    backgroundColor: '$primaryColor',
  },
  buttonText: {
    color: '$secondaryColor',
  },
});

export default Thanks;
