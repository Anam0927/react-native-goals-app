import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Goal from './components/Goal';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  return (
    <View style={styles.rootContainer}>
      {/* input area */}
      <GoalInput addGoal={addGoal} />
      {/* list area */}
      {goals?.length > 0 ? (
        <FlatList
          data={goals}
          renderItem={(itemData) => <Goal text={itemData.item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <Goal text='No Goals Yet' />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 16,
    paddingTop: 100,

    flex: 1,

    backgroundColor: '#fffefc',
  },
});
