import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './goals.styles';

const Goal = ({ text }) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem}>{text}</Text>
    </View>
  );
};

Goal.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(Goal);
