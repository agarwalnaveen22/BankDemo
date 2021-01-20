import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Header = (props: {title: string}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  header: {
    width: '100%',
    height: '50rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6db2f7',
  },
  headerText: {
    fontSize: '25rem',
    color: '#ffffff',
  },
});

export default Header;
