# Project Overview

## Full-Stack MERN Application:

Built using MongoDB, Express.js, React.js, and Node.js.
Offers a scalable, high-performance architecture suitable for production-grade applications.

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


# Screenshots:

![Image](https://github.com/user-attachments/assets/22cf765c-cea5-430a-afd1-b8fc924da29d)

![Screenshot_auth2](https://github.com/user-attachments/assets/2ab135e1-f745-4334-92e1-86c66eb33a79)

![Screenshot_auth3](https://github.com/user-attachments/assets/6255cb77-ccf2-4696-af9c-3f33c133a0b0)

![Screenshot_auth6](https://github.com/user-attachments/assets/86a4cc12-ddbf-4edb-b6bc-fbb1fbea75a8)

![Screenshot_auth7](https://github.com/user-attachments/assets/bc5caaca-1380-4023-86c5-0322e168fe11)

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
