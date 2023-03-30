import AsyncStorage from '@react-native-async-storage/async-storage';

import { todo } from '../type/type';

const key = 'todos';

const todoStorage = {
  get: async () => {
    try {
      const todos = await AsyncStorage.getItem(key);

      if (!todos) {
        throw new Error('No saved todos');
      }
      return JSON.parse(todos);
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },
  set: async (todos: todo[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  },
};

export default todoStorage;
