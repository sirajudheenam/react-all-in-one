// import React from 'react';
import { create } from 'zustand';
// import { func } from 'prop-types';

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () =>
    set((state) => ({
      bears: state.bears > 0 ? state.bears - 1 : state.bears,
    })),
  removeAllBears: () => set({ bears: 0 }),
}));

// const controller = new AbortController();
export const useTodosStore = create((set) => ({
  todosList: [],
  addTodos: (todos) => set({ todosList: todos }),
  addTodo: (todo) =>
    set((state) => ({ todosList: [...state.todosList, todo] })),
  removeTodo: (id) =>
    set((state) => ({
      todosList: state.todosList.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todosList: state.todosList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  removeAllTodos: () => set({ todosList: [] }),
}));
