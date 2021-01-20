module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*))",
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    './__mocks__/checkEmulator.js',
    './__mocks__/react-native-extended-stylesheet.js',
    "./jest-setup.js"
  ],
};