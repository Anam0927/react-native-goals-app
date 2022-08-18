import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Pressable, Text, View } from 'react-native';

import styles from './goals.styles';

const Goal = ({ text, id, deleteGoal }) => {
  return (
    <View style={styles.listItemContainer}>
      <Pressable
        onPress={() => {
          setTimeout(() => {
            deleteGoal(id);
          }, 500);
        }}
        android_ripple={{
          color: '#d98341',
          foreground: true,
        }}
      >
        <Text style={styles.listItem}>{text}</Text>
      </Pressable>
    </View>
  );
};

Goal.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteGoal: PropTypes.func.isRequired,
};

export default memo(Goal);
