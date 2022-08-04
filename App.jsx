import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Goal from './components/Goal';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [openInputModal, setOpenInputModal] = useState(false);

  const openAddGoalModal = () => {
    setOpenInputModal(true);
  };

  const closeAddGoalModal = () => {
    setOpenInputModal(false);
  };

  const addGoal = (goal) => {
    setGoals((prev) => [...prev, { text: goal, id: uuidv4() }]);
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.addGoalButtonContainer}>
        <Button title='Add a Goal' color='#a64819' onPress={openAddGoalModal} />
      </View>
      {/* input area */}
      <GoalInput
        addGoal={addGoal}
        open={openInputModal}
        closeModal={closeAddGoalModal}
      />
      {/* list area */}
      {goals?.length > 0 ? (
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <Goal
              text={itemData.item.text}
              id={itemData.item.id}
              deleteGoal={deleteGoal}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noGoalsText}>No Goals Yet</Text>
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
  addGoalButtonContainer: {
    marginBottom: 32,
  },
  noGoalsText: {
    color: '#1a0800',
    fontSize: 24,
    textAlign: 'center',
  },
});
