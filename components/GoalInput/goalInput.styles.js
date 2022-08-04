import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 32,

    height: '50%',

    flex: 1,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    color: '#1a0800',
  },
  textInput: {
    marginBottom: 16,

    borderWidth: 1,
    borderColor: '#b3a398',

    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  firstButtonContainer: {
    paddingRight: 8,
  },
  lastButtonContainer: {
    paddingLeft: 8,
  },
});
