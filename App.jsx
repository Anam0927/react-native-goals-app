import { useState } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { colors } from './colors';
import { useFonts } from 'expo-font';

import Goal from './components/Goal';
import GoalInput from './components/GoalInput';

export default function App() {
  const [loaded] = useFonts({
    'Josefin Sans Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
    'Josefin Sans Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
  });

  const [goals, setGoals] = useState([]);
  const [openInputModal, setOpenInputModal] = useState(false);
  const [pressed, setPressed] = useState(false);

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

  return loaded ? (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={() => {
          setPressed(true);
          setTimeout(() => {
            openAddGoalModal();
            setPressed(false);
          }, 500);
        }}
      >
        <View style={styles.buttonShadow} />
        <View
          style={StyleSheet.flatten([
            styles.addGoalButtonContainer,
            pressed ? styles.pressed : null,
          ])}
        >
          <Text style={styles.addGoalButtonText}>Add a Goal</Text>
        </View>
      </Pressable>
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
  ) : null;
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 16,
    paddingTop: 100,

    flex: 1,
  },
  addGoalButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,

    position: 'relative',

    backgroundColor: colors.primary.main,

    borderRadius: 2,
  },
  buttonShadow: {
    position: 'absolute',
    top: 4,
    left: 4,

    width: '100%',
    height: '100%',

    backgroundColor: colors.primary.highlight,
  },
  addGoalButtonText: {
    color: colors.primary.white,
    fontSize: 32,
    fontFamily: 'Josefin Sans Bold',

    textAlign: 'center',
  },
  pressed: {
    top: 4,
    left: 4,
  },
  noGoalsText: {
    color: '#1a0800',
    fontSize: 24,
    textAlign: 'center',
  },
});
