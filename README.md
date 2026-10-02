# MyTodoList

A task management application built with **React** and **JavaScript (ES6+)**.

The project focuses on practicing React fundamentals, component-based architecture, and state management. It uses **React Hooks**, **Context API**, and a custom hook to manage and share task data across the application.

## Features

* Add new tasks
* Mark tasks as completed
* Manage favorite tasks
* Display active, completed, and selected tasks
* Update the task list dynamically
* Share task state between components

## Technologies

* **React**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **React Hooks**
* **Context API**

## React Concepts

### React Hooks

The project uses:

* `useState` — managing application state
* `useRef` — accessing the task input element
* `useContext` — accessing shared task state

### Context API

Task data is shared between components using `TasksContext` and `TasksProvider`.

```jsx
const { tasks, setTasks } = useContext(TasksContext);
```

This allows different components to access and update the task state without passing it through multiple levels of props.

### Custom Hook

Task state management is separated into a custom `useTasks` hook.

```text
hooks/
└── useTasks.js
```

This keeps state-related logic separate from the UI components.

## Project Structure

```text
src/
├── contexts/
│   └── TasksContext.jsx
│
├── hooks/
│   └── useTasks.js
│
├── App.jsx
├── AddTask.jsx
├── ToDoTask.jsx
├── DoneTasks.jsx
├── SelectedTasks.jsx
├── FooterMenu.jsx
└── ...
```

## How It Works

When a user enters a task and clicks the add button, a new task object is created:

```js
const newTask = {
    id: Date.now(),
    name: inputValue.value,
    done: false,
    isFavorite: false
};
```

The new task is added to the existing state using the spread operator:

```js
setTasks([
    ...tasks,
    newTask
]);
```

The updated state is then available to the components through `TasksContext`, allowing React to re-render the relevant parts of the interface.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/daryaManko01/MyTodoList.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL provided by the development server.

## Project Goals

This project was created as part of my transition from **UI/UX and Web Design to Frontend Development**.

The main goal was to practice building a real interface with React and understand how user interactions, component state, shared state, and application logic work together.

## Future Improvements

* Add persistent task storage
* Add task editing
* Improve form validation
* Improve accessibility
* Add automated tests
* Further refactor and optimize the component structure

<img width="864" height="293" src="https://github.com/user-attachments/assets/3cdfaf1d-850b-4831-ba47-bc6d1d6a27bc" />

