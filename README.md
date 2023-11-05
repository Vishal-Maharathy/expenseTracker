# Expense Tracker Readme

## Project Overview
Expense Tracker is a full-stack web application built to help you manage your expenses and practice your React skills. It's implemented using the MERN stack, which includes MongoDB, Express, React, and Node.js. This project features a user-friendly interface with options to log in or sign up. Users can securely store and manage their expenses in a personalized database accessible from anywhere. The application also allows users to create custom expense categories and provides filtering options to easily sort and manage expenses.

## Getting Started
To run the Expense Tracker project locally, follow these steps:

### Prerequisites
- Node.js and npm (Node Package Manager) installed
- MongoDB installed or a MongoDB Atlas account

### Installation
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Vishal-Maharathy/expenseTracker.git
   ```

2. Change to the project directory to frontend:

   ```bash
   cd frontend/my-react-app
   ```

3. Install the frontend dependencies:

   ```bash
   npm install
   ```
4. Change to the project directory to backend:

   ```bash
   cd backend
   ```

3. Install the backend dependencies:

   ```bash
   npm install
   ```

### Configuration
1. Create a `.env` file in the project root directory to store your environment variables.

2. Add the following variables to the `.env` file and set their values:

   ```
   PORT=3001 # Port number for the server
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Application
1. Start the server:

   ```bash
   npm start
   ```

2. In a separate terminal, change to the client directory:

   ```bash
   cd client
   ```

3. Start the client:

   ```bash
   npm start
   ```

4. The application should open in your default web browser.

## Features

### User Authentication
- The application provides a login and signup page for users to securely access their account.

### Expense Tracking
- Users can add, edit, and delete expenses, categorize them, and set the date for each entry.

### Custom Categories
- Users have the option to create custom expense categories that are unique to their account, making it easy to organize expenses.

### Filtering Options
- The application allows users to filter expenses by category and date, making it easier to view and manage specific transactions.

## Technologies Used
- MongoDB: A NoSQL database for storing user data and expense records.
- Express.js: A backend framework for building the API and server.
- React: A front-end library for building the user interface.
- Node.js: A JavaScript runtime for running the server.
- JSON Web Tokens (JWT): Used for user authentication and authorization.
- Axios: A promise-based HTTP client for making API requests.
- CSS: Styling for the user interface.

## Contributors
- [Vishal Maharathy](https://github.com/Vishal-Maharathy) - Lead Developer

## Acknowledgments
- Special thanks to the creators of the MERN stack and the open-source community for their invaluable contributions.

Enjoy using the Expense Tracker application! If you encounter any issues or have suggestions for improvement, please feel free to create an issue on the project's GitHub repository.

## Screenshots

![App Screenshot](https://gcdnb.pbrd.co/images/7ZgJzNeAsyu5.png)

![App Screenshot](https://gcdnb.pbrd.co/images/6V72BmHgTXNI.png)

![App Screenshot](https://gcdnb.pbrd.co/images/z0f1GYBbBgYT.png?o=1)

