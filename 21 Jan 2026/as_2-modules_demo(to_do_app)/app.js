// TODO: Import task functions
import {addTask, getAllTasks, completeTask} from './task.js';

// Test your module system

// 1. Add some tasks
console.log(addTask("Buy milk", "high", "2026-01-25"));
console.log(addTask("Study JS", "medium", "2026-02-10"));
console.log(addTask("Go gym", "low", "2026-01-30"));
console.log(addTask("Hi", "wrong", "2020-01-01"));

// 2. Display all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log("\nCompleting Task ID 1:");
console.log(completeTask(1));

// 4. Display all tasks again
console.log("\nUpdated Tasks:");
console.log(getAllTasks());