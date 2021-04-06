# Exercise Introduction

This exercise is a **single section for a simple video game
website** where we are able to add users and display users, along with the
number of games they have played.

The aim of this practice exercise is to help cement the understanding of:

- where to put state
- how to update and access state
- when to use stateless functional components
- how to use controlled components

## Task

- Create a React app that lets us add a user's first name, last name, and
  username.
- When the user is added, the number of games that they played is
  defaulted to 0.
- Each username has to be unique, so we cannot add multiple users
  with the same username.
- When someone clicks "Add" but the username already
  exists, the app should not allow for a duplicate user to be added and should
  show an error message instead.
- The app should display a list of users, specifically their usernames
  and the number of games they've played.
- If someone tries to add a user when one of the fields is empty, the "Add" button should
  be disabled.
- There should be a button that lets us toggle between showing and hiding
  the number of games the users have played.

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

# Facts about State Management in React

### _State management is at the heart of React._

> It allows us to have a single source of truth for our entire application.\
> That means that we don't need to make sure
> that our data is synched across multiple components; React does it for us. It
> happens via unidirectional data flow: parent components pass properties to
> child components as props.

### _State cannot be modified outside of the component in which it is declared._

> If a child component needs to pass some data back up to the parent (e.g. a
> form that conveys the new user information to the component that holds that the
> users piece of state), we'll need to pass callbacks from the component that holds
> state all the way down to the required component. By calling those callbacks, child
> components are able to pass data to back up to their parents, which are able to
> modify their state. Props can go through multiple components to get to the
> component they ultimately need to reach.
