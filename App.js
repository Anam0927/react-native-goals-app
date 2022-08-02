import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [goals, setGoals] = useState(
    new Array(1000).fill('').map((_, i) => `Goal ${i + 1}`)
  );

  const inputChangeHandler = (text) => {
    setInput(text);
    return;
  };

  const buttonHandler = () => {
    setGoals((prev) => [...prev, input]);
    setInput('');
  };

  return (
    <View style={styles.rootContainer}>
      {/* input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Learn React Native, lose weight, learn backend development'
          onChangeText={inputChangeHandler}
          value={input}
          placeholderTextColor='#99867a'
        />
        <Button title='Add Goal' color='#a64819' onPress={buttonHandler} />
      </View>
      {/* list area */}
      {goals?.length > 0 ? (
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <Text style={styles.listItem}>{itemData.item}</Text>
          )}
          keyExtractor={(_, index) => index.toString()}
          style={styles.listContainer}
        />
      ) : (
        <Text style={styles.listItem}>No goals yet</Text>
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
  listContainer: {},
  listItem: {
    marginBottom: 8,

    paddingVertical: 16,
    paddingHorizontal: 32,

    color: '#1a0800',
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#f7cb94',
  },
});
