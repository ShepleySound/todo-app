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

### To Be Implemented

- Interact with a live API
- Responsive design
- Transitions and animations using modern design principles

## Using the application

The application is not currently hosted or connected to any external data store, so it must be tested locally. Once you have cloned the repository and installed dependencies using `npm install`, you can use `npm start` to run the application.

In its current state, sign in functionality uses static test accounts to assess whether or not access should be granted to a certain feature. To test out how this looks, try logging in with the following accounts.

```
---
username: Administrator
password: admin
capabilities: read, update, delete, create
---
username: User
password: user
capabilities: read
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
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
