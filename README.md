# Upliance SDE-1 Assessment 

## Overview
This project is a React-based web application that includes multiple components such as a counter with animated effects, a rich text editor, authentication using Firebase, a protected route system, and a user form with local storage capabilities.


## Note: You must sign in first to access the user form and rich text editor.

## Features
- **Counter Component**: 
  - Uses `useState` for state management.
  - Implements animations with `react-spring`.
  - Includes increment, decrement, and reset buttons.
  
- **Rich Text Editor**:
  - Built with `react-quill` for rich text editing.
  - Saves and loads data from `localStorage`.
  
- **Authentication**:
  - Utilizes Firebase authentication.
  - Google Sign-In functionality.
  - Allows users to sign in, sign out, and access protected routes.
  
- **Protected Routes**:
  - Restricts access to certain pages based on authentication status.
  - Redirects unauthorized users to the home page.
  
- **User Form**:
  - Uses Material-UI components.
  - Stores user data in `localStorage`.
  - Displays a warning when navigating away with unsaved changes.

## Tech Stack
- React
- TypeScript
- Firebase Authentication
- React Router
- React Spring
- React Quill
- Material-UI

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Rishurp/Upliance-SDE-1-Assignment.git
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev 
   ```

## Usage
- Open `http://localhost:5173` in your browser.
- Use the navigation bar to switch between components.
- Sign in using Google to access protected routes.
- Use the counter, text editor, and user form as needed.

## Folder Structure
```
├── src
│   ├── components
│   │   ├── Counter.tsx
│   │   ├── Editor.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── UserForm.tsx
│   ├── AuthContext.tsx
│   ├── firebaseConfig.ts
│   ├── App.tsx
│   ├── index.tsx
```

## Screenshots

Here's the preview of the application 


![Home](https://github.com/user-attachments/assets/517ca278-da03-40d8-9530-bfbdc295efc7)

![After_Authentication](https://github.com/user-attachments/assets/c35a57f5-9b8f-4e70-97ee-3afc6488c7f8)

