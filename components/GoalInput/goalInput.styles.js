import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingBottom: 24,
    marginBottom: 24,

    borderBottomWidth: 1,
    borderBottomColor: '#e6e0d5',
    color: '#1a0800',
  },
  textInput: {
    flex: 1,

    borderWidth: 1,
    borderColor: '#b3a398',

    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
