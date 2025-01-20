# Project Overview

## Full-Stack MERN Application:

Built with MongoDB, Express.js, React.js, and Node.js, this application is a production-grade, scalable solution designed for high performance and security. 
The system integrates modern web development practices, ensuring seamless functionality and an engaging user experience, enhanced further by Tailwind CSS for responsive and stylish UI components.

### 1. Two-Factor Authentication (2FA):
Secure user authentication using One-Time Passwords (OTP) delivered via email.
Role-based registration and access, ensuring tailored user experiences based on roles.

### 2. Secure Session Management:
Utilizes access and refresh tokens to maintain secure, long-lived sessions.
Tokens are managed securely, minimizing the risk of session hijacking.

### 3. Email Verification:
Account creation is validated through email-based verification.
Ensures only legitimate users gain access to the system.

### 4. Employee Management System:
Comprehensive tools to manage employee data efficiently.
Features may include adding, editing, deleting, and viewing employee details.

### 5. User-Friendly Notifications:
Integrated Toastify messaging to provide real-time feedback for user actions.
Enhances user experience with clear and concise messages for successes, warnings, and errors.

### 6. Tailwind CSS Integration
This application utilizes Tailwind CSS to create a responsive and visually appealing user interface.


# Screenshots:

![Image](https://github.com/user-attachments/assets/22cf765c-cea5-430a-afd1-b8fc924da29d)

![Screenshot (4008)](https://github.com/user-attachments/assets/414c7e5f-1e21-4e17-b662-dcef9616448c)

![Screenshot_auth2](https://github.com/user-attachments/assets/2ab135e1-f745-4334-92e1-86c66eb33a79)

![Screenshot (4013)](https://github.com/user-attachments/assets/fd2b1db5-8593-450b-bf6a-ef6bd0fc6877)

![Screenshot (4004)](https://github.com/user-attachments/assets/08ffbe66-6dba-4a97-86f6-b97266ed3baa)


# Key Features
Authentication and Role-Based Access Control:
OTP-Based Email Verification: New users must verify their account via OTP sent to their email.
Role-Based Registration:
Admins and Managers are assigned their roles by providing special codes during registration.
Default role for new users is Employee.

# Token Management:
Access Tokens: Short-lived tokens (15/30 minutes) used for API requests.
Refresh Tokens: Long-lived tokens (7 days) used to refresh access tokens.
Employee Management:
Admins have full control over employee records (create, read, update, delete).
Managers can edit and view employee records.
Employees can view only their own details.
# Emails:
Welcome email sent after successful registration.
OTP and password reset emails sent for verification and recovery.

# Frontend:
Built with React.js and optimized using Vite.
Axios is used for API communication.
React Toastify provides user-friendly notifications.
React Router handles navigation seamlessly.

# Backend:
Built with Node.js and Express.js for RESTful APIs.
Mongoose integrates with MongoDB for database operations.
JWT handles secure token-based authentication.
Nodemailer sends verification and reset emails.

# Tech Stack

## Frontend:
React.js: Frontend library for building user interfaces.

Vite: Development tool for fast builds and optimized performance.

Axios: HTTP client for API communication.

React Router Dom: For routing and navigation.

React Toastify: For notifications.

## Backend:
Node.js: Server-side JavaScript runtime.

Express.js: Web framework for building APIs.

Mongoose: ODM for MongoDB.

JWT: Secure token-based authentication.

Nodemailer: Email sending service.

Bcrypt.js: For password hashing.

## Database:
MongoDB: NoSQL database for user and employee data.
