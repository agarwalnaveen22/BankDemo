const {Dimensions} = require('react-native');

const EStyleSheet = require('react-native-extended-stylesheet').default;

let {width} = Dimensions.get('window');
EStyleSheet.build({
  /* Bootstrap styles here.*/
  $rem: width / 380,
  $primaryColor: '#6db2f7',
  $secondaryColor: '#ffffff',
  $errorColor: '#ff0000',
});

module.exports = EStyleSheet;