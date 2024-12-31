Thank you for sharing the `ListComponent.js` file! This component displays a single task and provides a trash icon to delete the task by invoking the `deleteTask` function passed down as a prop.

Now that I have all the components, I can help you draft a README.md file for your To-Do List project in React. Based on the information provided, here's a potential outline for your README:

---

# To-Do List App

A simple To-Do list app built using React.js. This project allows users to add tasks, view them in a list, and delete tasks. The app features basic state management with React hooks (`useState`), and the user can interact with the tasks either by pressing the Enter key or clicking the "Add" button.

## Features

- Add tasks by typing in the input field and pressing Enter or clicking the "+" button.
- Display tasks in a list format with a delete button for each task.
- Tasks can be deleted by clicking on the trash icon next to them.
- Simple and responsive UI.

## Components

- **InputComponent**: A component that handles the user input for adding tasks. Users can add a task either by pressing the Enter key or by clicking the "Add" button.
  
- **ListComponent**: A component that displays individual tasks in a list format. Each task has a delete button that allows users to remove the task.

- **App.js**: The main app component that manages the state of the tasks and integrates the input and list components.

## Technologies Used

- React.js
- React Hooks (`useState`)
- Font Awesome (for trash icon)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:

   ```bash
   cd <project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## How It Works

1. **Add Task**: You can add a task by typing in the input field and pressing the Enter key or by clicking the "+" button.
   
2. **Delete Task**: Each task in the list has a trash icon that, when clicked, will delete the task from the list.

3. The task list is managed by the `App.js` component, which passes the tasks down to `ListComponent` for rendering and handles adding/removing tasks.

## Project Structure

```bash
src/
  ├── App.js            # Main app component that handles state
  ├── InputComponent.js # Component for input field to add tasks
  ├── ListComponent.js  # Component to render individual tasks
  └── index.js          # Entry point for the application
```

## Contributing

If you'd like to contribute to this project, feel free to fork it and create a pull request with your changes. You can also open issues to suggest new features or report bugs.