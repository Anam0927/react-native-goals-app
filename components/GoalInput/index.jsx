import PropTypes from 'prop-types';
import { memo, useRef, useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

import styles from './goalInput.styles';

const GoalInput = ({ addGoal, open, closeModal }) => {
  const [input, setInput] = useState('');

  const inputRef = useRef();

  const inputChangeHandler = (text) => {
    setInput(text);
    return;
  };

  const buttonPressHandler = () => {
    addGoal(input);
    setInput('');
    inputRef.current.blur();
    closeModal();
  };

  return (
    <Modal
      visible={open}
      onDismiss={closeModal}
      animationType='slide'
      statusBarTranslucent
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Learn React Native, lose weight, learn backend development'
          onChangeText={inputChangeHandler}
          value={input}
          placeholderTextColor='#99867a'
          ref={inputRef}
        />
        <View style={styles.buttonsContainer}>
          <View
            style={StyleSheet.flatten([
              styles.buttonContainer,
              styles.firstButtonContainer,
            ])}
          >
            <Button title='Cancel' color='#f7cb94' onPress={closeModal} />
          </View>
          <View
            style={StyleSheet.flatten([
              styles.buttonContainer,
              styles.lastButtonContainer,
            ])}
          >
            <Button
              title='Add Goal'
              color='#a64819'
              onPress={buttonPressHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

GoalInput.propTypes = {
  addGoal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default memo(GoalInput);
