# React Todo Application

This todo application uses [Mantine](https://mantine.dev/) as the primary component library and has been constructed based off of an image reference. It feature persisted settings using localStorage as a storage mechanism.

I am currently in the process of implementing user authentication and role based access functionality!

## Design Reference

![Reference](comp.png)

## Features

### Current

- Create tasks using a central form
- Update individual task status
- Delete individual tasksx
- Global application settings passed through the React Context API
- Task list pagination
- Update application settings
- Persistent application settings using localStorage
- Mock user sign in
- Interact with a live API
- Responsive design
- Transitions and animations using modern design principles

## Using the application

The application connects to a remote REST API for authentication and to interact with a database of todo items. Currently, the REST API is not publically hosted, but the source code can be found in [this repository](https://github.com/ShepleySound/todo-app-api).

If you would like to test this application in its current state, clone this repository and the API repository to your local machine. In addition, environment variables will need to be set in both directories. See the README.md for the environment variables needed for the API.

To set environment variables for the client, create a file called `.env` at the top level of this directory.

Open that file using the text/code editor of your choice, and place the following line inside -

```
REACT_APP_TODO_API_URL = http://localhost:3001
```

_NOTE: I typically use port 3001 when testing an API locally. Replace the above number with whatever port you choose to set in the API's `.env` file._

## UI Resources

- [Mantine](https://mantine.dev/) (Component Library)
- [Framer Motion](https://www.framer.com/motion/) (Animation)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
