# Welcome to Lendsqr-fe-test!

This is a preliminary React project created with Vite.

> All assets are within the `public/assets` folder. The svg format resides in the icons folder.

> The font family used for this project are Work Sans & Avenir Next.
> NPM is the default node package manager adopted for this project.

## Get started

To use this project, after you have successfully cloned it from its repo, switch to its main branch and follow the instructions below:

```jsx
npm install
```

Once your installation is completed, run:

```jsx
npm run dev
```

> The above will be hosted at `http://localhost:5173`

## Files

This project comprises of four pages namely:

- Login
- Dashboard
- Users (List)
- User Details

## Technologies Used

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Typescript](https://www.typescriptlang.org/)
- [SASS (for CSS utility)](https://sass-lang.com/)
- [Material-UI](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- Localstorage (to persist user's data)
- [Axios (HTTP Request)](https://axios-http.com/)
- [Momentjs (to format the date joined column)](https://momentjs.com/)

## Components

Component are created using functions, as its fluid and allows for the use of hooks.

## Pages

| Components   | Page                           | Child |
| ------------ | ------------------------------ | ----- |
| Login        | `/pages/auth/login.tsx`        | Yes   |
| Dashboard    | `/pages/Dashboard.tsx`         | Yes   |
| Users        | `/pages/users/UserList.tsx`    | Yes   |
| User Details | `/pages/users/UserDetails.tsx` | Yes   |

### 1. Login

In order to simulate an actual login scenario, a mock was created to give an illusion of a login behavior. You can simply access the application by logging in, you do not necessary have to provide a valid credenials here, any information will suffice. The redirection after a user logs in happens simultaneously after a user's session is lost.

> Once a user logs into the application, he/she is been redirected to the page they last visited, this is strategically orchestrated to give them a better user experience.

### 2. Dashboard

This page is responsible for presentation view, to show the statistic report and summary.

### 3. Users

This is where you get to see the list of users on the [lendsqr](lendsqr.com) application using a table, with a filter form where you can narrow your search by orgName, user, email, phone number, date and status.

### 4. User Details

To get a comprehensive overview of a user data you can simply click on the more icon at the end of the table column to view more details on each user.

## Configurations

### Protected Routes

**Protected Route**

---

_For protecting access from users without authentication_

**Protected Auth Route**

---

_For protecting access from users with authentication_

### SCSS

Using a structure that separate concerns, a partials folder stores each utility feeding off from the variables within the `_variables` file, this files are prefix with a underscore to prevent SASS from transpiling them.

### Axios Config

The parameters for the axios config `[BaseUrl]` here are safely stored within the `.env` file. This is necessary for maintaining a source of truth.

> The .env file was purposely not ignored, so it could be available to a developer who wishes to test after cloning this app.

## Testing

React has always been known for always providing testing support as it ships with the jest framework, and react-testing-library. However i would like to use a different testing framework for this project.

Should the project progress, there will be a need to write integrated test or e2e test using tools like jest or cypress.

- [ ] [Jest](https://jestjs.io/)
- [x] [Cypress](https://www.cypress.io/)

## Developer Info

**Name**:
_Samuel Okeke_

**Socials**:
_[Linkedin](https://linkedin.com/in/samuel-okeke)_
_[Twitter](https://twitter.com/sampedia)_
_[Portfolio](https://samuelokeke.netlify.app)_

**Language**:
_Javascript / Typescript_

---

A React project built with ♥️

---
