import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { Button, TextInput, View } from 'react-native';

import styles from './goalInput.styles';

const GoalInput = ({ addGoal }) => {
  const [input, setInput] = useState('');

  const inputChangeHandler = (text) => {
    setInput(text);
    return;
  };

  const buttonPressHandler = () => {
    addGoal(input);
    setInput('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Learn React Native, lose weight, learn backend development'
        onChangeText={inputChangeHandler}
        value={input}
        placeholderTextColor='#99867a'
      />
      <Button title='Add Goal' color='#a64819' onPress={buttonPressHandler} />
    </View>
  );
};

GoalInput.propTypes = {
  addGoal: PropTypes.func.isRequired,
};

export default memo(GoalInput);
