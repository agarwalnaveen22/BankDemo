import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, TextInput, NativeModules, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CommonStyleSheets from '../Utilities/CommonStyleSheets';
import Header from '../Components/Header';
import Button from '../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Constant } from '../Utilities/Constant';
import { useNavigation } from '@react-navigation/native';


const Register = () => {
  const [isNameBlank, setNameBlank] = useState(false);
  const [isEmulator, setEmulator] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const registerData = useSelector((state: {register: any}) => state.register);
  
  useEffect(() => {
    dispatch({
      type: Constant.SET_INTIAL_REGISTER_STATE,
      payload: '',
    });
    NativeModules.CheckEmulator.checkEmulator((response: {result: boolean}) => {
      setEmulator(response.result);
    });
  },[]);

  const updateRegisterData = (label: string, key: any) => {
    const data = {prop: label, value: key};
    dispatch({
      type: Constant.SET_REGISTER_DATA,
      payload: data,
    });
  };

  const navigatePage = () => {
    if (registerData.name !== '') {
      setNameBlank(false);
      navigation.navigate('welcome');
    } else {
      setNameBlank(true);
    }
  };
  return (
    <SafeAreaView style={CommonStyleSheets.container}>
      <Header title="Register" />
      <View style={CommonStyleSheets.body}>
        {isEmulator ? (
          <Text style={styles.emulatorText}>
            This app is running in an emulator/simulator
          </Text>
        ) : null} 
        <TextInput
          onChangeText={(text) => updateRegisterData('name', text)}
          testID="registerText"
          value={registerData.name}
          style={[
            styles.textBox,
            isNameBlank ? styles.errorMessage : null,
          ]}
        />
        <View style={styles.buttonContainer}>
          <Button
            onButtonPress={() => navigatePage()}
            buttonCaption="Save"
            buttonStyle={styles.button}
            buttonTextStyle={styles.buttonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  textBox: {
    width: '80%',
    height: '50rem',
    borderWidth: '1rem',
    paddingStart: '10rem',
    fontSize: '20rem',
    borderRadius: '10rem',
  },
  buttonContainer: {
    marginTop: '50rem',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    height: '50rem',
    backgroundColor: '$primaryColor',
  },
  buttonText: {
    color: '$secondaryColor',
  },
  errorMessage: {
    borderColor: '$errorColor',
  },
  emulatorText: {
    fontSize: '20rem',
    color: '$errorColor',
    marginBottom: '50rem',
    width: '80%',
  },
});

export default Register;
