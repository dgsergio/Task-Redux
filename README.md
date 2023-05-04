## Tasks manager with React, Redux and Firebase DB

Develop a React application that implements CRUD functionality for managing tasks. The application should use Firebase as the backend to store and manage the task data.

The application should allow the user to perform the following operations:

- Create a new task by filling out a form that includes a field for the task description and a checkbox to mark the task as completed.
- Read the details of an existing task by clicking on its title in a list or search results.
- Update the details of an existing task by editing its fields in a form.
- Delete an existing task by selecting it from the list and confirming the deletion.

The task data should be stored in a Firebase database with the following structure:

```
tasks
------
id (string, unique)
title (string)
description (string)
date ?
completed (boolean)
```

The React application should use Firebase SDK to interact with the database. The SDK should provide functions for creating, reading, updating, and deleting tasks. The SDK should also handle errors and authentication.

The React application should provide a user-friendly interface that allows the user to perform all CRUD operations on the collection of tasks. The interface should be responsive and accessible, with clear and informative error messages. The application should also include a login page that authenticates the user before allowing them to access the task management functionality.
