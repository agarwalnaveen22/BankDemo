import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Animated,
  Text,
  PanResponder,
  Alert,
  Dimensions
} from 'react-native';
import CommonStyleSheets from '../Utilities/CommonStyleSheets';
import Header from '../Components/Header';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../Components/Button';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const [isDraggable, setDraggable] = useState(true);
  const navigation = useNavigation();
  const registerData = useSelector((state: { register: any }) => state.register);

  const setPosition = (event: any, gesture: {dx: number; moveX: number}) => {
    const {dropZoneXStart, sliderWidth} = getSliderPosition();
    if (
      gesture.dx > 0 &&
      gesture.moveX <
        (dropZoneXStart ? dropZoneXStart : 0) +
          (sliderWidth ? sliderWidth : 0)
    ) {
      position.setValue({x: gesture.dx, y: 0});
    }
  };

  const getSliderPosition = () => {
    const {width} = Dimensions.get('screen');
    let dropZoneXStart = ((width * 80) / 100);
    let sliderWidth = (dropZoneXStart * 15) / 100;
    dropZoneXStart = (dropZoneXStart * 90) / 100;
    return {
      dropZoneXStart: dropZoneXStart,
      sliderWidth: sliderWidth
    }
  }


  const onReleaseSlider = (event: any, gesture: {moveX: number}) => {
    const {dropZoneXStart} = getSliderPosition();
    if (gesture.moveX > (dropZoneXStart ? dropZoneXStart : 0)) {
      setDraggable(false);
      navigation.navigate('thanks');
    } else {
      initialiseSlider();
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: setPosition,
      onPanResponderRelease: onReleaseSlider
    })
  ).current;

  
  const initialiseSlider = () => {
    setDraggable(true);
    position.setValue({x: 0, y: 0});
  };

  const showAlert = (title: string, message: string) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK'},
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={CommonStyleSheets.container}>
      <Header title={'Welcome ' + registerData.name} />
      <View style={CommonStyleSheets.body}>
        <Button
          onButtonPress={() => navigation.goBack()}
          buttonCaption="Go Back"
          buttonStyle={styles.firstButton}
          buttonTextStyle={styles.firstButtonText}
        />
        <Button
          onButtonPress={() =>
            showAlert('Alert!', 'Second Button Pressed')
          }
          buttonCaption="Press Me"
          buttonStyle={[styles.firstButton, styles.secondButton]}
          buttonTextStyle={styles.firstButtonText}
        />
        <Button
          onButtonPress={() => initialiseSlider()}
          buttonCaption="Initialise Slider"
          buttonStyle={[styles.firstButton, styles.thirdButton]}
          buttonTextStyle={styles.thirdButtonText}
        />
        <View style={styles.sliderButtonContainer}>
          {isDraggable ? (
            <Animated.View
              {...panResponder.panHandlers}
              style={[
                styles.sliderContainer,
                position.getLayout()
              ]}
            />
          ) : (
              <View style={[styles.sliderContainer, { right: 0 }]} />
            )}
          <View style={styles.sliderButtonTextContainer}>
            <Text style={styles.sliderButtonText}>Next Page</Text>
          </View>
          <View
            style={styles.sliderDropZone}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  $backGroundColor: '#35424a',
  firstButton: {
    width: '80%',
    height: '50rem',
    borderWidth: '1rem',
    borderColor: '$primaryColor',
  },
  firstButtonText: {
    color: '$primaryColor',
  },
  secondButton: {
    marginTop: '10rem',
    backgroundColor: '$backGroundColor',
  },
  thirdButton: {
    marginTop: '10rem',
    backgroundColor: '$primaryColor',
  },
  thirdButtonText: {
    color: '$secondaryColor',
  },
  sliderButtonContainer: {
    width: '80%',
    height: '50rem',
    flexDirection: 'row',
    borderRadius: '10rem',
    marginTop: '10rem',
    backgroundColor: '$backGroundColor',
  },
  sliderButtonTextContainer: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderDropZone: {
    width: '10%',
    height: '100%',
  },
  sliderButtonText: {
    fontSize: '20rem',
    color: '$primaryColor',
  },
  sliderContainer: {
    width: '15%',
    height: '50rem',
    borderRadius: '10rem',
    backgroundColor: '$primaryColor',
    position: 'absolute',
    zIndex: 1,
  },
});

export default Welcome;
